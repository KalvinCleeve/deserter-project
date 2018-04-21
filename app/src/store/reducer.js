import { level1 } from 'src/components/Game/data';
/**
 * Initial State
 */
const initialState = {
  heros: {
    direction: 'down',
    positionHeros: '2-1',
  },
  level1,
};

/**
 * Types
 */
const DO_SOMETHING = 'DO_SOMETHING';
const MOVE_RIGHT = 'MOVE_RIGHT';
const MOVE_LEFT = 'MOVE_LEFT';
const MOVE_UP = 'MOVE_TOP';
const MOVE_DOWN = 'MOVE_DOWN';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
      };

    case MOVE_RIGHT: {
      // Récupération de la valeur position du heros et de la case suivante
      const position = state.heros.positionHeros.split('-');
      position[1] = Number(position[1]) + 1;
      // Modification de la direction du heros
      state.heros.direction = 'right';
      // Si case est égale a obstacle, le heros n'avance pas
      if ((state.level1[position[0]][position[1]].obstacle)) {
        return {
          ...state,
        };
        // Sinon il avance
      }
      state.heros.positionHeros = `${position[0]}-${position[1]}`;
      return {
        ...state,
      }; }

    case MOVE_LEFT: {
      const position = state.heros.positionHeros.split('-');
      position[1] = Number(position[1]) - 1;
      state.heros.direction = 'left';
      if ((state.level1[position[0]][position[1]].obstacle)) {
        return {
          ...state,
        };
      }
      state.heros.positionHeros = `${position[0]}-${position[1]}`;
      return {
        ...state,
      }; }

    case MOVE_UP: {
      const position = state.heros.positionHeros.split('-');
      position[0] = Number(position[0]) - 1;
      state.heros.direction = 'up';
      if ((state.level1[position[0]][position[1]].obstacle)) {
        return {
          ...state,
        };
      }
      state.heros.positionHeros = `${position[0]}-${position[1]}`;
      return {
        ...state,
      };
    }

    case MOVE_DOWN: {
      const position = state.heros.positionHeros.split('-');
      position[0] = Number(position[0]) + 1;
      state.heros.direction = 'down';
      if ((state.level1[position[0]][position[1]].obstacle)) {
        return {
          ...state,
        };
      }
      state.heros.positionHeros = `${position[0]}-${position[1]}`;
      return {
        ...state,
      }; }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const doSomething = () => ({
  type: DO_SOMETHING,
});

export const moveRight = () => ({
  type: MOVE_RIGHT,
});

export const moveLeft = () => ({
  type: MOVE_LEFT,
});

export const moveUp = () => ({
  type: MOVE_UP,
});

export const moveDown = () => ({
  type: MOVE_DOWN,
});

/**
 * Export
 */
export default reducer;
