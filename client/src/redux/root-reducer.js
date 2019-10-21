import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['breakfast', 'lunch', 'dinner', 'supper']
}

const rootReducer = combineReducers({
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

export default persistReducer(persistConfig, rootReducer);

