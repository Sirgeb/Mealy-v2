import { ADD_MEAL_TO_LUNCH, REMOVE_MEAL_FROM_LUNCH } from './lunch.action-types';

const lunchReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MEAL_TO_LUNCH:
      return [...state, action.payload];
    case REMOVE_MEAL_FROM_LUNCH:
      return state.filter(meal => meal !== action.payload);
    default:
      return state;
  }
}

export { lunchReducer as default };
