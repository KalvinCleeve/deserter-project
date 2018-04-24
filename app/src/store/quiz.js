/**
 * Initial State
 */
const initialState = {
  category: '',
  type: '',
  difficulty: '',
  question: '',
  correct_aswer: '',
  incorrect_aswers: [],
};

/**
 * Types
 */
const CREATE_QUESTION = 'CREATE_QUESTION';
const CHOICE_DIFFICULTY = 'CHOICE_DIFFICULTY';
const CHOICE_CATEGORY = 'CHOICE_CATEGORY';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_QUESTION:
      console.log(`category ${action.question.category}`);
      console.log(`type ${action.question.type}`);
      console.log(`difficulty ${action.question.difficulty}`);
      console.log(`question ${action.question.question}`);
      console.log(`correct_answer ${action.question.correct_answer}`);
      action.question.incorrect_answers.forEach((element) => {
        console.log(`incorrect_answers ${element}`);
      });
      return {
        ...state,
        type: action.question.type,
        question: action.question.question,
        correct_aswer: action.question.correct_answer,
        incorrect_aswers: action.question.incorrect_answers,
      };

    case CHOICE_DIFFICULTY:

      return {
        ...state,
        difficulty: action.difficulty,
      };

    case CHOICE_CATEGORY:
      return {
        ...state,
        category: action.category,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const createQuestion = question => ({
  type: CREATE_QUESTION,
  question,
});

export const choiceDifficulty = difficulty => ({
  type: CHOICE_DIFFICULTY,
  difficulty,
});

export const choiceCategory = category => ({
  type: CHOICE_CATEGORY,
  category,
});

/**
 * Export
 */
export default reducer;
