import { ADD_MEAL_TO_SUPPER, REMOVE_MEAL_FROM_SUPPER } from './supper.action-types';

const supperReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MEAL_TO_SUPPER: 
      return [...state, action.payload];
    case REMOVE_MEAL_FROM_SUPPER:
      return state.filter(meal => meal !== action.payload);
    default:
      return state;
  }
}

export { supperReducer as default };
