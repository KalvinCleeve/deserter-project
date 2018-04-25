/**
 * Initial State
 */
const initialState = {
  test: true,
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
          if (action.map[position[0]][position[1]].element === 'lever') {
            return Object.assign({}, state, {
              test: false,
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
export const interaction = (map, heros) => ({
  type: INTERACTION,
  map,
  heros,
});

/**
 * Export
 */
export default reducer;
