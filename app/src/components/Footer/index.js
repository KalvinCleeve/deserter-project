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
    <div className="footer-bar navbar is-dark">
      <div id="copy" className="navbar-start">
        <span className="navbar-item">DESERTER&copy; - 2018 - All Rights Reserved</span>
      </div>
      <div id="link-footer" className="navbar-end">
        <Link to="/contact" className="navbar-item">
          <span>Contact us</span>
        </Link>
        <Link to="/cgu" className="navbar-item">
          <span>GTU</span>
        </Link>
      </div>
    </div>
  </footer>
);

/**
 * Export
 */

export default Footer;
