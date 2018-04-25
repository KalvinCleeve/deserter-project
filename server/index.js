/*
* Require
*/
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

/*
* Consts
*/
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

/*
* Path
*/
const url = 'mongodb://localhost:27017/deserter';

// le server est lancé sur le port localhost:3000
app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.send('Vous êtes à l\'accueil');
});

app.get('/testa', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.send('Vous êtes en test');
});

/*
* Formulaire de connexion
*/
app.post('/connect', (req, res) => {
  const { email } = req.body;
  const { password } = req.body;
  // Requetes et connexion à la BDD
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    // Requetes à la BDD pour vérifier l'email et le password
    const dbo = db.db('deserter');
    dbo.collection('Users').findOne({ email }, (errorFind, result) => {
      if (errorFind) throw errorFind;
      if (password === result.password) {
        console.log('connexion !');
      }
      db.close();
    });
  });
  res.writeHead(301, { Location: 'http://localhost:3333' });
  res.end();
});

app.listen(3000);
