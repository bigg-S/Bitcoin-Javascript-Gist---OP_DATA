// index.js

// class with helper functions for reading file data and converting plain text to UTF-8 byte array

// import necessary libraries
import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { HDKey } from '@scure/bip32';
import * as btc from '@scure/btc-signer';

import axios from 'axios';

import { Buffer } from 'buffer';

class HelperFunctions {
    constructor() {
        this.mnemonic = this.generateMnemonic();
        console.log("Am in the constructor!");
        this.feeEstiamtor = ''; //new btc._Estimator({});
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
        console.log("Master key!", seed);
        const masterKey = HDKey.fromMasterSeed(seed);        
        const path = "m/44'/0'/0'/0/0"; //bip44 path
        const privateKey = masterKey.derive(path).privateKey;
        return privateKey;
    }

    // create a transaction
    async createOPPushDataTransaction(data, privateKey) {
        try {
            // initislize transaction builder
            const txBuilder = new btc.Transaction();

            // Assuming `data` is a byte array containing the correct data:
            const dataHex = Buffer.from(data).toString('hex');
                    
            // Ensure even hex length:
            const adjustedDataHex = dataHex.length % 2 === 0 ? dataHex : '0' + dataHex;
                    
            // Calculate correct push size:
            const dataLength = adjustedDataHex.length / 2;
            const pushSize = dataLength <= 75 ? dataLength : Math.ceil(Math.log2(dataLength) / 8) + 76;
                    
            // Construct complete output script:
            const outputScript = `OP_RETURN ${pushSize.toString(16)}${adjustedDataHex}`;
            //new Uint8Array([0x4c + data.length]).join(data);

            console.log("Output script: ", outputScript);

            // add the output with a value of 0 (no value transfer)
            txBuilder.addOutput({
                script: script,
                amount: BigInt("0")
            });

            // Fund transaction (assuming a UTXO with sufficient funds)
            const inputUtxo = {
                // Replace with actual UTXO details
                txId: '...',
                vout: 0,
                scriptPubKey: '...',
                satoshis: 100000,
              };
              transaction.addInput(inputUtxo);

            // set teh network parameters
            //txBuilder. // here you can use the other networks i.e mainnet, regtest as needed

            // console.log("Estimating transaction fee...");
            // // estimate the transaction fee
            // const feeRate = await this.getEstimatedFee();
            // console.log("Fee rate: ", feeRate);
            // const estimatedFee = Math.ceil(txBuilder.fee({feeRate}));
            // console.log("Fee rate: ", estimatedFee);

            // console.log("Generating inputs...")
            // // add inputs to cover the data output and transaction fee
            // const inputs = await this.getInputs(estimatedFee, privateKey);
            // console.log("Inputs: ", inputs);

            // // add the inputs to the transaction
            // for(const input of inputs){
            //     txBuilder.addInput({
            //         txid: input.txid, 
            //         index: input.index,
            //         witnessUtxo: {
            //             amount: input.amount,
            //             script: Buffer.from(input.script, 'hex')
            //         }
            //     })
            // }

            // sign the transaction
            txBuilder.sign(0, privateKey);

            // return the signed transaction
            return txBuilder.build();
        } catch(error) {
            this.handleError(error);
        }
    }

    // transfer transaction (transaction will be used to generate the previous transaction id and index)
    async createTransferTransaction(transaction, minterAddress, privateKey, password, network = 'testnet') {
        try {
      
          // Create transaction with minter address as output
          const transaction = new btc.TransactionBuilder(network);
          transaction.addOutput(minterAddress, 0); // Assuming you want to send all funds
      
          // Use UTXO from previous transaction as input
          transaction.addInput({
            txId: previousTransactionId,
            vout: previousOutputIndex,
            // ScriptPubKey will be fetched from the network
          });
      
          // Sign transaction with private key
          transaction.sign(privateKey);
      
          // Broadcast transaction
          const serializedTx = transaction.buildIncomplete();
          await this.broadcastTx(network, serializedTx);
      
          console.log("Transaction broadcasted:", txHex);
        } catch (error) {
          console.error("Error creating or broadcasting transaction:", error);
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
    uploadToBitcoin(data, password) {
        console.log("Starting the upload process: ", data);
        try {
            const mnemonic = this.mnemonic;
            console.log("Generated mnemonic: ", mnemonic);

            // valiadet mnemonic for being 12 words
            if(this.validateMnemonic(mnemonic)) {
                // derive key data from mnemonic(generate seed)
                const seed = bip39.mnemonicToSeedSync(mnemonic, password); // password is optional
                console.log("The mnemonic was valid!", seed);
                //derive private key from master key for address ("m/44' /0' /0' /0/0")
                const privateKey = this.derivePrivateKey(seed);
                console.log("Private Key", privateKey);

                // build the transaction (signed)
                const transaction = this.createOPPushDataTransaction(data, privateKey);
                console.log("Transaction: ", transaction);

                //generate minter address

                const transferTransaction = this.createTransferTransaction(transaction, minterAddress, privateKey, network="testnet", password)

                console.log("Transfer transaction: ", transferTransaction);

                // broadcast the transaction
                //this.broadcastTx(transaction);         
            
            } else {
                this.handleError("Invalid mnemonic");
            }
        } catch(error) {
            this.handleError("Error during upload: " + error);
        }
    }

    // display results
    displayResults(message) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Broadcasting transaction: ${message}`;
    }

    // handle errors
    handleError(message) {
        console.log(message);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<span style="color: red;">Error: ${message}</span>`;
    }
}

// export class as a module
export {HelperFunctions};