const fs = require('fs');
const { argv } = require('process');
const file = argv[2];

function printMetadata(file) {
    try {
        const fileStatus = fs.statSync(file);
        console.log(fileStatus);
    } catch (error) {
        console.error(`Error openign file ${error}`);
    }
}

printMetadata(file);
