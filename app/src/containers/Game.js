/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Game from 'src/components/Game';
import { moveRight, moveLeft, moveUp, moveDown } from 'src/store/movement';

// Action Creators

/**
 * Code
 */
const mapStateToProps = state => ({
  level1: state.map.level1,
  positionHero: state.movement.heros.positionHeros,
  direction: state.movement.heros.direction,
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