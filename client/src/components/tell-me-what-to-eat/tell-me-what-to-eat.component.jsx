import React from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';

import { setSuggestedMeal } from '../../redux/suggested-meal/suggested-meal.actions';

import mealIcon from '../../assets/meal.png';

import { TellMeWhatToEatStyles } from './tell-me-what-to-eat.styles';

class TellMeWhatToEat extends React.Component {

  suggestAMeal = () => {
    const { 
      alert,
      timeOfDay, 
      breakfast, 
      lunch, 
      dinner, 
      supper, 
      currentMeal,
      setSuggestedMeal, 
      suggestedMeal } = this.props;
    
      if (timeOfDay === 'Morning' && breakfast.length) {
        const randomNum = Math.floor(Math.random() * breakfast.length);
        const mealSuggested = breakfast[randomNum];
        setSuggestedMeal(mealSuggested);

      } else if (timeOfDay === 'Afternoon' && lunch.length) {
        const randomNum = Math.floor(Math.random() * lunch.length);
        const mealSuggested = lunch[randomNum];
        setSuggestedMeal(mealSuggested);

      } else if (timeOfDay === 'Evening' && dinner.length) {
        const randomNum = Math.floor(Math.random() * dinner.length);
        const mealSuggested = dinner[randomNum];
        setSuggestedMeal(mealSuggested);

      } else if (timeOfDay === 'Night' && supper.length) {
        const randomNum = Math.floor(Math.random() * supper.length);
        const mealSuggested = supper[randomNum];
        setSuggestedMeal(mealSuggested);
        
      } else {
        if (!suggestedMeal.length) {
          alert.show(`Sorry, You need to add some meal to your ${currentMeal} list`);
        }
      }
  
    }

  render() {
    return (
      <TellMeWhatToEatStyles>
        <button onClick={() => { 
          this.suggestAMeal();
          }}>
          <img src={mealIcon} alt="meal-icon" /> 
          Tell Me What To Eat
        </button>
      </TellMeWhatToEatStyles>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  setSuggestedMeal: (meal) => dispatch(setSuggestedMeal(meal))
});

export default connect(mapStateToProps, mapDispatchToProps)(withAlert()(TellMeWhatToEat));
