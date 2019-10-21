import React from 'react';
import { connect } from 'react-redux';

import { removeMealFromBreakfast } from '../../redux/breakfast/breakfast.actions';
import { removeMealFromLunch } from '../../redux/lunch/lunch.actions';
import { removeMealFromDinner } from '../../redux/dinner/dinner.actions';
import { removeMealFromSupper } from '../../redux/supper/supper.actions';

import { ListOfMealsStyles } from './list-of-meals.styles.js';

const Meal = ({ 
    currentList, 
    breakfast, 
    lunch, 
    dinner, 
    supper, 
    removeMealFromBreakfast,
    removeMealFromLunch,
    removeMealFromDinner,
    removeMealFromSupper, 
  }) => {
  let contents;

  if (currentList === "Breakfast" && breakfast.length) {
    contents = breakfast.map((meal, index) => (
      <div className="meal" key={index}>
          <span> { meal } </span>
          <button onClick={() => {
            removeMealFromBreakfast(meal)
          }}>remove</button>
      </div>
    ));

  } else if (currentList === "Lunch" && lunch.length) {
    contents = lunch.map((meal, index) => (
      <div className="meal" key={index}>
          <span> { meal } </span>
          <button onClick={() => removeMealFromLunch(meal)}>remove</button>
      </div>
    ));

  } else if (currentList === "Dinner" && dinner.length) {
    contents = dinner.map((meal, index) => ( 
      <div className="meal" key={index}>
          <span> { meal } </span>
          <button onClick={() => removeMealFromDinner(meal)}>remove</button>
      </div>
    ));

  } else if (currentList === "Supper" && supper.length) {
    contents = supper.map((meal, index) => (
      <div className="meal" key={index}>
          <span> { meal } </span>
          <button onClick={() => removeMealFromSupper(meal)}>remove</button>
      </div>
    ));

  } else {
    contents = (
      <div className="empty-list">
        There is no meal on this list.
      </div>
    )
  }

  return (
    <ListOfMealsStyles>
      { contents }
    </ListOfMealsStyles>
  )
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => ({
  removeMealFromBreakfast: (meal) => dispatch(removeMealFromBreakfast(meal)),
  removeMealFromLunch: (meal) => dispatch(removeMealFromLunch(meal)),
  removeMealFromSupper: (meal) => dispatch(removeMealFromSupper(meal)),
  removeMealFromDinner: (meal) => dispatch(removeMealFromDinner(meal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Meal);
