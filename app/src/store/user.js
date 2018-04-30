/**
 * Initial State
 */
const initialState = {
  user: false,
  errorConnect: [],
  errorSignUp: [],
  inputSignFistname: '',
  inputSignLastName: '',
  inputSignNickname: '',
  inputSignEmail: '',

  inputConnectEmail: '',
};

/**
 * Types
 */
const CONNECT_USER = 'CONNECT_USER';
const CONNECT_USER_ERROR = 'CONNECT_USER_ERROR';
const CHANGE_INPUT_CONNECT_EMAIL = 'CHANGE_INPUT_CONNECT_EMAIL';

const SIGN_USER = 'SIGN_USER';
const SIGN_USER_ERROR = 'SIGN_USER_ERROR';
const CHANGE_INPUT_SIGN_FIRSTNAME = 'CHANGE_INPUT_SIGN_FIRSTNAME';
const CHANGE_INPUT_SIGN_LASTNAME = 'CHANGE_INPUT_SIGN_LASTNAME';
const CHANGE_INPUT_SIGN_NICKNAME = 'CHANGE_INPUT_SIGN_NICKNAME';
const CHANGE_INPUT_SIGN_EMAIL = 'CHANGE_INPUT_SIGN_EMAIL';

const RESET_FORM_ERROR = 'RESET_FORM_ERROR';

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

    case CONNECT_USER_ERROR:
    console.log(action.error);
      return {
        ...state,
        errorConnect: action.error,
      };

    case SIGN_USER:
    console.log(action.user);
      return {
        ...state,
        user: true,
      };

    case SIGN_USER_ERROR:
    console.log(action.error);
      return {
        ...state,
        errorSignUp: action.error,
      };

    case RESET_FORM_ERROR:
      return {
        ...state,
        errorConnect: [],
        errorSignUp: [],
      };

    case CHANGE_INPUT_CONNECT_EMAIL:
      return {
        ...state,
        inputConnectEmail: action.input,
      };

    case CHANGE_INPUT_SIGN_FIRSTNAME:
      return {
        ...state,
        inputSignFistname: action.input,
      };

    case CHANGE_INPUT_SIGN_LASTNAME:
      return {
        ...state,
        inputSignLastName: action.input,
      };

    case CHANGE_INPUT_SIGN_NICKNAME:
      return {
        ...state,
        inputSignNickname: action.input,
      };

    case CHANGE_INPUT_SIGN_EMAIL:
      return {
        ...state,
        inputSignEmail: action.input,
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

export const connectUserError = error => ({
  type: CONNECT_USER_ERROR,
  error,
});


export const signUser = user => ({
  type: SIGN_USER,
  user,
});


export const signUserError = error => ({
  type: SIGN_USER_ERROR,
  error,
});

export const resetFormError = () => ({
  type: RESET_FORM_ERROR,
});

export const changeInputConnectEmail = input => ({
  type: CHANGE_INPUT_CONNECT_EMAIL,
  input,
});


export const changeInputSignFirstname = input => ({
  type: CHANGE_INPUT_SIGN_FIRSTNAME,
  input,
});

export const changeInputSignLastname = input => ({
  type: CHANGE_INPUT_SIGN_LASTNAME,
  input,
});

export const changeInputSignNickname = input => ({
  type: CHANGE_INPUT_SIGN_NICKNAME,
  input,
});

export const changeInputSignEmail = input => ({
  type: CHANGE_INPUT_SIGN_EMAIL,
  input,
});
/**
 * Export
 */
export default reducer;
