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

const Error404 = () => (
  <div id="error">
    <h1 id="mainTitle" className="title">ERROR 404</h1>
    <div id="boxError">
      <h2 id="subtitle" className="title">Oops ! No panic here</h2>
      <span id="subtitle"><Link to="/"> go back to Home</Link></span>
    </div>
  </div>
);

/**
 * Export
 */

export default Error404;
