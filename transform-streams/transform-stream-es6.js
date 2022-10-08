const fs = require('fs');
const { Transform } = require('stream');
const rs = fs.createReadStream('./file.txt');
const newFile = fs.createWriteStream('./newFile-es6.txt')
class Uppercasee extends Transform{
    constructor(){
        super();
    }
    _transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}
rs.pipe(new Uppercasee()).pipe(newFile);

