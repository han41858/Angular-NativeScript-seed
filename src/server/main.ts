import * as express from 'express';
import * as path from 'path';

const app = express();
const rootDir = '../..';

app.get('*', (req, res) => {
	const fileReqReg = /\.[a-zA-Z]{2,3}$/;

	if (fileReqReg.test(req.url)) {
		// file request
		res.sendFile(path.resolve(__dirname, rootDir, 'dist', 'server', 'public', req.url.replace('/', '')));
	}
	else {
		// deep link
		res.sendFile(path.resolve(__dirname, rootDir, 'dist', 'server', 'public', 'index.html'))
	}
});

const server = app.listen(8000, 'localhost', () => {
	const { address, port } = server.address();
	console.log('Listening on %s %s', address, port);
});
