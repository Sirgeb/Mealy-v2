import { TOGGLE_VIEW_MEALS } from './view-meals.action-types';

const toggleViewMealsReducer = (state=false, action) => {
  switch (action.type) {
    case TOGGLE_VIEW_MEALS:
      return !state;
    default:
      return state;
  }
}

export { toggleViewMealsReducer as default };
