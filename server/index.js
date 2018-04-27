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
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
/*
* Path
*/
const url = 'mongodb://localhost:27017/deserter';

/*
* Formulaire de connexion
*/
app.post('/connect', (req, res) => {
  const { email, password } = req.body.user;
  // Requetes et connexion à la BDD
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    // Requetes à la BDD pour vérifier l'email et le password
    const dbo = db.db('deserter');
    dbo.collection('Users').findOne({ email }, (errorFind, result) => {
      if (errorFind) throw errorFind;
      if (password === result.password) {
        console.log(result);
        res.send(result);
      }
      db.close();
    });
  });
  res.writeHead(301, { Location: 'http://localhost:3333' });
  res.end();
});

app.listen(3000);
