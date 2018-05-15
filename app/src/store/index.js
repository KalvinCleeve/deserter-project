/*
 * Npm import
 */
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

/*
 * Local import
 */
// Reducer
import user from 'src/store/user';

// Middleware
import userMiddleware from './userMiddleware';

/*
 * Code
 */
// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// Middleware vers Enhancers
const exampleEnhancer = applyMiddleware(userMiddleware);
const enhancers = compose(exampleEnhancer, ...devTools);
const rootReducer = combineReducers({
  user,
});

// createStore
const store = createStore(rootReducer, enhancers);

/*
 * Export
 */
export default store;
