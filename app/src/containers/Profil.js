/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Profil from 'src/components/Profil';
import { changeNickname, profileInputNickname, resetProfile, changePassword } from 'src/store/user';
import { testEditNickname, testEditPassword } from 'src/store/userMiddleware';

// Action Creators

/**
 * Code
 */
const mapStateToProps = state => ({
  nickname: state.user.nickname,
  email: state.user.email,
  user: state.user.user,
  doneNickname: state.user.switchInputNickname,
  donePassword: state.user.switchInputPassword,
  valueNickname: state.user.profileInputNickname,
  errorProfile: state.user.errorProfile,
});


const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      changeNickname,
      profileInputNickname,
      testEditNickname,
      resetProfile,
      testEditPassword,
      changePassword,
    },
    dispatch,
  )
);

// Container
export default connect(mapStateToProps, mapDispatchToProps)(Profil);


/**
 * Export
 */
