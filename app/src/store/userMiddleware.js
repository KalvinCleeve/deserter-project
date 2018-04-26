/*
 * Npm import
 */
import axios from 'axios';
import { connectUser } from 'src/store/user';

/*
 * Local import
 */
const TEST_CONNECT_USER = 'TEST_CONNECT_USER';


/*
 * Code
 */
export default store => next => (action) => {
  // On écoute les actions qui nous intéressent
  switch (action.type) {
    case TEST_CONNECT_USER: {
      // const { email } = action;
      // const { password } = action;
      const user = {
        email: action.email,
        password: action.password,
      };

      axios
        .post('http://localhost:3000/connect', { user })
        .then(result => store.dispatch(connectUser(result)));
      break;
    }

    default:
  }

  // On passe à son voisin
  next(action);
};

/*
 * Action Creator
 */
export const testConnectUser = (email, password) => ({
  type: TEST_CONNECT_USER,
  email,
  password,
});
