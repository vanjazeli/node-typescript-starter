import { PORT } from './constants';
import { Request, Response } from 'express';

const express = require('express');
const app = express();

app.get('/', (req: Request, res: Response) => {
	res.json({ title: 'Hello World!' });
});

app.listen(PORT ? PORT : 3001, () => {
	console.log(`\n\nServer is running on http://localhost:${PORT}\n\nWatching...\n`);
});
