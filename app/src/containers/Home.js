/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Home from 'src/components/Home';

// Action Creators

/**
 * Code
 */
const mapStateToProps = state => ({
  user: state.user.user,
});


const mapDispatchToProps = {};

// Container
export default connect(mapStateToProps, mapDispatchToProps)(Home);


/**
 * Export
 */
