// Lance http de la biliothéque node.js qui créer le serveur web
const http = require('http');
// On récupère la page demandé par l'utilisateur
const url = require('url');

// Içi on lance le serveur web créer au dessus.
// req correspond aux infos que le visiteur à demandé ( nom de la page, formulaire remplis ect...)
// res correspond à l'object que l'on doit remplir pour transmettre un retour au visiteur.
// Généralement res contient le code HTML à renvoyé
const server = http.createServer((req, res) => {
  // On récupère le nom de la page demandé
  const page = url.parse(req.url).pathname;
  console.log(page);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Test de Node.js</h1>');
});

// Connexion à la BDD
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost/deserter', (error, db) => {
  if (error) return error;

  console.log('Connecté à la base de données deserter');

  return db;
});

// le server est lancé sur le port localhost:3000
server.listen(3000);
