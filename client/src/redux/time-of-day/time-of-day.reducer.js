import { SET_TIME_OF_DAY } from './time-of-day.action-types';

const timeOfDayReducer = (state="", action) => {
  switch (action.type) {
    case SET_TIME_OF_DAY:
      return action.payload;
    default:
      return state;
  }
}

export { timeOfDayReducer as default };
