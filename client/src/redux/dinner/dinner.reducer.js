import { ADD_MEAL_TO_DINNER, REMOVE_MEAL_FROM_DINNER } from './dinner.action-types'; 

const dinnerReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MEAL_TO_DINNER:
      return [...state, action.payload];
    case REMOVE_MEAL_FROM_DINNER:
      return state.filter(meal => meal !== action.payload);
    default:
      return state;
  }
}

export { dinnerReducer as default };
