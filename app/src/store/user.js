/**
 * Initial State
 */
const initialState = {
  user: false,
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
      console.log(action.user);
      return {
        ...state,
        user: true,
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
