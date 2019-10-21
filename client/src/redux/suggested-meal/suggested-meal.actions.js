import { SET_SUGGESTED_MEAL, UNSET_SUGGESTED_MEAL } from './suggested-meal.action-types';

export const setSuggestedMeal = (meal) => ({
  type: SET_SUGGESTED_MEAL,
  payload: meal
});

export const unsetSuggestedMeal = () => ({
  type: UNSET_SUGGESTED_MEAL
});
