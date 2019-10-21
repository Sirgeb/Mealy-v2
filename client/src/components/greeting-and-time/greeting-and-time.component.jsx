import React from 'react';
import ReactLiveClock from './live-clock.component';
import { connect } from 'react-redux';
 
import { setCurrentMeal } from '../../redux/current-meal/current-meal.actions';
import { setTimeOfDay } from '../../redux/time-of-day/time-of-day.actions';
import { setCurrentListOfMeals } from '../../redux/current-list-of-meals/current-list-of-meals.actions';

import { GreetingAndTimeStyles } from './greeting-and-time.styles';

class GreetingAndTime extends React.Component {

  componentDidMount() {
    let hour = new Date().getHours();
    const { setCurrentMeal, setTimeOfDay, setCurrentListOfMeals } = this.props;

    if (hour >= 4 && hour <= 11) {
      setTimeOfDay('Morning');
      setCurrentMeal('Breakfast');
      setCurrentListOfMeals('Breakfast');

    } else if (hour >= 12 && hour <= 16) {
      setTimeOfDay('Afternoon');
      setCurrentMeal('Lunch');
      setCurrentListOfMeals('Lunch');

    } else if (hour >= 17 && hour <= 20) {
      setTimeOfDay('Evening');
      setCurrentMeal('Dinner');
      setCurrentListOfMeals('Dinner');

    } else {
      setTimeOfDay('Night');
      setCurrentMeal('Supper');
      setCurrentListOfMeals('Supper');
    }
  }

  render() {
    const { timeOfDay, currentMeal } = this.props;

    return (
      <GreetingAndTimeStyles> 
        <div className="greeting">
            Good { timeOfDay }! It's time to take your { currentMeal }
        </div>
        <div className="time">
          <ReactLiveClock />
        </div>
      </GreetingAndTimeStyles>
    )
  }
}

const mapStateToProps = ({ currentMeal, timeOfDay }) => {
  return { currentMeal, timeOfDay }
}

const mapDispatchToProps = dispatch => ({
  setCurrentMeal: meal => dispatch(setCurrentMeal(meal)),
  setCurrentListOfMeals: currentList => dispatch(setCurrentListOfMeals(currentList)),
  setTimeOfDay: timeOfDay => dispatch(setTimeOfDay(timeOfDay)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GreetingAndTime);
