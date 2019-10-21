import { ADD_MEAL_TO_DINNER, REMOVE_MEAL_FROM_DINNER } from './dinner.action-types';

export const addMealToDinner = (meal) => ({
  type: ADD_MEAL_TO_DINNER,
  payload: meal,
});

export const removeMealFromDinner = (meal) => ({
  type: REMOVE_MEAL_FROM_DINNER,
  payload: meal,
});

