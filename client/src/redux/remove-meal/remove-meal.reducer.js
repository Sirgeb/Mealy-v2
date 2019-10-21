import { REMOVE_MEAL } from './remove-meal.action-types';

const removeMealReducer = (state="", action) => {
  switch (action.type) {
    case REMOVE_MEAL:
      return action.payload;
    default:
      return state;
  }
}

export { removeMealReducer as default };
