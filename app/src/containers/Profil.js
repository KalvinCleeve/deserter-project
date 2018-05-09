/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Profil from 'src/components/Profil';
import { changeNickname, profileInputNickname } from 'src/store/user';
import { testEditNickname } from 'src/store/userMiddleware';

// Action Creators

/**
 * Code
 */
const mapStateToProps = state => ({
  nickname: state.user.nickname,
  email: state.user.email,
  user: state.user.user,
  done: state.user.switchInputNickname,
  valueNickname: state.user.profileInputNickname,
});


const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      changeNickname,
      profileInputNickname,
      testEditNickname,
    },
    dispatch,
  )
);

// Container
export default connect(mapStateToProps, mapDispatchToProps)(Profil);


/**
 * Export
 */
