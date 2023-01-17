// Listens for the user input
process.stdin.on("data", (data) => {
    const name = data.toString().trim().toUpperCase();
    if (name !== "") {
        process.stdout.write(`Hello ${name}, wellcome to NODEJS World!!\r\n`);
    } else {
        process.stderr.write(`Realy!!!, nothing to say?\r\n`);
        process.exit();
    }
});