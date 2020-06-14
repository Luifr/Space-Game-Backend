import { config } from 'dotenv';
config();

import * as net from 'net';

const port = process.env.PORT;

if (!port) throw Error('Please set PORT at .env file');

const server = net.createServer(socket => {
	socket.on('data', chunk => {
		const string = chunk.toString('utf8');
		console.log(`chunk '${string}'`);
	});

	socket.on('end', (...args) => {
		console.log(`end ${args}`);
	});
});

server.listen(port, () => console.log(`Listening on port ${port}`));