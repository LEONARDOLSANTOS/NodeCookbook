const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(), "hello.txt");
const contents = fs.readFileSync(filePath,"utf8");
console.log(`File content before update: ${contents}`);
const upperContents = contents.toUpperCase();
fs.writeFileSync(filePath,upperContents);
console.log(`File was updated !`);

