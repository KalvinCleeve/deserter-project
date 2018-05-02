/**
 * Npm import
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/**
 * Code
 */

const Header = ({ user }) => (
  <header id="header">

    <nav className="navbar is-dark" aria-label="main navigation">
      <div className="navbar-brand">
        <Link id="title-home" className="navbar-item" to="/">
        Deserter
        </Link>
        <Link className="navbar-item" to="/">
          <span className="icon is-large">
            <i className="fas fa-home" aria-hidden="true" />
          </span>
          <span>Home</span>
        </Link>
        { !user ?
          <Link className="navbar-item" to="/connect">
            <span className="icon is-large">
              <i className="fas fa-sign-out-alt" aria-hidden="true" />
            </span>
            <span>Log in / Sign in</span>
          </Link>
        : '' }
        { user ?
          <Link className="navbar-item" to="/profil">
            <span className="icon is-large">
              <i className="fas fa-user" aria-hidden="true" />
            </span>
            <span>Profile</span>
          </Link>
        : '' }
        { user ?
          <Link className="navbar-item" to="/">
            <span className="icon is-large">
              <i className="fas fa-home" aria-hidden="true" />
            </span>
            <span>Disconnect</span>
          </Link>
        : '' }
        <Link className="navbar-item" to="/game">
          <span className="icon is-large">
            <i className="fas fa-play-circle" aria-hidden="true" />
          </span>
          <span>Play</span>
        </Link>
      </div>
    </nav>
  </header>
);
Header.propTypes = {
  user: PropTypes.bool.isRequired,
};

/**
 * Export
 */

export default Header;
