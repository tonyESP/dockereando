'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Localizaciónes\n');
});

app.get('/puntos', (req, res) => {
  res.send('{"pais": "certes","latitud": 42.4666667,"longitud": 1.5}');
});

app.get('/status/', (req, res) => {
  res.status(200)send('{"status":"ok"}');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

