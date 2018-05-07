/*
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD

=======
// import { CookieProvider } from 'react-cookie';
>>>>>>> 9673c5b02ac7a0a3d3bdb8aedf801513fa08646c

/*
 * Local import
 */
import App from 'src/containers/App';

import store from 'src/store';

/*
 * Code
 */
const rootComponent = (

    <Provider store={store}>
      <App />
    </Provider>

);


document.addEventListener('DOMContentLoaded', () => {
  render(rootComponent, document.getElementById('root'));
});
