/*
 * Npm import
 */
import axios from 'axios';
import { connectUser, signUser, connectUserError, signUserError } from 'src/store/user';

/*
 * Local import
 */
const TEST_CONNECT_USER = 'TEST_CONNECT_USER';
const TEST_SIGN_USER = 'TEST_SIGN_USER';

/*
 * Code
 */
export default store => next => (action) => {
  // On écoute les actions qui nous intéressent
  switch (action.type) {
    case TEST_CONNECT_USER: {
      if (!action.email || !action.password) {
        store.dispatch(connectUserError(['Champ manquant']));
        // store.dispatch(connectUserError(['Mot de passe manquant']));
        break;
      }
      const user = {
        email: store.getState().user.inputConnectEmail,
        password: action.password,
      };

      axios
        .post('http://localhost:3000/connect', { user })
        .then((result) => {
          if (result.data[0].email) {
            store.dispatch(connectUser(result.data));
          }
          else {
            store.dispatch(connectUserError([result.data]));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }


    case TEST_SIGN_USER: {
      const user = {
        firstname: store.getState().user.inputSignFistname,
        lastname: store.getState().user.inputSignLastName,
        nickname: store.getState().user.inputSignNickname,
        email: store.getState().user.inputSignEmail,
        password: action.password,
        confirmPassword: action.confirmPassword,
      };
        // eslint-disable-next-line
    if (!user.firstname || !user.lastname || !user.nickname || !user.email || !user.password || !user.confirmPassword) {
        store.dispatch(signUserError(['Champ manquant']));
        break;
      }
      if (action.password !== action.confirmPassword) {
        store.dispatch(signUserError(['Confirmation mot de passe invalide']));
        break;
      }

      const error = [];

      axios
        .post('http://localhost:3000/verif/email', { email: user.email })
        .then((email) => {
          if (!email.data) {
            error.push('Email déjà utilisé');
          }
          axios
            .post('http://localhost:3000/verif/nickname', { nickname: user.nickname })
            .then((nickname) => {
              if (!nickname.data) {
                error.push('Nickname déjà utilisé');
              }
              if (error[0]) {
                store.dispatch(signUserError(error));
              }
              else {
                axios
                  .post('http://localhost:3000/signUser', { user })
                  .then((signUp) => {
                    store.dispatch(signUser(signUp.data));
                  });
              }
            });
        });
    }
      break;

    default:
  }

  // On passe à son voisin
  next(action);
};

/*
 * Action Creator
 */
export const testConnectUser = password => ({
  type: TEST_CONNECT_USER,
  password,
});

export const testSignUser = (password, confirmPassword) => ({
  type: TEST_SIGN_USER,
  password,
  confirmPassword,
});
