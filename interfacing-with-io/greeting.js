process.stdin.on("data", (data) => {
    const name = data.toString().trim().toUpperCase();
    if (name !== "") {
        process.stdout.write(`Hello ${name}, wellcome to NODEJS World!!`);
    } else {
        process.stdout.write(`Realy!!!, nothing to say?`);
    }
});