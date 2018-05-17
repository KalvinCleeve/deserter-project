/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Game from 'src/components/Game';

// Action Creators

/**
 * Code
 */
const mapStateToProps = state => ({
  user: state.user.user,
});


const mapDispatchToProps = {};

// Container
export default connect(mapStateToProps, mapDispatchToProps)(Game);


/**
 * Export
 */
