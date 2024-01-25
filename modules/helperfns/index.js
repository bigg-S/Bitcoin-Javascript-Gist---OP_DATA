// index.js

// class with helper functions for reading file data and converting plain text to UTF-8 byte array

// import necessary libraries
import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { HDKey } from '@scure/bip32';
import * as btc from '@scure/btc-signer';
import axios from 'axios';

class HelperFunctions {
    constructor() {
        this.feeEstiamtor = '' //new btc._Estimator();
    }

    // read file using the FileReader API
    async readFileAsByteArray(file, callback){
        const reader = new FileReader();

        // set up an event listener for when the file is loaded
        reader.onload = function (event) {
            // access the result property which contain the file content as an ArrayBuffer
            const arrayBuffer = event.target.result;

            // convert the ArrayBuffer to a Uint8Array (byte array)
            const byteArray = new Uint8Array(arrayBuffer);

            // call the provided callback with byte array
            callback(null, byteArray);
        };

        // set up an event listener for when an error occurs
        reader.onerror = function(event) {
            // call the callback with an error object
            callback(new Error('Error reading the file', event.target.error));
        };

        // read the file as an array buffer
        reader.readAsArrayBuffer(file);
    }

    // convert plain text to UTF-8 array
    textToUTF8Array(plainText) {
        // create a TextEncoder instance
        const textEncoder = new TextEncoder();

        // use the encode method to convert the text to a UintArray (UTF-8 byte array)
        const byteArray = textEncoder.encode(plainText);

        return byteArray;
    }

    // generate mnemonic
    generateMnemonic() {
        return bip39.generateMnemonic(wordlist, 128);
    }

    // validate menmonic
    validateMnemonic(mnemonic) {
        return bip39.validateMnemonic(mnemonic, wordlist);
    }

    // get estimated fee
    async getEstimatedFee() {
        try {
            const feeRate = await this.feeEstiamtor.getFeeRate();
            return feeRate;
        } catch(error) {
            this.handleError(error);
        }
    }

    // get inputs
    async getInputs(amount, privateKey) {
        try {
            const nodeUrl = process.env.BITCOIN_API;
            const response = await axios.get(`${nodeUrl}/unspent/${privateKey.getAddress()}`);
            const inputs = response.data;

            // filter inputs until the required amount is covered
            let totalAmount = 0;
            const selectedInputs = [];
            for(const input of inputs){
                totalAmount += input.amount;
                selectedInputs.push(input);
                if(totalAmount >= amount) {
                    break;
                }
            }

            // check if inputs cover the required amount
            if(totalAmount < amount) {
                this.handleError("Insufficient funds");
            }

            return selectedInputs;
        } catch(error) {
            this.handleError(error);
        }
    }

    // derive key pairs
    derivePrivateKey(seed){
        const masterKey = HDKey.fromMasterSeed(seed);
        const path = "m/44' /0' /0' /0/0"; //bip44 path
        const privateKey = masterKey.derive(path).privateKey;
        return privateKey;
    }

    // create a transaction
    async createTransaction(data, privateKey) {
        try {
            // initislize transaction builder
            const txBuilder = new btc.Transaction();

            // define output with OP_PUSHDATA (creating an output script containig OP_PUSHDATA prefix indicating variable length, bytelendgth of the data and the actual data byte array)
            const outputScript = new Uint8Array([0x4c, data.length]).join(data);

            // add the output with a value of 0 (no value transfer)
            txBuilder.addOutput({
                script: outputScript,
                value: 0,
            });

            // set teh network parameters
            txBuilder.setNetwork("testnet"); // here you can use the other networks i.e mainnet, regtest as needed

            // estimate the transaction fee
            const feeRate = await this.getEstimatedFee();
            const estimatedFee = Math.ceil(txBuilder.fee({feeRate}));

            // add inputs to cover the data output and transaction fee
            const inputs = await this.getInputs(estimatedFee, privateKey);

            // add the inputs to the transaction
            for(const input of inputs){
                txBuilder.addInput(input.txid, input.vout, 0xffffffff, Buffer.from(input.script, 'hex'))
            }

            // sign the transaction
            txBuilder.sign(0, privateKey);

            // return the signed transaction
            return txBuilder.build();
        } catch(error) {
            this.handleError(error);
        }
    }

    // broadcast the transaction
    async broadcastTx(signedTx) {
        try {
            // the bitcoin node API for broadcasting
            const nodeUrl = process.env.BITCOIN_API;

            // build the request body
            const requestBody = {
                txid: signedTx.id,
                hex: signedTx.toHex(),
            };

             // send the POST request to broadcast the transaction
            const response = await axios.post(nodeUrl, requestBody);

            console.log("Transaction broadcast successfully: ", response.data);
            this.displayResults(response.data);
        } catch(error) {
            console.error("Error broadcasting transaction: ", error);
            this.handleError(error);
        }
        
    }

    // upload file or write plain text to bitcoin mainchain
    uploadToBitcoin(data) {
        try {
            const mnemonic = this.generateMnemonic();
            console.log("Generated mnemonic: ", mnemonic);

            // valiadet mnemonic for being 12 words
            if(this.validateMnemonic(mnemonic)) {
                // derive key data from mnemonic(generate seed)
                const seed = bip39.mnemonicToSeedSync(mnemonic, process.env.PASSWORD); // password is optional

                //derive private key from master key for address ("m/44' /0' /0' /0/0")
                const privateKey = this.derivePrivateKey(seed);

                // build the transaction (signed)
                const transaction = this.createTransaction(data, privateKey);

                // broadcast the transaction
                this.broadcastTx(transaction);         
            
            } else {
                this.handleError("Invalid mnemonic");
            }
        } catch(error) {
            this.handleError(error);
        }
    }

    // display results
    displayResults(message) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Broadcasting transaction: ${message}`;
    }

    // handle errors
    handleError(message) {
        console.error(message);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<span style="color: red;">Error: ${message}</span>`;
    }
}

// export class as a module
export {HelperFunctions};