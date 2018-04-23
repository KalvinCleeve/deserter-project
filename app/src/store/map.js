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
const DO_SOMETHING = 'DO_SOMETHING';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
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
export const doSomething = () => ({
  type: DO_SOMETHING,
});

/**
 * Export
 */
export default reducer;
