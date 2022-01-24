const net = require('net');
const JsonSocket = require('json-socket');
 
const port = 8282;
const socket = new JsonSocket(new net.Socket());

socket.connect(port);
socket.on('connect', () => {
    socket.on('message', (data) => {
        console.log(data);
    });
});