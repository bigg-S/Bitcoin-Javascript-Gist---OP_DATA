// index.js

import axios from "axios";

// class with helper functions for reading file data and converting plain text to UTF-8 byte array

import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { HDKey } from '@scure/bip32';
import * as btc from '@scure/btc-signer';

import { networks } from "bitcoinjs-lib";

import secp256k1 from 'secp256k1';
import base58 from "bs58";
import { Hex } from "bitcoinjs-lib/src/types";

var blockstreamUrl = 'blockstream.info/testnet/api';

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
    async getInputs(network, fromAddress, privateKey) {
        try {
            const newPrivateKey = base58.decode(privateKey).slice(1, 33);

            // Fetch utxos to be used as inputs for this transaction 
            const firstResponse = await axios.get(`${corsProxyUrl}/${blockstreamUrl}/address/${fromAddress}/utxo`);
            const utxos = firstResponse.data;

            const inputs = [];
            
            var inputCount = 0; // loop counter
            for (const element of utxos) {
                const utxo = {
                    satoshi: element.value,
                    index: inputCount,
                    address: fromAddress,
                    txid: element.txid,
                    outputIndex: element.vout,
                    witnessUtxo: {
                        amount: btc.Decimal.decode(`${element.value}`),
                        script: btc.p2wpkh(secp256k1.publicKeyCreate(newPrivateKey, true), network).script,
                    },
                };

                inputs.push(utxo);
                inputCount += 1;
            }

            return inputs;

        } catch(error) {
            this.handleError(error);
            console.log("An error occurred while getting inputs");
        }
    }

    // transaction to upload file
    async txToUploadData(network, data, fromAddress, toAddress, privateKey, amount){
        try {
            const newPrivateKey = base58.decode(privateKey).slice(1, 33);
            const inputs = await this.getInputs(network, fromAddress, privateKey);

            console.log("Done getting inputs... ", inputs);

            // append data as output
            const dataIn = Buffer.from(data);
            const outputScript = Buffer.concat([
                Buffer.from([btc.OP.PUSHDATA1, dataIn.length]),
                dataIn
            ]);

            console.log("Script: ", outputScript);

            const amountInSatoshi = BigInt(amount * 100000000);

            const outputs = [
                {
                    address: toAddress, 
                    script: outputScript,
                    amount: 0n
                },
                {
                    address: toAddress,
                    amount: amountInSatoshi
                }
            ]

            console.log("Done setting outputs...");

            const selected = btc.selectUTXO(inputs, outputs, 'default', {
                changeAddress: fromAddress,
                feePerByte: 2n,
                bip69: true,
                createTx: true,
                network: network,
                allowUnknownOutputs: true
            });

            const {tx} = selected;
            tx.sign(newPrivateKey);
            tx.finalize();

            console.log("Endpoint address: ", `${corsProxyUrl}/${blockstreamUrl}/tx`);

            // broadcast the transaction
            const response = await axios({method: 'POST', url: `${corsProxyUrl}/${blockstreamUrl}/tx`, data: Hex(tx),});

            console.log("Done broadcasting transaction...", response.data);

            return tx;

        }catch(error) {
            console.log("An error occurred while sending 1st transaction");
            this.handleError(error);
        }
    }

    // transaction to transfer to minter address
    async txToTransferToMinter(network, fromAddress, toAddress, minterAddress, privateKey) {
        try {
            const newPrivateKey = base58.decode(privateKey).slice(1, 33);

            const inputs = await this.getInputs(network, fromAddress, privateKey);

            console.log("Done getting inputs... ", inputs);

            // calculate the UTXOs total amount from the first transaction
            let totalAmount = 0;
            for(const utxo of inputs){
                totalAmount += utxo.satoshi;
            }

            console.log("done getting utxos: ", totalAmount);

            const amountInSatoshi = BigInt(totalAmount);

            console.log(amountInSatoshi);

            const outputs = [
                {
                    address: minterAddress,
                    amount: amountInSatoshi
                }
            ]

            console.log("Done setting outputs...");

            const selected = btc.selectUTXO(inputs, outputs, 'default', {
                changeAddress: toAddress,
                feePerByte: 2n,
                bip69: true,
                createTx: true,
                network: network,
                allowUnknownOutputs: true
            });

            const {tx} = selected;
            tx.sign(newPrivateKey);
            tx.finalize();

            // broadcast the transaction
            const response = await axios({method: 'POST', url: `${corsProxyUrl}/${blockstreamUrl}/tx`, data: {tx_hex: tx},});

            console.log("Done broadcasting transaction...", response.data);

            return tx;
        } catch (error) {
            this.handleError(error);
            console.log("An error occurred while sending the transaction:", error);
            throw error;
        }
    }

    // entry point
    async uploadData(data, password) {
        try {
            const network = networks.testnet;
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

            const transactionResult = await this.txToUploadData(network, data, walletA.address, walletB.address, walletA.privateKey, 0.0001);
            console.log("Transaction Result: ", transactionResult);
    
            //const transaction2 = await this.txToTransferToMinter(network, walletA.address, walletB.address, minterAddress, walletA.privateKey);

            //console.log("Second transaction done: ", transaction2);
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