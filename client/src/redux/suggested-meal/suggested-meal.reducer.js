import { SET_SUGGESTED_MEAL, UNSET_SUGGESTED_MEAL } from './suggested-meal.action-types';

const suggestedMealReducer = (state="", action) => {
  switch (action.type) {
    case SET_SUGGESTED_MEAL:
      return action.payload;
    case UNSET_SUGGESTED_MEAL:
      return "";
    default:
      return state;
  }
}

export { suggestedMealReducer as default };
