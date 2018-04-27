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

const Header = () => (
  <header id="header">
    <nav className="navbar is-dark" label="main navigation">
      <div className="navbar-menu d-flex">
        <Link to="/" className="navbar-item">
          <span>DESERTER</span>
        </Link>

        <Link to="/" className="navbar-item">
          <span>DESERTER</span>
        </Link>

        <Link to="/" className="navbar-item">
          <span>DESERTER</span>
        </Link>

      </div>
    </nav>
  </header>
);

/**
 * Export
 */

export default Header;
