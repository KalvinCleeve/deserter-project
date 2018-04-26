/**
 * Npm import
 */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Local import
 */

/**
 * Code
 */
const Home = () => (
  <div id="home">
    <div id="intro">
      <h1 id="mainTitle" className="animated bounceInDown is-large">Deserter</h1>
      <h2 id="subtitle">The Game</h2>
      <div id="spitch">
        <p id="spitch-text"><i>“C’est la guerre, aux armes ! C’est la guerre, fuyez !”</i> <br /> Les gens, crient, hurlent, pleurent…<br /><br /> <strong>C’est la guerre.</strong><br /><br /> Les forces armées réunissent les personnes, homme comme femme, afin de les préparer pour la future boucherie qui va avoir lieu. Les trois puissances mondiales, Borëk, Goza et Taiyaki sont en conflits et nul ne sait pourquoi.<br /><br /> Je suis quelqu’un de banal, sans grande conviction… Et j’ai surtout une grande flemme de faire mumuse avec des flingues !
        </p>
      </div>
      <Link to="/game">
        <button id="play-now" className="button is-dark is-large">Jouer maintenant !</button>
      </Link>
    </div>
  </div>
);

/**
 * Export
 */
export default Home;
