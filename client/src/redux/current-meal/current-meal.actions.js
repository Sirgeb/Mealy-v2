import { SET_CURRENT_MEAL } from './current-meal.action-types'

export const setCurrentMeal = (meal) => ({
  type: SET_CURRENT_MEAL,
  payload: meal
});