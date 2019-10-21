import { ADD_MEAL_TO_SUPPER, REMOVE_MEAL_FROM_SUPPER } from './supper.action-types';

export const addMealToSupper = (meal) => ({
  type: ADD_MEAL_TO_SUPPER,
  payload: meal,
});

export const removeMealFromSupper = (meal) => ({
  type: REMOVE_MEAL_FROM_SUPPER,
  payload: meal
});
