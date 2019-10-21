import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { toggleViewMeal } from '../../redux/view-meals/view-meals.actions';

import MealsNav from '../meals-nav/meals-nav.component';
import ListOfMeals from '../list-of-meals/list-of-meals.component';

import { ViewMealsBtn } from './view-meals.styles';

const ViewMeals = ({ toggleViewMeal, toggleView }) => {
  return (
    <Fragment>
      <ViewMealsBtn onClick={() => toggleViewMeal()}> View Meals </ViewMealsBtn>
      { 
        toggleView ? (
          <>
            <MealsNav />
            <ListOfMeals />
          </>
        ) : null
        
      }
    </Fragment>
  )
}

const mapStateToProps = ({ toggleView }) => {
  return { toggleView }
};

const mapDispatchToProps = dispatch => ({
  toggleViewMeal: () => dispatch(toggleViewMeal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewMeals);
