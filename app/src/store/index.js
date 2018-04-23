/*
 * Npm import
 */
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

/*
 * Local import
 */
// Reducer
import movement from 'src/store/movement';
import map from 'src/store/map';

// Middleware
import testMovement from './testMovement';

/*
 * Code
 */
// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// Middleware vers Enhancers
const exampleEnhancer = applyMiddleware(testMovement);
const enhancers = compose(exampleEnhancer, ...devTools);
const rootReducer = combineReducers({ movement, map });

// createStore
const store = createStore(rootReducer, enhancers);

/*
 * Export
 */
export default store;
