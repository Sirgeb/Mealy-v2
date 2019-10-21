import React from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';

import { addMealToBreakfast } from '../../redux/breakfast/breakfast.actions';
import { addMealToLunch } from '../../redux/lunch/lunch.actions';
import { addMealToDinner } from '../../redux/dinner/dinner.actions';
import { addMealToSupper } from '../../redux/supper/supper.actions';

import { AddMealStyles } from './add-meal.styles';

class AddMeal extends React.Component {
  state = {
    mealType: "Breakfast",
    mealName: ""
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name] : value})
  }

  checkMealOnTheList = (mealType, mealToAdd) => {
    if (mealType.includes(mealToAdd)) {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { 
      addMealToBreakfast, 
      addMealToLunch, 
      addMealToDinner, 
      addMealToSupper, 
      alert,
      breakfast,
      lunch,
      dinner,
      supper
     } = this.props;

    const { mealName, mealType } = this.state;
    const meal = mealName.trim().toLowerCase();

    // check if meal is an empty string
    if (!meal.length) {
      alert.error(`Sorry, You can't add an empty value`);
      return;
    }
    
    if (mealType === "Breakfast") {

      if (!this.checkMealOnTheList(breakfast, meal)) {
        addMealToBreakfast(meal);
        alert.success(`Added ${meal} to breakfast successfully`);
      } else {
        alert.error(`Sorry, ${meal} is already on breakfast`);
      }

    } else if (mealType === "Lunch") {

      if (!this.checkMealOnTheList(lunch, meal)) {
        addMealToLunch(meal);
        alert.success(`Added ${meal} to lunch successfully`);
      } else {
        alert.error(`Sorry, ${meal} is already on lunch`);
      }

    } else if (mealType === "Dinner") {

      if (!this.checkMealOnTheList(dinner, meal)) {
        addMealToDinner(meal);
        alert.success(`Added ${meal} to dinner successfully`);
      } else {
        alert.error(`Sorry, ${meal} is already on dinner`);
      }

    } else {

      if (!this.checkMealOnTheList(supper, meal)) {
        addMealToSupper(meal);
        alert.success(`Added ${meal} to supper successfully`);
      } else {
        alert.error(`Sorry, ${meal} is already on supper`);
      }

    }

    this.setState({ mealName: "" });
  }

  render() {
    return (
      <AddMealStyles>
        <div className="hint">Add meal to your list</div>
        <div className="add-meal-form">
          <form onSubmit={this.handleSubmit}>
            <select 
              className="meal-categories" 
              onChange={this.handleChange}
              name="mealType"
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Supper">Supper</option>
            </select>
            <input 
              type="text" 
              placeholder="eg. Tea, Pizza, Indomie" 
              name="mealName" 
              value={this.state.mealName}
              onChange={this.handleChange}
            />
            <button type="submit" className="add-meal-btn">Add Meal</button>
          </form>
        </div>
      </AddMealStyles>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => ({
  addMealToBreakfast: (meal) => dispatch(addMealToBreakfast(meal)),
  addMealToLunch: (meal) => dispatch(addMealToLunch(meal)),
  addMealToDinner: (meal) => dispatch(addMealToDinner(meal)),
  addMealToSupper: (meal) => dispatch(addMealToSupper(meal))
});

export default connect(mapStateToProps, mapDispatchToProps)(withAlert()(AddMeal));
