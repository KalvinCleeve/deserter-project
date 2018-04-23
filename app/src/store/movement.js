/**
 * Initial State
 */
const initialState = {
  heros: {
    direction: 'down',
    positionHeros: '2-1',
  },
};

/**
 * Types
 */
const MOVE_RIGHT = 'MOVE_RIGHT';
const MOVE_LEFT = 'MOVE_LEFT';
const MOVE_UP = 'MOVE_TOP';
const MOVE_DOWN = 'MOVE_DOWN';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MOVE_RIGHT: {
      // console.log(action);
      // Récupération de la valeur position du heros et de la case suivante
      const position = state.heros.positionHeros.split('-');
      position[1] = Number(position[1]) + 1;
      // Modification de la direction du heros
      // Si case est égale a obstacle, le heros n'avance pas
      if (action.map[position[0]][position[1]].obstacle) {
        return Object.assign({}, state, {
          heros: {
            ...state.heros,
            direction: 'right',
          },
        });
      }
      // Sinon il avance
      return Object.assign({}, state, {
        heros: {
          ...state.heros,
          positionHeros: `${position[0]}-${position[1]}`,
          direction: 'right',
        },
      }); }

    case MOVE_LEFT: {
      const position = state.heros.positionHeros.split('-');
      position[1] = Number(position[1]) - 1;
      if (action.map[position[0]][position[1]].obstacle) {
        return Object.assign({}, state, {
          heros: {
            ...state.heros,
            direction: 'left',
          },
        });
      }
      return Object.assign({}, state, {
        heros: {
          ...state.heros,
          positionHeros: `${position[0]}-${position[1]}`,
          direction: 'left',
        },
      }); }

    case MOVE_UP: {
      const position = state.heros.positionHeros.split('-');
      position[0] = Number(position[0]) - 1;
      if (action.map[position[0]][position[1]].obstacle) {
        return Object.assign({}, state, {
          heros: {
            ...state.heros,
            direction: 'up',
          },
        });
      }
      // Sinon il avance
      return Object.assign({}, state, {
        heros: {
          ...state.heros,
          positionHeros: `${position[0]}-${position[1]}`,
          direction: 'up',
        },
      }); }

    case MOVE_DOWN: {
      const position = state.heros.positionHeros.split('-');
      position[0] = Number(position[0]) + 1;
      if (action.map[position[0]][position[1]].obstacle) {
        return Object.assign({}, state, {
          heros: {
            ...state.heros,
            direction: 'down',
          },
        });
      }
      return Object.assign({}, state, {
        heros: {
          ...state.heros,
          positionHeros: `${position[0]}-${position[1]}`,
          direction: 'down',
        },
      }); }

    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const moveRight = map => ({
  type: MOVE_RIGHT,
  map,
});

export const moveLeft = map => ({
  type: MOVE_LEFT,
  map,
});

export const moveUp = map => ({
  type: MOVE_UP,
  map,
});

export const moveDown = map => ({
  type: MOVE_DOWN,
  map,
});

/**
 * Export
 */
export default reducer;
