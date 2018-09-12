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

app.get('/articles/new', (req, res) => {
  // res.redirect('http://localhost:3000/new.html');
  console.log(__dirname);
  res.sendFile('public/data/hackerIpsum.json', {root: __dirname});
})

// DONE: Our files are in a public directory now so that we can load the static files in our browser window.
app.use(express.static('public'));

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
})

app.listen(3000, () => {
  console.log('things are on port 3000!!');
})