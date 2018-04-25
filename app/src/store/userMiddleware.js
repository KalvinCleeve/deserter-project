/*
 * Npm import
 */
import axios from 'axios';
import { connectUser } from 'src/store/user';

/*
 * Local import
 */
const CONNECT_USER = 'CONNECT_USER';


/*
 * Code
 */
export default store => next => (action) => {
  // On écoute les actions qui nous intéressent
  switch (action.type) {
    case CONNECT_USER: {
      const { user } = action;
      axios.post('http://localhost:3000/connect', { user });
      store.dispatch(connectUser(user));
      break;
    }

    default:
  }

  // On passe à son voisin
  next(action);
};
