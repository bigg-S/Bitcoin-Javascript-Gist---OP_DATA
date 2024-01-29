// index.js

import axios from "axios";

// class with helper functions for reading file data and converting plain text to UTF-8 byte array

//import necessary libraries
import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { HDKey } from '@scure/bip32';
import * as btc from '@scure/btc-signer';

import { Buffer } from 'buffer';

import secp256k1 from 'secp256k1';

import { bitcoin } from 'bitcoinjs-lib/src/networks';
import { Hex } from "bitcoinjs-lib/src/types";

var rootUrl = "https://api.blockcypher.com/v1/bcy/test"; //blockcypher's test chain

var unspentUrl = 'blockstream.info/testnet/api';
var broadcastUrl = 'https://chain.so/api/v3/broadcast_transaction';
var minterAddress = '0xc16ae5e8c985b906935a0cadf4e24f0400531883';

var corsProxyUrl = 'http://127.0.0.1:8080';

// generate wallets for two transactions

//sender wallet
var walletA = {
    address: 'mfkQJoD2kWK21AW7WU3vxDmQfvX6qxXL5M',
    privateKey: 'cSX465pCJhqj3YEedFr39iusYnmTpsGUzrayFZL4YAJcNdyUHeMs'
}

var walletB = {
    address: 'mykzqcoVAAeCtUucyt8PVuAze61L2TzRfn',
    privateKey: 'cVj6geQqVGesfcr5KrmzpB4FwydzCviuBcGCJfuAJX6V5qqMqBpr'
}

var isSecondTransaction = false;

class HelperFunctions{
    constructor() {
        this.mnemonic = bip39.generateMnemonic(wordlist, 128);
    }

    // read file using the FileReader API
    async readFileAsBinaryString(file, callback){
        const reader = new FileReader();
    
        // set up an event listener for when the file is loaded
        reader.onload = function (event) {
            // access the result property which contains the file content as a binary string
            const binaryString = event.target.result;
    
            // call the provided callback with the binary string
            callback(null, binaryString);
        };
    
        // set up an event listener for when an error occurs
        reader.onerror = function(event) {
            // call the callback with an error object
            callback(new Error('Error reading the file', event.target.error));
        };
    
        // read the file as a binary string
        reader.readAsBinaryString(file);
    }

    // derive key pairs
    derivePrivateKey(seed){
        const rootKey = HDKey.fromMasterSeed(seed);
        console.log("Root key: ", rootKey);
        return rootKey.derive("m/44'/0'/0'/0/0").privateKey;
    }

    // get inputs
    async getInputs(network, fromAddress, amount, privateKey) {
        try {
            // Fetch utxos to be used as inputs for this transaction 
            const firstResponse = await axios.get(`${corsProxyUrl}/${unspentUrl}/address/${fromAddress}/utxo`);
            console.log("First response: ", firstResponse);
            const utxos = firstResponse.data;
            console.log("UTXOs", utxos);

            const inputs = [];
            let totalAmountAvailable = 0;
            var outputCount = 2; // assume is first transaction be default(one for recipient  and one for change)
            
            var inputCount = 0; // loop counter
            for (const element of utxos) {
                const rawTx = await axios.get(`${corsProxyUrl}/${unspentUrl}/tx/${element.txid}/hex`);
                console.log("Raw Transaction: ", rawTx);
                const utxo = {
                    satoshi: Math.floor(Number(element.value)),
                    index: inputCount,
                    address: fromAddress,
                    txid: element.txid,
                    outputIndex: element.vout,
                    address: fromAddress,
                    witnessUtxo: {
                        amount: Math.floor(Number(element.value)),
                        script: btc.p2wpkh(secp256k1.publicKeyCreate(privateKey, true)).script,
                    },
                };
                totalAmountAvailable += utxo.satoshi;
                inputs.push(utxo);
                inputCount += 1;
            }

            if(!isSecondTransaction){
                outputCount = 1; // Only one output for minter address
            }
            
            const satoshiToSend = amount * 100000000;

            // calculate fee
            const transactionSize = inputCount * 100 + outputCount * 34 + 10 - inputCount;
            let fee = transactionSize * 33;  // 33 satoshi per byte   

            const finalAmount = totalAmountAvailable - satoshiToSend - fee;

            return { inputs, finalAmount, fee};
        } catch(error) {
            this.handleError(error);
            console.log("An error occurred while getting inputs");
        }
    }

