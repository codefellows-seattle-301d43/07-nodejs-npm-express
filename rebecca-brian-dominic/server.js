'use strict';

const express = require('express');
// const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.send('GET request to root path!');
  response.send(request);
});

app.get('/new', (req, res) => {
  // res.redirect('http://localhost:3000/new.html');
  res.sendFile('/new.html', { root: './public' });
});

// DONE: Our files are in a public directory now so that we can load the static files in our browser window.
app.use(express.static('public'));

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

// STRETCH GOAL: HANDLE 404
app.use((req, res) => {
  const err = new Error('Not Found');
  err.status = 404;
  // res.status(404).send(err); // sends JSON { "status": 404 }
  res.status(404);
  res.sendFile('public/images/404cat.jpeg', { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`things are on port ${PORT}!!`);
});