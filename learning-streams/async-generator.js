const {Readable} = require('stream');

async function* generate() {
    yield "Node.js";
    yield "is";
    yield "a";
    yield "incredible";
    yield "powerfull";
    yield "and";
    yield "delicious";
    yield "language";
    yield "program";
}

const readable = Readable.from(generate());

readable.on("data", (chunk) => {
    console.log(chunk);
})
