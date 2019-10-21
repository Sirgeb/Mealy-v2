import React from 'react';
import { connect } from 'react-redux';

import { setCurrentListOfMeals } from '../../redux/current-list-of-meals/current-list-of-meals.actions';

import { MealsNavStyles } from './meals-nav.styles';

const MealsNav = ({ currentList, setCurrentListOfMeals }) => {
  
  return (
    <MealsNavStyles currentList={currentList}>
      <button 
        className="breakfast" 
        onClick={() => setCurrentListOfMeals("Breakfast")}
      >Breakfast</button>

      <button 
        className="lunch" 
        onClick={() => setCurrentListOfMeals("Lunch")}
      >Lunch</button>

      <button 
        className="dinner" 
        onClick={() => setCurrentListOfMeals("Dinner")}
      >Dinner</button>

      <button 
        className="supper" 
        onClick={() => setCurrentListOfMeals("Supper")}
      >Supper</button>
    </MealsNavStyles>
  )
}

const mapStateToProps = ({ currentList }) => {
  return { currentList };
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentListOfMeals: (currentList) => dispatch(setCurrentListOfMeals(currentList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealsNav);
