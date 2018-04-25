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
export default class Connect extends React.Component {
  /**
   * Actions
   */
  connectUser = (event) => {
    event.preventDefault();
    console.log('post envoyé');
  };

  /**
   * Render
   */
  render() {
    return (
      <div id="connect">
        <form className="form-connect has-text-centered" onSubmit={this.connectUser} action="http://localhost:3000/connect" method="POST">
          <input className="form-connect-input" type="email" name="email" placeholder="Votre Email" />
          <input className="form-connect-input" type="password" name="password" placeholder="Votre Mot de passe" />
          <button className="button is-dark form-connect-button" type="submit">Se connecter</button>
        </form>
      </div>
    );
  }
}

/**
 * Export
 */
