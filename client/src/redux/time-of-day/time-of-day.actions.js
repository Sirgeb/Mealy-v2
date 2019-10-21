import { SET_TIME_OF_DAY } from './time-of-day.action-types'

export const setTimeOfDay = (timeOfDay) => ({
  type: SET_TIME_OF_DAY,
  payload: timeOfDay
});
