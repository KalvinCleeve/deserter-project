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
import quiz from 'src/store/quiz';
import action from 'src/store/action';

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
const rootReducer = combineReducers({
  movement,
  map,
  quiz,
  action,
});

// createStore
const store = createStore(rootReducer, enhancers);

/*
 * Export
 */
export default store;
