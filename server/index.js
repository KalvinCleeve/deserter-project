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
mongoose.connect('mongodb://localhost:27017/deserter');

/*
* Formulaire de connexion
*/

app.post('/connect', (req, res) => {
  const { email, password } = req.body.user;

  mongoose.connect('mongodb://localhost:27017/deserter', (err) => {
    if (err) throw err;
  });

  const usersSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    score: Array,
  });
  const UsersModel = mongoose.model('users', usersSchema);

  // Récupération de la valeur bidon de test
  const query = UsersModel.find(null);
  query.where('email', email);
  query.where('password', password);
  query.exec((err, result) => {
    if (err) throw err;
    res.send(result);
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
