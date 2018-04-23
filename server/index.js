// Lance http de la biliothéque node.js qui créer le serveur web
const http = require('http');
// Pour lié la page html
const fs = require('fs');
const { join } = require('path');

// BDD
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/deserter';

// Path
const indexPath = join(__dirname, '..', '/public/index.html');

// Içi on lance le serveur web créer au dessus.
// req correspond aux infos que le visiteur à demandé ( nom de la page, formulaire remplis ect...)
// res correspond à l'object que l'on doit remplir pour transmettre un retour au visiteur.
// Généralement res contient le code HTML à renvoyé
const server = http.createServer();

server.on('request', (request, response) => {
  fs.readFile(indexPath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end('Ce fichier n\'existe pas');
    }
    else {
      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(data);
    }
  });
});

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
