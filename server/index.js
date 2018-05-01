/*
* Require
*/
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/*
* Consts
*/
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.header('Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
/*
* connect BDD
*/

/*
* Formulaire de connexion
*/

const usersSchema = mongoose.Schema({
  name: String,
  lastname: String,
  nickname: String,
  email: String,
  password: String,
  score: Array,
});
const UsersModel = mongoose.model('users', usersSchema);


app.post('/connect', (req, res) => {
  const { email, password } = req.body.user;
  mongoose.connect('mongodb://localhost:27017/deserter', (err) => {
    if (err) throw err;
  });
  // Récupération de la valeur bidon de test
  const queryConnect = UsersModel.find({ email, password });
  queryConnect.exec((err, result) => {
    if (err) throw err;
    if (!result[0]) {
      res.send('Email ou mot de passe incorrect');
    }
    else {
      res.send(result);
    }
    mongoose.connection.close();
  });
});


app.post('/verif/email', (req, res) => {
  const { email } = req.body;
  mongoose.connect('mongodb://localhost:27017/deserter', (err) => {
    if (err) throw err;
  });
  // Récupération de la valeur bidon de test
  const queryUser = UsersModel.find({ email });
  queryUser.exec((err, result) => {
    if (err) throw err;
    if (result[0]) {
      res.send(false);
    }
    else {
      res.send(true);
    }
  });
});


app.post('/verif/nickname', (req, res) => {
  const { nickname } = req.body;
  mongoose.connect('mongodb://localhost:27017/deserter', (err) => {
    if (err) throw err;
  });
  // Récupération de la valeur bidon de test
  const queryUser = UsersModel.find({ nickname });
  queryUser.exec((err, result) => {
    if (err) throw err;
    if (result[0]) {
      res.send(false);
    }
    else {
      res.send(true);
    }
  });
});

app.post('/signUser', (req, res) => {
  const {
    firstname,
    lastname,
    nickname,
    email,
    password,
  } = req.body.user;

  const newUser = new UsersModel({
    firstname,
    lastname,
    nickname,
    email,
    password,
    score: [],
  });
  newUser.save((err) => {
    if (err) throw err;
    mongoose.connection.close();
    res.send('Vous êtes connecté');
  });
});
// app.post('/connect', (req, res) => {
//   const { email, password } = req.body.user;
//   // Requetes et connexion à la BDD
//   MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//
//     // Requetes à la BDD pour vérifier l'email et le password
//     const dbo = db.db('deserter');
//     return dbo.collection('Users').findOne({ email }).then((result) => {
//       if (password === result.password) {
//         return result;
//       }
//       return 'password incorrect';
//     });
//   });
//   // res.writeHead(301, { Location: 'http://localhost:3333' });
//   res.end();
// });

app.listen(3000);
