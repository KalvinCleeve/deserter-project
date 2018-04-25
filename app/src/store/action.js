/**
 * Initial State
 */
const initialState = {

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
            console.log('test');
          }
          break;
        }
        default:
          console.log('marche pas');
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
