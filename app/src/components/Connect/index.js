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
export default class Form extends React.Component {
  /**
   * PropTypes
   */
   static propTypes = {
     testConnectUser: PropTypes.func.isRequired,
     testSignUser: PropTypes.func.isRequired,
     resetFormError: PropTypes.func.isRequired,
     changeInputConnectEmail: PropTypes.func.isRequired,
     changeInputSignFirstname: PropTypes.func.isRequired,
     changeInputSignLastname: PropTypes.func.isRequired,
     changeInputSignNickname: PropTypes.func.isRequired,
     changeInputSignEmail: PropTypes.func.isRequired,
     errorSignUp: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
     errorConnect: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
     inputConnectEmail: PropTypes.string.isRequired,
     inputSignFistname: PropTypes.string.isRequired,
     inputSignLastName: PropTypes.string.isRequired,
     inputSignNickname: PropTypes.string.isRequired,
     inputSignEmail: PropTypes.string.isRequired,
   };

   /**
    * Actions
    */
  componentWillUnmount = () => {
    this.props.resetFormError();
  };

  connectUser = (event) => {
    event.preventDefault();
    this.props.testConnectUser(event.target.password.value);
  };

  signUser = (event) => {
    event.preventDefault();
    this.props.testSignUser(
      event.target.password.value,
      event.target.confirmPassword.value,
    );
  };

  changeInputConnectLogin = (event) => {
    this.props.changeInputConnectEmail(event.target.value);
  };

  changeInputSignFirstname = (event) => {
    this.props.changeInputSignFirstname(event.target.value);
  };

  changeInputSignLastname = (event) => {
    this.props.changeInputSignLastname(event.target.value);
  };

  changeInputSignNickname = (event) => {
    this.props.changeInputSignNickname(event.target.value);
  };

  changeInputSignEmail = (event) => {
    this.props.changeInputSignEmail(event.target.value);
  };

  /**
  * Render
  */

  render() {
    return (
      <div id="form" className="columns">
        {/* Form pour se logger */}
        <form id="login-form" className="column" onSubmit={this.connectUser}>
          {this.props.errorConnect.map(error => (
            <div key={error} className="form-error" > {error} </div>
                ))}
          <h2 className="title">Login</h2>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
                onChange={this.changeInputConnectLogin}
                value={this.props.inputConnectEmail}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">
                Login
              </button>
            </p>
          </div>
        </form>
        {/* Form pour s'inscire */}
        <form id="sign-form" className="column" onSubmit={this.signUser} method="POST">
          {this.props.errorSignUp.map(error => (
            <div className="form-error" key={error} > {error} </div>
                ))}
          <h2 className="title">Sign in</h2>
          <div className="field">
            <label className="label">Firstname</label>
            <div className="control">
              <input
                name="firstname"
                type="text"
                className="input"
                placeholder="John"
                required
                onChange={this.changeInputSignFirstname}
                value={this.props.inputSignFistname}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Lastname</label>
            <div className="control">
              <input
                name="lastname"
                type="text"
                className="input"
                placeholder="Rambo"
                required
                onChange={this.changeInputSignLastname}
                value={this.props.inputSignLastName}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nickname (appear on the scoreboard)</label>
            <div className="control">
              <input
                name="nickname"
                type="text"
                className="input"
                placeholder="warriordu93"
                required
                onChange={this.changeInputSignNickname}
                value={this.props.inputSignNickname}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                name="email"
                type="email"
                className="input"
                placeholder="john.rambo@notmywar.com"
                required
                onChange={this.changeInputSignEmail}
                value={this.props.inputSignEmail}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <p className="control has-icons-left">
              <input
                type="password"
                name="password"
                className="input"
                placeholder="********"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Confirm password</label>
            <p className="control has-icons-left">
              <input
                type="password"
                name="confirmPassword"
                className="input"
                placeholder="********"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">
                Let's go !
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

/**
 * Export
 */
