const fs = require('fs');
const {Transform} = require('stream');
const rs = fs.createReadStream("./file.txt");
const newFile = fs.createWriteStream("./newFile-lowcase.txt");
const lowercase = new Transform({
    transform(chunk, encoding, callback){
        callback(null, chunk.toString().toLowerCase());
     },
});

rs.pipe(lowercase).pipe(newFile);