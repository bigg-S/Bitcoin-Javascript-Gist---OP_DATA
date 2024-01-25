// class with helper functions for reading file data and converting plain text to UTF-8 byte array
class HelperFunctions {
    constructor(file, plainText) {
        this.file = file;
        this.plainText = plainText;
    }

    // read file using the FileReader API
    readFileAsByteArray(callback){
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
            callback(new Error('Error reading the file'));
        };

        // read the file as an array buffer
        reader.readAsArrayBuffer(file);
    }

    // convert plain text to UTF-8 array
    textToUTF8Array() {
        // create a TextEncoder instance
        const textEncoder = new TextEncoder();

        // use the encode method to convert the text to a UintArray (UTF-8 byte array)
        const byteArray = textEncoder.encode(plainText);

        return byteArray;
    }
}

// export class as a module
export {HelperFunctions};