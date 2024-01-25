// main.js

// import necessary libraries
import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { HDKey } from '@scure/bip32';
import * as btc from '@scure/btc-signer';
import { HelperFunctions } from './modules';

// create an instance of HelperFunstions
const helperFunctions = new HelperFunctions(file)

// Generate wallet
// generate mnemonic (12 words)
const mnemonic = bip39.generateMnemonic(wordlist);
console.log("Generated mnemonic: ", mnemonic);

// valiadet mnemonic for being 12 words
if(bip39.validateMnemonic(mnemonic, wordlist)){
    // derive key data from mnemonic(generate seed)
    const seed = bip39.mnemonicToSeedSync(mnemonic, process.env.PASSWORD); // password is optional
    
    // derive HD wallet
    const hdkey = HDKey.fromMasterSeed(seed);
    const private_key = hdkey.derive("m/84'/0'/0'/0'/0").privateKey;

    // read data from a file
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', )

    // get the data (give the implementation of reading data from a html page)

    // choose a network
    const network = btcSigner.networks.testnet; // Change to btcSigner.networks.regtest for regtest

    // create the transaction using btc-signer
    const transaction = new btc.Transaction(network);

    // Add an output with OP_PUSHDATA containing your file or plain text
    const dataToEmbed = Buffer.from('Hello, Bitcoin!', 'utf-8');
    transaction.addOutput(dataToEmbed, 0);

    // Add a change address (this should be one of the HD wallet addresses)
    const changeAddress = rootNode.derivePath("m/44'/1'/0'/0/0"); // Change the path accordingly
    transaction.addChange(changeAddress.address);


    //sign the transaction with the HD wallet priavte key
    transaction.sign(0, private_key);

    // serialize and broadcast the transaction
    const rawTransaction = transaction.build().toHex();

    // Broadcast the transaction using a Bitcoin node or a service like Blockcypher
    // (Note: Broadcasting is specific to the network; you might need to use a testnet/regtest explorer for testing)
    // Example using Blockcypher testnet API (replace with the appropriate API for your network):
    const axios = require('axios');
    const blockcypherApiUrl = 'https://api.blockcypher.com/v1/btc/test3/txs/push';

    axios.post(blockcypherApiUrl, { tx: rawTransaction })
      .then(response => {
        console.log('Transaction broadcasted. Transaction ID:', response.data.tx.hash);
      })
      .catch(error => {
        console.error('Error broadcasting transaction:', error.message);
      });


}