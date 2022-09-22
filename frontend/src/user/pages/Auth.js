import React from 'react'
import { useForm } from '../../shared/hooks/form-hook'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from '../../shared/util/validators'
import Card from '../../shared/components/UIElements/Card'

import './Auth.css'

const Auth = () => {

    const authSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }

    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)
    return (
        <Card className='authentication'>
            <form>
                <Input
                    id='email'
                    errorText={'Please enter a valid email'}
                    element='input'
                    type='email'
                    label='E-mail'
                    validators={[VALIDATOR_EMAIL()]}
                    getTitle={inputHandler} />
                <Input
                    id='password'
                    errorText={'Please enter a valid password with at least 6 characters'}
                    element='input'
                    type='password'
                    label='Password'
                    validators={[VALIDATOR_MINLENGTH(6)]}
                    getTitle={inputHandler} />
                <Button disabled={!formState.isValid} type='submit'>Login</Button>
            </form>
        </Card>
    )
}

export default Auth