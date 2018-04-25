import { level1 } from 'src/components/Game/data';
/**
 * Initial State
 */
const initialState = {
  level1,
};

/**
 * Types
 */
const INTERACTION = 'INTERACTION';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INTERACTION:
      switch (action.heros.direction) {
        case 'right': {
          const position = action.heros.positionHeros.split('-');
          position[1] = Number(position[1]) + 1;
          if (state.level1[position[0]][position[1]].element === 'lever') {
            return Object.assign({}, state, {
              level1: {
                ...state.level1,
                0: true,
              },
            });
          }
          break;
        }
        default:
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const interaction = heros => ({
  type: INTERACTION,
  heros,
});

/**
 * Export
 */
export default reducer;
