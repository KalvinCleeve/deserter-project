/*
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { CookieProvider } from 'react-cookie';

/*
 * Local import
 */
import App from 'src/containers/App';

import store from 'src/store';

/*
 * Code
 */
const rootComponent = (
  <CookieProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookieProvider>
);


document.addEventListener('DOMContentLoaded', () => {
  render(rootComponent, document.getElementById('root'));
});
