'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


app.get('/form', (req, res) => {
  res.sendFile('public/new.html', {root: __dirname});
});

// COMMENT: set it as static public because this allows user to access all of our files.
app.use(express.static('public'));
// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});