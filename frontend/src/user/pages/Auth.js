import React, { useState } from 'react'
import { useForm } from '../../shared/hooks/form-hook'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from '../../shared/util/validators'
import Card from '../../shared/components/UIElements/Card'

import './Auth.css'

const Auth = () => {

    const [isLoginMode, setIsLoginMode] = useState(true)

    const authSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid)
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false)
        }
        setIsLoginMode(prevMode => !prevMode)
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
            <form onSubmit={authSubmitHandler}>
                {!isLoginMode && <Input
                    element='input'
                    id='name'
                    type='text'
                    label='Name'
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText='Please enter a name'
                    getTitle={inputHandler} />}
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
                <Button disabled={!formState.isValid} type='submit'>{isLoginMode ? 'Login' : 'Signup'}</Button>
            </form>
            <Button inverse onClick={switchModeHandler}>Switch to {isLoginMode ? 'Signup' : 'Login'}</Button>
        </Card>
    )
}

export default Auth