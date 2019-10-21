import { ADD_MEAL_TO_LUNCH, REMOVE_MEAL_FROM_LUNCH } from './lunch.action-types'; 

export const addMealToLunch = (meal) => ({
  type: ADD_MEAL_TO_LUNCH,
  payload: meal,
});

export const removeMealFromLunch = (meal) => ({
  type: REMOVE_MEAL_FROM_LUNCH,
  payload: meal
});
