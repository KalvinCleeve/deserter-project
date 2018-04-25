import level1 from 'src/components/Game/level/level1';
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
          position[0] = Number(position[0]);
          if (state.level1[position[0]][position[1]].element === 'lever-off') {
            const newlevel1 = [...state.level1];

            newlevel1[position[0]][position[1]] = { element: 'lever-on', obstacle: true };

            return Object.assign({}, state, {

              level1: newlevel1,

            });
          }

          if (state.level1[position[0]][position[1]].element === 'lever-on') {
            const newlevel1 = [...state.level1];

            newlevel1[position[0]][position[1]] = { element: 'lever-off', obstacle: true };

            return Object.assign({}, state, {

              level1: newlevel1,

            });
          }
          return ({
            ...state,
          });
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
