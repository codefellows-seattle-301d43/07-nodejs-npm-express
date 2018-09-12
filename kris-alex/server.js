'use strict';

const debug = require('debug')('express');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
let app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/new', (req, resp) => {
  debug(__dirname);
  resp.sendFile('new.html', { root: path.join(__dirname, 'public') });
});
app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  request.body = '{ "serverImplementation": "Kris and Alex" }';
  debug(`Got POST request!`);
  debug(request.body);
  response.status(201).json(request.body);
  response.send();
});

app.listen(PORT, () => {
  debug(`Listening on ${PORT}`);
});
