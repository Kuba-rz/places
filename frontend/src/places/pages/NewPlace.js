import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input'
import './PlaceForm.css'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'




const NewPlace = () => {
  const [formState, inputHandler] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    }
  }, false)

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(formState.inputs) //send this to backend later
  }

  return (
    <form onSubmit={submitHandler} className='place-form'>
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
      <Input
        id='address'
        element='input'
        label='Address'
        validators={[VALIDATOR_REQUIRE()]}
        errorText={'Please enter a valid address'}
        getTitle={inputHandler} />
      <Button type='submit' disabled={!formState.isValid}>Add Place</Button>
    </form>)
};

export default NewPlace;