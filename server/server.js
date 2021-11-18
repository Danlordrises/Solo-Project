const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.resolve(__dirname, '../dist'); 
const HTML_FILE = path.resolve(DIST_DIR, 'index.html');

// database setup
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/characterDB");

// IMPORT CONTROLLERS HERE

const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

// app.use(express.static(DIST_DIR));

// app.get('/api', (req, res) => {
//   res.send(mockResponse);
// });

// renders the initial page
app.get('/', (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});

app.get('/dnd', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/dnd.html'))
})

app.get('/lancer', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/lancer.html'))
})

app.get('/pathfinder', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/pathfinder.html'))
})

// this route must always come last
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});