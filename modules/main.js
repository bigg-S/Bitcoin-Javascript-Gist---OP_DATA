// main.js

// import necessary libraries
import { HelperFunctions } from "./helperfns";

const helper = new HelperFunctions();
const password = "password";

function processInputs() {
    
    const fileInput = document.getElementById('fileInput');
    const textInput = document.getElementById('textInput');
    const resultDiv = document.getElementById('result');

    // handle file input
    if(fileInput.files.length > 0) {
        const file = fileInput.files[0];
        console.log("getting ready...");
        helper.readFileAsBinaryString(file, (error, binaryString) => {
            if(error) {
                resultDiv.innerHTML = `<span style="color: red;">Error reading file: ${error.message}</span>`;
            } else {                
                resultDiv.innerHTML = `<p style="color: black;"> File Content (binary string): ${binaryString}</p>`;
                helper.uploadData(binaryString, password);
            }
        });
    }

    // handle text input
    const plainText = textInput.value.trim();
    if(plainText !== '') {        
        resultDiv.innerHTML = resultDiv.innerHTML + `<p style="color: black;"> Text Content (as utf-8 array): ${plainText}</p>`;
    }
}

// expose the processInputs function globally for the onclick attribute
window.processInputs = processInputs;