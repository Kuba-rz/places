import React from 'react';

import Input from '../../shared/components/FormElements/Input'
import './NewPlace.css'

const NewPlace = () => {
  return (
    <form className='place-form'>
      <Input errorText={'oh no i hope i dont fall'} element='input' type='text' label='Title' />
    </form>)
};

export default NewPlace;