import React from 'react'
import { useParams } from 'react-router-dom'
import { DUMMY_PLACES } from './UserPlaces'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'

import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'

import './PlaceForm.css'


const UpdatePlace = () => {
    const placeId = useParams().placeId
    const place = DUMMY_PLACES.find(item => item.id == placeId)

    const [formState, inputHandler] = useForm({
        title: {
            value: place.title,
            isValid: true
        }
        ,
        description: {
            value: place.description,
            isValid: true
        }
    }, true)
    if (!place) {
        return <h2>Place not found!</h2>
    }

    return (
        <form className='place-form'>
            <Input id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title'
                getTitle={inputHandler}
                value={formState.inputs.title.value}
                valid={formState.inputs.title.isValid} />
            <Input id='description'
                element='textarea'
                label='Description'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Please enter a valid description (min. 5 characters)'
                getTitle={inputHandler}
                value={formState.inputs.description.value}
                valid={formState.inputs.description.isValid} />

            <Button type='submit' disabled={!formState.isValid}>UPDATE PLACE</Button>

        </form >
    )
}

export default UpdatePlace