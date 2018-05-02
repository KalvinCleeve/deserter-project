/**
 * Initial State
 */
const initialState = {
  errorConnect: [],
  errorSignUp: [],
  inputSignFirstname: '',
  inputSignLastname: '',
  inputSignNickname: '',
  inputSignEmail: '',
  user: false,
  nickname: '',
  email: '',

  inputConnectEmail: '',
};

/**
 * Types
 */
const CONNECT_USER = 'CONNECT_USER';
const CONNECT_USER_ERROR = 'CONNECT_USER_ERROR';
const CHANGE_INPUT_CONNECT_EMAIL = 'CHANGE_INPUT_CONNECT_EMAIL';
const DISCONNECT = 'DISCONNECT';

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
      // window.location.href = 'http://localhost:3333/';

      return {
        ...state,
        nickname: action.user.nickname,
        email: action.user.email,
        user: true,
      };

    case CONNECT_USER_ERROR:
      console.log(action.error);
      return {
        ...state,
        errorConnect: action.error,
      };

    case DISCONNECT:
      return {
        ...state,
        user: false,
        nickname: '',
        email: '',
      };

    case SIGN_USER:
      console.log('Vous êtes connecté');
      console.log(action.user);
      return {
        ...state,
        nickname: action.user.nickname,
        email: action.user.email,
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
        inputSignFirstname: action.input,
      };

    case CHANGE_INPUT_SIGN_LASTNAME:
      return {
        ...state,
        inputSignLastname: action.input,
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

export const disconnect = () => ({
  type: DISCONNECT,
});
/**
 * Export
 */
export default reducer;
