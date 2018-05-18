/*
 * Heroku
 */
//
// const statik = require('statik');
//
// statik(process.env.PORT || 1337);

/*
* Require
*/
const bcrypt = require('bcrypt-nodejs');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('cookie-session');
/*
* Consts
*/
const saltRounds = 10;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://217.70.191.16');
  res.header('Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(session({
  keys: ['maclé'],
  maxAge: 24 * 60 * 60 * 1000,
}));

/*
* Formulaire de connexion
*/

const usersSchema = mongoose.Schema({
  firstname: String,
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
  const queryConnect = UsersModel.find({ email });
  queryConnect.exec((err, result) => {
    if (err) throw err;

    mongoose.connection.close();
    if (result[0]) {
      if (bcrypt.compareSync(password, result[0].password)) {
        res.send({
          lastname: result[0].lastname,
          nickname: result[0].nickname,
          email: result[0].email,
        });
      }
      else {
        res.send(false);
      }
    }
    else {
      res.send(false);
    }
  });
});


app.post('/verif/email', (req, res) => {
  const { email } = req.body;
  mongoose.connect('mongodb://localhost:27017/deserter', (err) => {
    if (err) throw err;
  });
  const queryUser = UsersModel.find({ email });
  queryUser.exec((err, result) => {
    if (err) throw err;
    mongoose.connection.close();
    if (result[0]) {
      res.send(false);
    }
    else {
      res.send(true);
    }
  });
});

app.post('/edit/nickname', (req, res) => {
  const { newNickname, nickname } = req.body.user;
  mongoose.connect('mongodb://localhost:27017/deserter', (err) => {
    if (err) throw err;
  });
  UsersModel.update({ nickname }, { nickname: newNickname }, (err) => {
    if (err) throw err;
    mongoose.connection.close();
    res.send(true);
  });
});

app.post('/verif/nickname', (req, res) => {
  const { nickname } = req.body;
  mongoose.connect('mongodb://localhost:27017/deserter', (err) => {
    if (err) throw err;
  });
  const queryUser = UsersModel.find({ nickname });
  queryUser.exec((err, result) => {
    if (err) throw err;
    mongoose.connection.close();
    if (result[0]) {
      res.send(false);
    }
    else {
      res.send(true);
    }
  });
});

app.post('/edit/password', (req, res) => {
  const { email, password } = req.body.newUser;
  const hash = bcrypt.hashSync(password, saltRounds);
  mongoose.connect('mongodb://localhost:27017/deserter', (err) => {
    if (err) throw err;
  });
  const queryUser = UsersModel.find({ email });
  queryUser.update({ password: hash }, (err) => {
    if (err) throw err;
    mongoose.connection.close();
    res.send(true);
  });
});

app.post('/verif/password', (req, res) => {
  const { email, password } = req.body.user;
  mongoose.connect('mongodb://localhost:27017/deserter', (err) => {
    if (err) throw err;
  });
  const queryUser = UsersModel.find({ email });
  queryUser.exec((err, result) => {
    if (err) throw err;
    mongoose.connection.close();
    if (bcrypt.compareSync(password, result[0].password)) {
      res.send(true);
    }
    else {
      res.send(false);
    }
  });
});


app.post('/signUser', (req, res) => {
  mongoose.connect('mongodb://localhost:27017/deserter', (err) => {
    if (err) throw err;
  });
  const {
    firstname,
    lastname,
    nickname,
    email,
    password,
  } = req.body.user;

  const hash = bcrypt.hashSync(password, saltRounds);

  const newUser = new UsersModel({
    firstname,
    lastname,
    nickname,
    email,
    password: hash,
    score: [],
  });

  newUser.save((err) => {
    if (err) throw err;
    mongoose.connection.close();
  });
  res.send({
    lastname,
    nickname,
    email,
  });
});


app.listen(3000);
