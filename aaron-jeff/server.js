'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
// Static resources are all inside the public directory so when we use express.static('public') that is where express looks to find them.

app.get('/new', (request, response) => {
  console.log(__dirname);
  response.sendFile('new.html', {root: `${__dirname}/public`});
});

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

app.get('*', (request, response) => {
  console.log('404');
  response.statusCode = 404;
  console.log(response.statusCode);
  response.send('404, page not found');
});

app.listen(PORT , () => {
  console.log('listening on port 3000');
});