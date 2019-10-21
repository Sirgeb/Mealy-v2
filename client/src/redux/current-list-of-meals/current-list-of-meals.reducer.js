import { SET_CURRENT_LIST_OF_MEALS } from './current-list-of-meals.action-types';

const currentListOfMealsReducer = (state="", action) => {
  switch (action.type) {
    case SET_CURRENT_LIST_OF_MEALS:
      return action.payload;
    default:
      return state;
  }
}

export { currentListOfMealsReducer as default };
