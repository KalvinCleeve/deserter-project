/*
* Require
*/
const express = require('express');
const { MongoClient } = require('mongodb');

/*
* Consts
*/
const app = express();

/*
* Path
*/
const url = 'mongodb://localhost:27017/deserter';

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
app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.send('Vous êtes à l\'accueil');
});

app.get('/testa', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.send('Vous êtes en test');
});
app.listen(3000);
