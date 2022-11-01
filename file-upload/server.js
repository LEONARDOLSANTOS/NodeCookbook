const fs = require("fs");
const http = require("http");
const path = require("path");
const form = fs.readFileSync(path.join(__dirname, "public", "form.html"));
const formidable = require("formidable");

http.createServer((req, resp) => {
  if (req.method === 'GET') {
    get(resp);
    return;
  }
  if (req.method === 'POST') {
    post(req, resp);
    return;
  }
  error(405, resp);
}).listen(3000);

function error(code, res) {
  res.statusCode = code;
  res.end(http.STATUS_CODES[code]);
}

function get(res) {
  res.writeHead(200, {"Content-Type": "text/html",});
  res.end(form);
}

function post(req, res) {
  if (!/multipart\/form-data/.test(req.headers["content-type"])) {
    error(415, res);
    return;
  }
  const form = formidable({
    multiples: true,
    uploadDir: "./uploads",
  });
  form.parse(req, (err, fields, files) => {
    if (err) return err;
    res.writeHead(200, {"Content-Type": "application/json",});
    res.end(JSON.stringify({fields,files,}));
  });
}