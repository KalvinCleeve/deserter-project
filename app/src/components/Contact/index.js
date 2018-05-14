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
const Contact = () => (

  <div id="contact">
    <form id="contact-form">
      <h2 className="title">Contact</h2>
      <div className="field">
        <label className="label">Firstname*</label>
        <div className="control">
          <input
            name="firstname"
            type="text"
            className="input"
            placeholder="John"
            required
            autoComplete="false"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Lastname*</label>
        <div className="control">
          <input
            name="lastname"
            type="text"
            className="input"
            placeholder="Rambo"
            required
            autoComplete="false"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Email*</label>
        <div className="control">
          <input
            name="email"
            type="email"
            className="input"
            placeholder="john.rambo@notmywar.com"
            required
            autoComplete="false"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Text area*</label>
        <textarea className="textarea" rows="10" required placeholder="Tell us what you want" />
        <p className="help">All fields are required*</p>
      </div>
      <div className="field">
        <p className="control">
          <button href="mailto:lckevin44@gmail.com" className="button is-success">
            Submit
          </button>
        </p>
      </div>
    </form>
  </div>
);


/**
 * Export
 */
export default Contact;
