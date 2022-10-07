const fs = require('fs');
const readStream = fs.createReadStream("./file.txt");

readStream.on("data", (data) => {
    console.log(`Read chuck:`, data.toString());
});

readStream.on("end", () => {
    console.log("D O N E !!!");
});