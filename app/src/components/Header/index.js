/**
 * Npm import
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Local import
 */

/**
 * Code
 */

const Header = () => (
  <header id="header">

    <nav className="navbar is-dark" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/home">DESERTER</Link>
        <Link className="navbar-item" to="/home">Accueil</Link>
        <Link className="navbar-item" to="/login">Se connecter</Link>
        <Link className="navbar-item" to="/Game">Jouer</Link>
      </div>
    </nav>
  </header>
);

/**
 * Export
 */

export default Header;
