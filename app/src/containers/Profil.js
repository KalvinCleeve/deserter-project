/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Profil from 'src/components/Profil';
import { changeNickname } from 'src/store/user';

// Action Creators

/**
 * Code
 */
const mapStateToProps = state => ({
  nickname: state.user.nickname,
  email: state.user.email,
  user: state.user.user,
  done: state.user.changeNickname,
});


const mapDispatchToProps = dispatch => (
  bindActionCreators(
    { changeNickname },
    dispatch,
  )
);

// Container
export default connect(mapStateToProps, mapDispatchToProps)(Profil);


/**
 * Export
 */
