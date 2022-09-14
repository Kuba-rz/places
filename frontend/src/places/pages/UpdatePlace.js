import React from 'react'
import { useParams } from 'react-router-dom'
import { DUMMY_PLACES } from './UserPlaces'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'

import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'


const UpdatePlace = () => {
    const placeId = useParams().placeId
    const place = DUMMY_PLACES.find(item => item.id == placeId)

    if (!place) {
        return <h2>Place not found!</h2>
    }

    return (
        <form>
            <Input id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title'
                onInput={() => { }}
                value={place.title}
                valid={true} />
            <Input id='description'
                element='textarea'
                label='Description'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Please enter a valid description (min. 5 characters)'
                onInput={() => { }}
                value={place.description}
                valid={true} />

            <Button type='submit' disabled={true}>UPDATE PLACE</Button>

        </form >
    )
}

export default UpdatePlace