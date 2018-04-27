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
const Form = () => (
  <div id="form" className="columns">

    {/* Form pour se logger */}
    <div id="login-form" className="column">
      <h2 className="title">Login</h2>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input type="email" className="input" placeholder="Email" />
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
          <input type="password" className="input" placeholder="Password" />
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
    </div>
    {/* Form pour s'inscire */}
    <div id="sign-form" className="column">
      <h2 className="title">Sign in</h2>
      <div className="field">
        <label className="label">Firstname</label>
        <div className="control">
          <input
            type="text"
            className="input"
            placeholder="John"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Lastname</label>
        <div className="control">
          <input
            type="text"
            className="input"
            placeholder="Rambo"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Nickname (appear on the scoreboard)</label>
        <div className="control">
          <input
            type="text"
            className="input"
            placeholder="warriordu93"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            type="email"
            className="input"
            placeholder="john.rambo@notmywar.com"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <p className="control has-icons-left">
          <input type="password" className="input" placeholder="********" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock" />
          </span>
        </p>
      </div>
      <div className="field">
        <label className="label">Confirm password</label>
        <p className="control has-icons-left">
          <input type="password" className="input" placeholder="********" />
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
    </div>
  </div>
);

/**
 * Export
 */
export default Form;
