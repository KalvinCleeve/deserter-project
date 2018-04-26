/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */


/**
 * Code
 */
export default class Connect extends React.Component {
  /**
   * PropTypes
   */
  static propTypes = {
    testConnectUser: PropTypes.func.isRequired,
  };

  /**
   * Actions
   */
  connectUser = (event) => {
    event.preventDefault();
    this.props.testConnectUser(event.target.email.value, event.target.password.value);
  };

  /**
   * Render
   */
  render() {
    return (
      <div id="connect">
        <form className="form-connect has-text-centered" onSubmit={this.connectUser} method="POST">
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
