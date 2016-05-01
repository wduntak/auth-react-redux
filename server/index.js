// Main starting point of our application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// App Setup

	// Morgan is a logging framework
	app.use(morgan('combined'));
	// Parse incoming requests into JSON
	app.use(bodyParser.json({ type: '*/*' }));

// Server Setup

	const port = process.env.PORT || 3030;
	const server = http.createServer(app);
	server.listen(port);
	console.log('Server listening on:', port);