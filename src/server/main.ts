import * as express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello from Express'));

const server = app.listen(8000, 'localhost', () => {
	const { address, port } = server.address();
	console.log('Listening on %s %s', address, port);
});
