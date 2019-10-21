import React from 'react';

import GreetingAndTime from '../greeting-and-time/greeting-and-time.component';
import TellMeWhatToEat from '../tell-me-what-to-eat/tell-me-what-to-eat.component';
import AddMeal from '../add-meal/add-meal.component';

import ViewMeals from '../view-meals/view-meals.component';

import { WrapperStyles} from  './wrapper.styles.js';

const Wrapper = props => {

  return (
    <div className="container">
      <WrapperStyles>
        <GreetingAndTime />
        <TellMeWhatToEat />
        <AddMeal />
        <ViewMeals />
      </WrapperStyles>
    </div>
  )
}

export default Wrapper;
