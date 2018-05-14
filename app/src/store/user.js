/**
 * Initial State
 */
const initialState = {
  errorConnect: [],
  errorSignUp: [],
  errorProfile: [],

  inputSignFirstname: '',
  inputSignLastname: '',
  inputSignNickname: '',
  inputSignEmail: '',
  inputConnectEmail: '',
  profileInputNickname: '',

  switchInputNickname: true,
  switchInputPassword: true,

  user: false,
  nickname: '',
  email: '',


};

/**
 * Types
 */
const CONNECT_USER_ERROR = 'CONNECT_USER_ERROR';
const SIGN_USER_ERROR = 'SIGN_USER_ERROR';
const PROFILE_NICKNAME_ERROR = 'PROFILE_NICKNAME_ERROR';

const CHANGE_INPUT_SIGN_FIRSTNAME = 'CHANGE_INPUT_SIGN_FIRSTNAME';
const CHANGE_INPUT_SIGN_LASTNAME = 'CHANGE_INPUT_SIGN_LASTNAME';
const CHANGE_INPUT_SIGN_NICKNAME = 'CHANGE_INPUT_SIGN_NICKNAME';
const CHANGE_INPUT_SIGN_EMAIL = 'CHANGE_INPUT_SIGN_EMAIL';
const CHANGE_INPUT_CONNECT_EMAIL = 'CHANGE_INPUT_CONNECT_EMAIL';
const PROFILE_INPUT_NICKNAME = 'PROFILE_INPUT_NICKNAME';

const CHANGE_NICKNAME = 'CHANGE_NICKNAME';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const UPDATE_NICKNAME = 'UPDATE_NICKNAME';
const CONNECT_USER = 'CONNECT_USER';
const RESET_FORM_ERROR = 'RESET_FORM_ERROR';
const RESET_PROFILE = 'RESET_PROFILE';
const DISCONNECT = 'DISCONNECT';
const SIGN_USER = 'SIGN_USER';


/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECT_USER_ERROR:
      console.log(action.error);
      return {
        ...state,
        errorConnect: action.error,
      };

    case SIGN_USER_ERROR:
      console.log(action.error);
      return {
        ...state,
        errorSignUp: action.error,
      };

    case PROFILE_NICKNAME_ERROR:
      console.log(action.error);
      return {
        ...state,
        errorProfile: action.error,
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

    case CHANGE_INPUT_CONNECT_EMAIL:
      return {
        ...state,
        inputConnectEmail: action.input,
      };

    case PROFILE_INPUT_NICKNAME:

      return {
        ...state,
        profileInputNickname: action.input,
      };

    case UPDATE_NICKNAME:
      return {
        ...state,
        nickname: state.profileInputNickname,
        switchInputNickname: true,
        profileInputNickname: '',
      };

    case CHANGE_NICKNAME:
      return {
        ...state,
        switchInputNickname: false,
      };

    case CHANGE_PASSWORD:
      return {
        ...state,
        switchInputPassword: false,
      };

    case CONNECT_USER:
      console.log(action.user);
      return {
        ...state,
        nickname: action.user.nickname,
        email: action.user.email,
        user: true,
        inputConnectEmail: '',
      };


    case RESET_FORM_ERROR:
      return {
        ...state,
        errorConnect: [],
        errorSignUp: [],
      };

    case RESET_PROFILE:
      return {
        ...state,
        switchInputNickname: true,
        switchInputPassword: true,
        errorProfile: [],
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
        inputSignFirstname: '',
        inputSignLastname: '',
        inputSignNickname: '',
        inputSignEmail: '',
      };


    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const updateNickname = () => ({
  type: UPDATE_NICKNAME,
});

export const changeNickname = () => ({
  type: CHANGE_NICKNAME,
});
export const changePassword = () => ({
  type: CHANGE_PASSWORD,
});


export const connectUser = user => ({
  type: CONNECT_USER,
  user,
});

export const connectUserError = error => ({
  type: CONNECT_USER_ERROR,
  error,
});

export const profileNicknameError = error => ({
  type: PROFILE_NICKNAME_ERROR,
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

export const resetProfile = () => ({
  type: RESET_PROFILE,
});

export const profileInputNickname = input => ({
  type: PROFILE_INPUT_NICKNAME,
  input,
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
