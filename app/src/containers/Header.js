/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Header from 'src/components/Header';
import { disconnect } from 'src/store/user';

// Action Creators

/**
 * Code
 */
const mapStateToProps = state => ({
  user: state.user.user,
});


const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      disconnect,
    },
    dispatch,
  )
);

// Container
export default connect(mapStateToProps, mapDispatchToProps)(Header);


/**
 * Export
 */