    // transaction to upload file
    async txToUploadData(data, fromAddress, toAddress, privateKey, amount){
        try {
            const network = "BTCTEST"; // our network

            const result = await this.getInputs(network, fromAddress, amount, privateKey);

            console.log("Inputs: ", result.inputs);
            console.log("Change: ", result.finalAmount);
            console.log("Fee: ", result.fee);

            if(result.finalAmount < 0){
                this.handleError("Insufficient funds");
                throw new Error("Insufficient funds!");
            }
            
            // initislize transaction builder
            const txBuilder = new btc.Transaction({allowUnknownOutputs: true});

            // append data as output
            const dataIn = Buffer.from(data);
            const outputScript = Buffer.concat([
                Buffer.from([btc.OP.PUSHDATA1, dataIn.length]),
                dataIn
            ]);

            console.log("Script: ", outputScript);

            // Add inputs to the transaction builder
            for (const input of result.inputs) {
                txBuilder.addInput(input);
            }

            console.log("Done setting inputs... ");

            // add the output with a value of 0 (no value transfer)
            //const amountInsatoshi = BigInt(Math.round(amount * 100000000));
            txBuilder.addOutput({
                script: outputScript,
                amount: BigInt(amount * 100000000),
                address: toAddress
            });
            
            console.log("Done setting outputs...");

            const change = BigInt(Math.floor(result.finalAmount));
            
            txBuilder.addOutputAddress(toAddress, change, "testnet"); // send chnage

            console.log("Done setting fee...");

            txBuilder.sign(privateKey);

            console.log("Done signing...");

            txBuilder.finalize();

            console.log("Transaction serialized...");

            // broadcast the transaction
            // const response = await axios({method: 'POST', url: `${broadcastUrl}/${network}`, data: {tx_hex: serializedTransaction},})
            
            // console.log("Transaction broadcasted...", response);

            // console.log("Result: ", response.data.data);            
            // const outData = response.data;

            // console.log("Output data: ", outData);

            //return outData;

        }catch(error) {
            console.log("An error occurred while sending 1st transaction");
            this.handleError(error);
        }
    }

    // convert inputs to minter format
    convertInputsToMinterFormat(inputs) {
        return inputs.map(input => {
            return {
                Nonce: 1, // Nonce starts from 1 for each address
                ChainID: 2, // Assuming testnet for Bitcoin
                GasPrice: "1", // Gas price, adjust accordingly
                GasCoin: 0, // Coin ID to pay fee, adjust accordingly
                Type: 1, // Assuming regular transfer transaction type
                Data: [], // Data of the transaction, empty for transfer
                Payload: [], // Arbitrary bytes, can be left empty
                ServiceData: [], // Reserved field, can be left empty
                SignatureType: 1, // Single-sig transaction
                SignatureData: {} // Signature data, to be filled later
            };
        });
    }

    // transaction to transfer to minter address
    async txToTransferToMinter(fromAddress, minterAddress, privateKey, amount) {
        try {
            isSecondTransaction = true;

            const network = "BTCTEST"; // Our network

            const result = await this.getInputs(network, fromAddress, amount)

            const minterInputs = this.convertInputsToMinterFormat(result.inputs);
    
            const txBuilder = new btc.Transaction({ allowUnknownOutputs: true });
            
    
            if (result.finalAmount <= 0) {
                throw new Error("Insufficient funds to cover fee");
            }
    
            // Add inputs to the transaction builder
            for (const input of minterInputs) {
                txBuilder.addInput(input);
            }
    
            // Add output for minter address
            txBuilder.addOutput({
                address: minterAddress,
                amount: result.finalAmount
            });
    
            // Set transaction fee
            txBuilder.fee(result.fee);
    
            // Sign transaction
            txBuilder.sign(privateKey);
    
            // Serialize transaction
            const serializedTransaction = txBuilder.serialize();
    
            // Broadcast the transaction
            const response = await axios.post(`${broadcastUrl}/${network}`, { tx_hex: serializedTransaction });
    
            console.log("Result: ", response.data.data);
            return response.data;
        } catch (error) {
            console.log("An error occurred while sending the transaction:", error);
            throw error;
        }
    }

    // entry point
    async uploadData(data, password) {
        try {
            const mnemonic = this.mnemonic;
            console.log("Generated mnemonic: ", mnemonic);

            if(!bip39.validateMnemonic(mnemonic, wordlist)){
                throw new Error("Invalid menmonic");
            }

            // derive key data from mnemonic(generate seed)
            const seed = bip39.mnemonicToSeedSync(mnemonic, password); // password is optional

            //derive private key from root key for address ("m/44' /0' /0' /0/0")
            const privateKey = this.derivePrivateKey(seed);
            console.log("Private Key", privateKey);

            const transactionResult = await this.txToUploadData(data, walletA.address, walletB.address, privateKey, 0.0001);
            console.log("Transaction Result: ", transactionResult);
    
            //await this.txToTransferToMinter(walletA.address, minterAddress, walletA.privateKey, 0.0001);
        } catch (error) {
            console.log("An error occurred while uploading data:", error);
            // Handle error appropriately
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