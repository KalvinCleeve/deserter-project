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
  <div id="profile">
    { !user ? <Redirect to="/" /> : '' }
    <h1>Departement of U.S Army</h1>
    <div>
      <h2 className="profile-title">recruit : </h2>
      <p className="profile-recruit">{nickname}</p>
    </div>
    <div>
      <h2 className="profile-subtitle">registration number :</h2>
      <p className="profile-email">{email}</p>
    </div>
    <div>
      <h2 className="profile-subtitle">military exploits :</h2>
      <ul className="profile-list">
        <li className="profile-list-score">Escaped 01/03/2018 with 321pts</li>
        <li className="profile-list-score">Escaped 25/03/2018 with 8941pts</li>
        <li className="profile-list-score">Escaped 17/04/2018 with 732pts</li>
      </ul>
    </div>
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
