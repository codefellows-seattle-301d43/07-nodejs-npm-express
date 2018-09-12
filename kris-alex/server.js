'use strict';

const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
let app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/new', (req, resp) => {
  console.log(__dirname);
  resp.sendFile('new.html', { root: path.join(__dirname, 'public') });
});
app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  request.body = '{ "serverImplementation": "Kris and Alex" }';
  console.log(`Got POST request!`);
  console.log(request.body);
  response.status(201).json(request.body);
  response.send();
});

app.get('*', (req, resp) => {
  console.log('Missed the route');
  resp.status(404).send('Not Found!');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
