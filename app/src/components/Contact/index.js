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
export default class Contact extends React.Component {
  /**
   * PropTypes
   */

  static propTypes = {
    resetFormError: PropTypes.func.isRequired,
    changeInputContactFirstname: PropTypes.func.isRequired,
    changeInputContactLastname: PropTypes.func.isRequired,
    changeInputContactEmail: PropTypes.func.isRequired,
    inputContactEmail: PropTypes.string.isRequired,
    inputContactFirstname: PropTypes.string.isRequired,
    inputContactLastname: PropTypes.string.isRequired,
    inputContactArea: PropTypes.string.isRequired,
  };

  /**
   * Actions
   */

  componentWillUnmount = () => {
    this.props.resetFormError();
  };

  changeInputContactFirstname = (event) => {
    this.props.changeInputContactFirstname(event.target.value);
  };

  changeInputContactLastname = (event) => {
    this.props.changeInputContactLastname(event.target.value);
  };

  changeInputContactEmail = (event) => {
    this.props.changeInputContactEmail(event.target.value);
  };
  /**
* Render
*/
  render() {
    return (
      <div id="contact">
        <form id="contact-form" onSubmit={this.contactUser} method="POST">
          <h2 className="title">Contact</h2>
          <div className="field">
            <label className="label">Firstname</label>
            <div className="control">
              <input
                name="firstname"
                type="text"
                className="input"
                placeholder="John"
                required
                onChange={this.changeInputContactFirstname}
                value={this.props.inputContactFirstname}
                autoComplete="false"
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
                onChange={this.changeInputContactLastname}
                value={this.props.inputContactLastname}
                autoComplete="false"
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
                onChange={this.changeInputContactEmail}
                value={this.props.inputContactEmail}
                autoComplete="false"
              />
            </div>
          </div>
          <textarea className="textarea" rows="10" required placeholder="Tell us what you want" value={this.props.inputContactArea} />
          <div className="field">
            <p className="control">
              <button className="button is-success">
                Submit
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
