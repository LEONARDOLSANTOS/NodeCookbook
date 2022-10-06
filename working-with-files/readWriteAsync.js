const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(), "hello-not-found.txt");
fs.readFile(filePath,"utf8", (err, contents) => {
    if (err) {
        console.log(`Error reading the file: ${err}`);
    } else {
        console.log(`File content before update: ${contents}`);
        const upperContents = contents.toUpperCase();
        fs.writeFile(filePath,upperContents, (err ) => {   
            if (err) {
                console.log("Error writing the file: ${err}");   
            } else {
                console.log(`File was updated !`);
            }     
        });
    }
});

