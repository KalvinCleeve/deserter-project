/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */


/**
 * Code
 */
const Sign = () => (
  <div id="connect">
    <form className="form-connect has-text-centered" action="http://localhost:3000/sign" method="POST">
      <input className="form-connect-input" type="email" name="text" placeholder="Votre Pseudo" />
      <input className="form-connect-input" type="email" name="email" placeholder="Votre Email" />
      <input className="form-connect-input" type="password" name="password" placeholder="Votre Mot de passe" />
      <button className="button is-dark form-connect-button" type="submit">S'inscrire</button>
    </form>
  </div>
);

/**
 * Export
 */
export default Sign;
