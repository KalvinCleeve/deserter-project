/*
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

/*
 * Local import
 */
import App from 'src/components/App';

import store from 'src/store';

/*
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);


document.addEventListener('DOMContentLoaded', () => {
  render(rootComponent, document.getElementById('root'));
});
