/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Profil from 'src/components/Profil';

// Action Creators

/**
 * Code
 */
const mapStateToProps = state => ({
  nickname: state.user.nickname,
  email: state.user.email,
  user: state.user.user,
});


const mapDispatchToProps = {};

// Container
export default connect(mapStateToProps, mapDispatchToProps)(Profil);


/**
 * Export
 */
