// main.js

// import necessary libraries
import { HelperFunctions } from './modules';

function processInputs() {
    const helper = HelperFunctions();
    const fileInput = document.getElementById('fileInput');
    const textInput = document.getElementById('textInput');
    const resultDiv = document.getElementById('result');

    // handle file input
    if(fileInput.files.length > 0) {
        const file = fileInput.files[0];
        helper.readFileAsByteArray(file, (error, byteArray) => {
            if(error) {
                resultDiv.innerHTML = `<span style="color: red;">Error reading file: ${error.message}</span>`;
            } else {
                resultDiv.innerHTML = `<p style="color: black;"> File Content (as byte array): ${byteArray.join(',')}</p>`;
            }
        });
    }

    // handle text input
    const plainText = textInput.ariaValueMax.trim();
    if(plainText !== '') {
        const textByteArray = helper.textToUTF8Array(plainText);
        resultDiv.innerHTML += `<p style="color: black;"> Text Content (as utf-8 array): ${textByteArray.join(',')}</p>`;
    }
}