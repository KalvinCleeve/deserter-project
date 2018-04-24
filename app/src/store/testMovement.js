/*
 * Import
 */
import axios from 'axios';
import { moveRight, moveLeft, moveUp, moveDown } from 'src/store/movement';
import { createQuestion } from 'src/store/quiz';
/*
 * Code
 */

const TEST_MOVE_RIGHT = 'TEST_MOVE_RIGHT';
const TEST_MOVE_LEFT = 'TEST_MOVE_LEFT';
const TEST_MOVE_UP = 'TEST_MOVE_UP';
const TEST_MOVE_DOWN = 'TEST_MOVE_DOWN';
/*
 * Middleware
 */
export default store => next => (action) => {
  // Code
  switch (action.type) {
    case TEST_MOVE_RIGHT: {
      // axios
      //   .get('http://localhost:3000/')
      //   .then(result => console.log(result.data));

      store.dispatch(moveRight(store.getState().map.level1));
      break;
    }
    case TEST_MOVE_LEFT: {
      store.dispatch(moveLeft(store.getState().map.level1));
      axios
        .get(`https://opentdb.com/api.php?amount=1&category=${store.getState().quiz.category}&difficulty=${store.getState().quiz.difficulty}`)
        .then(result => store.dispatch(createQuestion(result.data.results[0])));
      break;
    }
    case TEST_MOVE_UP: {
      store.dispatch(moveUp(store.getState().map.level1));
      break;
    }
    case TEST_MOVE_DOWN: {
      store.dispatch(moveDown(store.getState().map.level1));
      break;
    }
    default:
  }
  // On passe au voisin
  next(action);
};

// console.log(store.getState());
export const testMoveRight = () => ({
  type: TEST_MOVE_RIGHT,
});

export const testMoveLeft = () => ({
  type: TEST_MOVE_LEFT,
});

export const testMoveUp = () => ({
  type: TEST_MOVE_UP,
});

export const testMoveDown = () => ({
  type: TEST_MOVE_DOWN,
});
