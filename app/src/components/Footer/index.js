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

const Footer = () => (

  <footer id="footer">
    <div className="navbar is-fixed-bottom is-dark">
      <div id="copy" className="navbar-start">
        <span className="navbar-item">DESERTER&copy; - 2018 - All Rights Reserved</span>
      </div>
      <div id="link-footer" className="navbar-end">
        <Link to="/cgu" className="navbar-item">
          <span>CGU</span>
        </Link>
        <Link to="/contact" className="navbar-item">
          <span>Contacter</span>
        </Link>
      </div>
    </div>
  </footer>
);

/**
 * Export
 */

export default Footer;
