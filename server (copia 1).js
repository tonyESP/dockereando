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
  res.send('[
 {
   "pais": "aixas",
   "latitud": 42.4833333,
   "longitud": 1.4666667
 },
 {
   "pais": "aixirivali",
   "latitud": 42.4666667,
   "longitud": 1.5
 },
 {
   "pais": "aixirivall",
   "latitud": 42.4666667,
   "longitud": 1.5
 },
 {
   "pais": "aixirvall",
   "latitud": 42.4666667,
   "longitud": 1.5
 },
 {
   "pais": "aixovall",
   "latitud": 42.4666667,
   "longitud": 1.4833333
 },
 {
   "pais": "andorra",
   "latitud": 42.5,
   "longitud": 1.5166667
 },
 {
   "pais": "ansalonga",
   "latitud": 42.5666667,
   "longitud": 1.5166667
 },
 {
   "pais": "certers",
   "latitud": 42.4666667,
   "longitud": 1.5
 },
 {
   "pais": "certes",
   "latitud": 42.4666667,
   "longitud": 1.5
 }
]
');
});

app.get('/status/', (req, res) => {
  res.status(200)send('{"status":"ok"}');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

