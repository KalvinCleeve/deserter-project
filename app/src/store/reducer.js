import { level1 } from 'src/components/Game/data';
/**
 * Initial State
 */
const initialState = {
  positionHero: '2-1',
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
      const position = state.positionHero.split('-');
      position[1] = Number(position[1]) + 1;
      if ((state.level1[position[0]][position[1]].obstacle)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        positionHero: `${position[0]}-${position[1]}`,
      }; }

    case MOVE_LEFT: {
      const position = state.positionHero.split('-');
      position[1] = Number(position[1]) - 1;
      if ((state.level1[position[0]][position[1]].obstacle)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        positionHero: `${position[0]}-${position[1]}`,
      }; }

    case MOVE_UP: {
      const position = state.positionHero.split('-');
      position[0] = Number(position[0]) - 1;
      if ((state.level1[position[0]][position[1]].obstacle)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        positionHero: `${position[0]}-${position[1]}`,
      }; }

    case MOVE_DOWN: {
      const position = state.positionHero.split('-');
      position[0] = Number(position[0]) + 1;
      if ((state.level1[position[0]][position[1]].obstacle)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        positionHero: `${position[0]}-${position[1]}`,
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
