/*
* Require
*/
const express = require('express');
const { Server } = require('http');
const { join } = require('path');
const { MongoClient } = require('mongodb');

/*
* Consts
*/
const app = express();
const server = Server(app);

/*
* Path
*/
const url = 'mongodb://localhost:27017/deserter';
const indexPath = join(__dirname, '..', '/public/index.html');
const assetsPath = join(__dirname, '..', 'public');

/*
* Express
*/
// Static files
app.use(express.static(assetsPath, { index: false }));
// Route
app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

/*
* BDD
*/

// Connexion à la BDD
MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  const dbo = db.db('deserter');
  dbo.collection('Users').findOne({}, (errorFind, result) => {
    if (errorFind) throw errorFind;
    console.log(result);
    db.close();
  });
});

// le server est lancé sur le port localhost:3000
server.listen(3000);
