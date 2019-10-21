import { SET_CURRENT_LIST_OF_MEALS } from './current-list-of-meals.action-types'

export const setCurrentListOfMeals = (currentList) => ({
  type: SET_CURRENT_LIST_OF_MEALS,
  payload: currentList
});