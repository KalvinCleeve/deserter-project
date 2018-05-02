/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';

// Action Creators

/**
 * Code
 */
const mapStateToProps = state => ({
  user: state.user.user,
});


const mapDispatchToProps = {};

// Container
export default connect(mapStateToProps, mapDispatchToProps)(App);


/**
 * Export
 */
