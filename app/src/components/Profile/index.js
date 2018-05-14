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
class Profile extends React.Component {
  /**
   * PropTypes
   */
  static propTypes = {
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    user: PropTypes.bool.isRequired,
    doneNickname: PropTypes.bool.isRequired,
    donePassword: PropTypes.bool.isRequired,
    changeNickname: PropTypes.func.isRequired,
    valueNickname: PropTypes.string.isRequired,
    profileInputNickname: PropTypes.func.isRequired,
    testEditNickname: PropTypes.func.isRequired,
    errorProfile: PropTypes.array.isRequired,
    resetProfile: PropTypes.func.isRequired,
    testEditPassword: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
  };

  /**
  * Actions
  */
    componentWillUnmount = () => {
      this.props.resetProfile();
    };

  editNickname = (event) => {
    event.preventDefault();
    this.props.testEditNickname();
  }

  changeNickname = (event) => {
    this.props.profileInputNickname(event.target.value);
  }

  changePassword = (event) => {
    event.preventDefault();
    this.props.testEditPassword(
      event.target.oldPassword.value,
      event.target.newPassword.value,
      event.target.confirmNewPassword.value,
    );
  }

  /**
  * Render
  */
  render() {
    const {
      nickname,
      email,
      user,
      doneNickname,
      donePassword,
      changeNickname,
      valueNickname,
      errorProfile,
      changePassword,
    } = this.props;
    return (
      <div id="profile">
        { !user ? <Redirect to="/" /> : '' }
        {errorProfile.map(error => (
          <div key={error} className="form-error" > {error} </div>
                ))}
        <h1>Departement of U.S Army</h1>
        <div>
          <h2 className="profile-title">recruit : </h2>
          <p className={classNames('profile-recruit', { displayNone: !doneNickname })}>{nickname} <button className="profile-edit" onClick={changeNickname}>edit</button></p>
          <div className={classNames('profile-recruit-form', { displayNone: doneNickname })}>
            <form onSubmit={this.editNickname}>
              <div className="tile is-vertical" id="controlPassword">
                <input
                  placeholder={nickname}
                  onChange={this.changeNickname}
                  value={valueNickname}
                  required
                />
              </div>
              <button className="profile-edit">confirm</button>
            </form>
          </div>
        </div>
        <div>
          <h2 className="profile-title">Password : </h2>
          <p className={classNames('profile-recruit', { displayNone: !donePassword })}>**********<button className="profile-edit" onClick={changePassword}>edit</button></p>
          <div className={classNames('profile-recruit-form', { displayNone: donePassword })}>
            <form onSubmit={this.changePassword}>
              <div className="tile is-vertical" id="controlPassword">
                <input type="password" name="oldPassword" required placeholder="Password" />
                <input type="password" name="newPassword" required placeholder="New password" />
                <input type="password" name="confirmNewPassword" required placeholder="Confirm new password" />
              </div>
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
export default Profile;
