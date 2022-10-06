const fs = require('fs').promises;
const path = require('path');
const pathFile = path.join(process.cwd(), 'hello.txt');

async function run() {
    try {
        const contents = await fs.readFile(pathFile, 'utf8')
        console.log(`File contents :${contents} `);
    } catch (error) {
        console.log(error);
    };
}

run();