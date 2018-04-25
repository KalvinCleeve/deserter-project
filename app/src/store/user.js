/**
 * Initial State
 */
const initialState = {
  user: 'anonyme',
};

/**
 * Types
 */
const CONNECT_USER = 'CONNECT_USER';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECT_USER:
      return {
        ...state,
        // user: ???,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const connectUser = user => ({
  type: CONNECT_USER,
  user,
});

/**
 * Export
 */
export default reducer;
