'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
//Explain why our files are in a "public" directory now and how ExpressJS serves our local files.
//Our files are in a "public" directory and Express gives us a way to take an entire directory (named "public") and serve static files to the client. 

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/new', (request, response) => {
  response.sendFile('new.html', {root: 'public'});
});

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

app.listen(3000, () => {
  console.log('we are listening!');
});