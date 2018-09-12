'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
// const cors = require('cors');
const app = express();

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware

app.use(express.urlencoded({ extended: true }));

// Our files are in a "public" directory so that we can use express to serve all of the files in that directory statically. Each file can then be accessed by a separate URI.
app.use(express.static('public'));


app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

// Respond with 404 error if non-existent page requested
app.use((req,res) => {
  res.status(404);
  res.send('Invalid request: page does not exist');
});

app.listen(PORT, () => {
  console.log(`server is running and listening on ${PORT}`);
});