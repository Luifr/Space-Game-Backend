const net = require('net');

const server = net.createServer();

server.on('connection', (...args: any[]) => {
	console.log(args);
});

server.listen(8080);