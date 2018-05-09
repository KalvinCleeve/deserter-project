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
    valueNickname: PropTypes.string.isRequired,
    profileInputNickname: PropTypes.func.isRequired,
    testEditNickname: PropTypes.func.isRequired,
  };

  /**
  * Actions
  */
  editNickname = (event) => {
    event.preventDefault();
    this.props.testEditNickname();
  }

  changeNickname = (event) => {
    this.props.profileInputNickname(event.target.value);
  }

  /**
  * Render
  */
  render() {
    const {
      nickname, email, user, done, changeNickname, valueNickname,
    } = this.props;
    return (
      <div id="profile">
        { !user ? <Redirect to="/" /> : '' }
        <h1>Departement of U.S Army</h1>
        <div>
          <h2 className="profile-title">recruit : </h2>
          <p className={classNames('profile-recruit', { displayNone: !done })}>{nickname} <button className="profile-edit" onClick={changeNickname}>edit</button></p>
          <div className={classNames('profile-recruit-form', { displayNone: done })}>
            <form onSubmit={this.editNickname}>
              <input placeholder={nickname} onChange={this.changeNickname} value={valueNickname} />
              <button className="profile-edit">confirm</button>
            </form>
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
