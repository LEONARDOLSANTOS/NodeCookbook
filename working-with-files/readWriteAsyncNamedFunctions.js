const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(), "hello.txt");
fs.readFile(filePath,"utf8", (err, contents) => {
    if (err) {
        console.log(`Error reading the file: ${err}`);
    } else {
        console.log(`File content before update: ${contents}`);
        const upperContents = contents.toUpperCase();
        setTimeout(() => updateFile(filePath, upperContents), 10);
        // updateFile(filePath, upperContents);
    }
});

function updateFile(filePath, contents) {
    fs.writeFile(filePath,contents, (err ) => {   
        if (err) {
            console.log("Error writing the file: ${err}");   
        } else {
            console.log(`File was updated !`);
        }     
    });
}

setInterval(() => process.stdout.write("**** \n"), 1).unref();

