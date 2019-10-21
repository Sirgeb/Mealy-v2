import { SET_CURRENT_MEAL } from './current-meal.action-types';

const currentMealReducer = (state="", action) => {
  switch (action.type) {
    case SET_CURRENT_MEAL:
      return action.payload;
    default:
      return state;
  }
}

export { currentMealReducer as default };
