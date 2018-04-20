/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Game from 'src/components/Game';
import { moveRight, moveLeft, moveUp, moveDown } from 'src/store/reducer';

// Action Creators


/**
 * Code
 */
const mapStateToProps = state => ({
  level1: state.level1,
  positionHero: state.positionHero,
});


const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      moveRight,
      moveLeft,
      moveUp,
      moveDown,
    },
    dispatch,
  )
);

// Container
export default connect(mapStateToProps, mapDispatchToProps)(Game);


/**
 * Export
 */
