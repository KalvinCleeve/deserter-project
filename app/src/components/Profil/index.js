/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames';

/**
 * Local import
 */


/**
 * Code
 */
class Profil extends React.Component {
  /**
   * PropTypes
   */
  static propTypes = {
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    user: PropTypes.bool.isRequired,
    done: PropTypes.bool.isRequired,
    changeNickname: PropTypes.func.isRequired,
  };

  /**
  * Actions
  */
  validNickname = () => {
    this.props.done = true;
  }

  /**
  * Render
  */
  render() {
    const {
      nickname, email, user, done, changeNickname,
    } = this.props;
    return (
      <div id="profile">
        { !user ? <Redirect to="/" /> : '' }
        <h1>Departement of U.S Army</h1>
        <div>
          <h2 className="profile-title">recruit : </h2>
          <p className={classNames('profile-recruit', { displayNone: !done })}>{nickname} <button className="profile-edit" onClick={changeNickname}><i className="fas fa-edit" /></button></p>
          <div className={classNames('profile-recruit-form', { displayNone: done })}>
            <input placeholder={nickname} />
            <button className="profile-edit" onClick={this.validNickname}><i className="fas fa-check" /></button>
          </div>
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
  }
}

/**
 * Export
 */
export default Profil;
