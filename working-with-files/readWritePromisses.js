const fs = require('fs').promises;
const path = require('path');
const pathFile = path.join(process.cwd(),'hello.txt');
fs.readFile(pathFile, 'utf8')
    .then((contents) => {
        console.log(`File contents :${contents} `);
    });