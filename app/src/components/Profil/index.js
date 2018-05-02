/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

/**
 * Local import
 */


/**
 * Code
 */
const Profil = ({ nickname, email, user }) => (
  <div id="profil">
    { !user ? <Redirect to="/" /> : '' }
    <h1 className="profil-title">{nickname}</h1>
    <h2 className="profil-subtitle">Matricule</h2>
    <p className="profil-email">{email}</p>
    <h2 className="profil-subtitle">Fait d'armes</h2>
    <ul className="profil-list">
      <li className="profil-list-score">568pts le 01/03/2018</li>
      <li className="profil-list-score">863pts le 25/03/2018</li>
      <li className="profil-list-score">745pts le 17/04/2018</li>
    </ul>
  </div>
);
Profil.propTypes = {
  nickname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  user: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Profil;
