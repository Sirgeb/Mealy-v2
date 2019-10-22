import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { unsetSuggestedMeal } from '../../redux/suggested-meal/suggested-meal.actions';

const SuggestedMealModal = ({ suggestedMeal, unsetSuggestedMeal }) => (

    <Modal
      isOpen={!!suggestedMeal}
      contentLabel="suggested Meal"
      ariaHideApp={false}
      closeTimeoutMS={1000}
      className="modal"
    >
      <h3 className="modal__title"> I suggest </h3>
      <p className="modal__msg"> { suggestedMeal } </p>
      <button className="modal__btn" onClick={() => unsetSuggestedMeal()}> Okay </button>
    </Modal>
);

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  unsetSuggestedMeal: () => dispatch(unsetSuggestedMeal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedMealModal);