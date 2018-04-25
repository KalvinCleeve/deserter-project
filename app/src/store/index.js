/*
 * Npm import
 */
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

/*
 * Local import
 */
// Reducer
import movement from 'src/store/movement';
import quiz from 'src/store/quiz';
import action from 'src/store/action';
import user from 'src/store/user';

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
  quiz,
  action,
  user,
});

// createStore
const store = createStore(rootReducer, enhancers);

/*
 * Export
 */
export default store;
