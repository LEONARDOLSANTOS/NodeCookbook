const http = require("http");
const fs = require("fs");
const path = require("path");

const form = fs.readFileSync(path.join(__dirname, "public", "form.html"));

http.createServer((req, res) => {
        if (req.method === "GET") {
            get(res);
            return;
        }
        if (req.method === "POST") {
            post(req, res);
            return;
        }

        error(405, res);
    })
    .listen(3000);

function get(res) {
    res.writeHead(200, {
        "Content-Type": "text/html",
    });
    res.end(form);
}

function post(req, res) {
    if (req.headers["content-type"] !== "application/json") {
        // if (req.headers["content-type"] !== "application/x-www-form-urlencoded") {
        error(415, res);
        return;
    }
    let input = "";
    // while exist data
    req.on("data", (chunk) => {
        input += chunk.toString();
    });
    // when the data finished
    req.on("end", () => {
        const parsed = JSON.parse(input);
        if (parsed.err) {
            error(400, "Bad Request", res);
            return;
        }
        console.log("Received data: ", parsed);
        res.end('{"The data sendo to client =>": ' + input + "}");
    });
}


function error(code, res) {
    res.statusCode = code;
    res.end(http.STATUS_CODES[code]);
}
