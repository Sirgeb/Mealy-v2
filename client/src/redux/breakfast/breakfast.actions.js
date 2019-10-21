import { ADD_MEAL_TO_BREAKFAST, REMOVE_MEAL_FROM_BREAKFAST } from './breakfast.action-types';

export const addMealToBreakfast = (meal) => ({
  type: ADD_MEAL_TO_BREAKFAST,
  payload: meal
});

export const removeMealFromBreakfast = (meal) => ({
  type: REMOVE_MEAL_FROM_BREAKFAST,
  payload: meal
});
