const net = require('net');
const HOSTNAME = 'localhost';
const PORT = 3000;

net.createServer((socket) => {
    console.log('client connected');
    // when serve get data
    socket.on("data", (name) => {
        // serve write on socket a response
        socket.write(`Hello ${name} from server!`);
    });
}).listen(PORT, HOSTNAME);

