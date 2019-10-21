import { combineReducers } from 'redux';

import breakfast from './breakfast/breakfast.reducer';
import lunch from './lunch/lunch.reducer';
import dinner from './dinner/dinner.reducer';
import supper from './supper/supper.reducer';
import currentMeal from './current-meal/current-meal.reducer';
import timeOfDay from './time-of-day/time-of-day.reducer';
import suggestedMeal from './suggested-meal/suggested-meal.reducer';
import toggleView from './view-meals/view-meals.reducer';
import currentList from './current-list-of-meals/current-list-of-meals.reducer';
import removeMeal from './remove-meal/remove-meal.reducer';

export default combineReducers({
  breakfast,
  lunch,
  dinner,
  supper,
  currentMeal,
  timeOfDay,
  suggestedMeal,
  toggleView,
  currentList,
  removeMeal,
});
