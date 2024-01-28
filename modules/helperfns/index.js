// index.js

import axios from "axios";

// class with helper functions for reading file data and converting plain text to UTF-8 byte array

//import necessary libraries
import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { HDKey } from '@scure/bip32';
import * as btc from '@scure/btc-signer';
//import axios from 'axios';
import { Buffer } from 'buffer';

import { bitcoin } from 'bitcoinjs-lib/src/networks';

var rootUrl = "https://api.blockcypher.com/v1/bcy/test";

var unspentUrl = 'https://chain.so/api/v3/unspent_outputs';
var broadcastUrl = 'https://chain.so/api/v3/broadcast_transaction';
var minterAddress = '0xc16ae5e8c985b906935a0cadf4e24f0400531883';

var corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

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

class HelperFunctions{
    constructor() {}

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

    // get inputs
    async getInputs(unspentUrl, network, fromAddress, amount) {
        try {            
            // Fetch utxos to be used as inputs for this transaction
            const firstResponse = await axios.get(`${corsProxyUrl}/${unspentUrl}/${network}/${fromAddress}`);
            console.log("First response: ", firstResponse);
            const utxos = firstResponse.data.utxos;
            console.log("UTXOs", utxos);

            const inputs = [];
            let totalAmountAvailable = 0;

            for (const element of utxos) {
                const utxo = {
                    satoshi: Math.floor(Number(element.value) * 100000000),
                    script: element.script_hex,
                    address: fromAddress,
                    txid: element.txid,
                    outputIndex: element.output_no
                };
                totalAmountAvailable += utxo.satoshi;
                inputs.push(utxo);
            }
            
            const satoshiToSend = amount * 100000000;
            var outputCount = 2 // one for recipient  and one for change

            // calculate fee
            const transactionSize = inputCount * 100 + outputCount * 34 + 10 - inputCount;
            let fee = transactionSize * 33;

            if(totalAmountAvailable - satoshiToSend - fee < 0){
                this.handleError("Insufficient funds");
                throw new Error("Insufficient funds!");
            }

            return inputs;
        } catch(error) {
            this.handleError(error);
        }
    }

    // transaction to upload file
    async txToUploadData(data, fromAddress, toAddress, privateKey){
        try {
            const network = "BTCTEST"; // our network

            const inputs = await this.getInputs(unspentUrl, network, fromAddress);

            console.log("Inputs: ", inputs);
            
            // initislize transaction builder
            const txBuilder = new btc.Transaction({allowUnknownOutputs: true});

            // append data as output
            const dataIn = Buffer.from(data);
            const outputScript = Buffer.concat([
                Buffer.from([btc.OP.PUSHDATA1, dataIn.length]),
                dataIn
            ]);

            // Add inputs to the transaction builder
            for (const input of inputs) {
                txBuilder.addInput(input);
            }

            // add the output with a value of 0 (no value transfer)
            txBuilder.addOutput({
                script: outputScript,
                amount: satoshiToSend,
                address: toAddress
            });
            
            txBuilder.fee(Math.round(fee));

            txBuilder.sign(privateKey);

            const serializedTransaction = txBuilder.serialize();

            // broadcast the transaction
            const response = await axios({method: 'POST', url: `${broadcastUrl}/${network}`, data: {tx_hex: serializedTransaction},})
            
            console.log("Result: ", response.data.data);            
            data = response.data;

            return {data, inputs};

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
            const network = "BTCTEST"; // Our network

            const inputs = await this.getInputs(unspentUrl, network, fromAddress, amount)

            const minterInputs = this.convertInputsToMinterFormat(inputs);
    
            const txBuilder = new btc.Transaction({ allowUnknownOutputs: true });
            const outputCount = 1; // Only one output for minter address
    
            // Calculate fee (assuming a simple fee calculation)
            const transactionSize = minterInputs.length * 180 + outputCount * 34 + 10; // Assuming typical sizes for inputs and outputs
            const fee = transactionSize * 33; // Fee rate of 10 sat/byte
    
            const totalAmount = minterInputs.reduce((acc, input) => acc + input.satoshi, 0);
    
            // Calculate amount to send to minter (subtracting fee)
            const amountToSend = totalAmount - fee;
    
            if (amountToSend <= 0) {
                throw new Error("Insufficient funds to cover fee");
            }
    
            // Add inputs to the transaction builder
            for (const input of minterInputs) {
                txBuilder.addInput(input);
            }
    
            // Add output for minter address
            txBuilder.addOutput({
                address: minterAddress,
                amount: amountToSend
            });
    
            // Set transaction fee
            txBuilder.fee(fee);
    
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

            const transactionResult = await this.txToUploadData(data, walletA.address, walletB.address, walletA.privateKey);
            console.log("Transaction Result: ", transactionResult);
    
            await this.txToTransferToMinter(walletA.address, minterAddress, walletA.privateKey, 0.001);
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