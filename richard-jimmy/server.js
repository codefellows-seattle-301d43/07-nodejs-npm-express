'use strict';

const express = require('express');
const PORT = process.env.PORT || 1666;
const app = express();

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));

// this sets up express to serve any file in the public folder allowing requests to access every file in it.
app.use(express.static('public'));

app.get('/new', (request, response) => {
  console.log(__dirname);
  response.sendFile('/public/new.html', {root: __dirname});
});

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

app.get('*', (req, res) => res.send('404!!!!!!!!!!!', 404));

app.listen(PORT, () => console.log(`The devil is listening on port ${PORT}`));
