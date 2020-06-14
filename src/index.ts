import { config } from 'dotenv';
config();

import * as net from 'net';

const port = process.env.PORT;

if (!port) throw Error('Please set PORT at .env file');

const server = net.createServer();

server.on('connection', (...args: any[]) => {
	console.log(args);
});

server.listen(port, () => console.log('Sockets are open!'));