import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input'
import './NewPlace.css'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'


const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE': {
      let formIsValid = true
      for (const input in state.inputs) {
        if (input === action.inputId) {
          formIsValid = formIsValid && action.isValid
        } else {
          formIsValid = formIsValid && state.inputs[input].isValid
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      }
    }
  }
}


const NewPlace = () => {

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  })

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);

  return (
    <form className='place-form'>
      <Input
        id='title'
        errorText={'Please enter a valid title'}
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        getTitle={inputHandler} />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText={'Please enter a description which has a length of more than 5'}
        getTitle={inputHandler} />
      <Button type='submit' disabled={!formState.isValid}>Add Place</Button>
    </form>)
};

export default NewPlace;