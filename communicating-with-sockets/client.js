const net = require('net');
const HOSTNAME = 'localhost';
const PORT = 3000;
const socket = net.connect(PORT, HOSTNAME);
socket.write("Léo");
socket.on("data", (data) => {
    console.log('Data returned from server');
    console.log(data.toString());  
});