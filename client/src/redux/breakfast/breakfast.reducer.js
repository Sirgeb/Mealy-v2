import { ADD_MEAL_TO_BREAKFAST, REMOVE_MEAL_FROM_BREAKFAST } from './breakfast.action-types';

const breakfastReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MEAL_TO_BREAKFAST:
      return [...state, action.payload];
    case REMOVE_MEAL_FROM_BREAKFAST:
      return state.filter(meal => meal !== action.payload);
    default:
      return state;
  }
}

export { breakfastReducer as default };
