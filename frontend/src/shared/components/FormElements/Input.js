import React, { useReducer, useEffect } from 'react'


import { validate } from '../../util/validators'
import './Input.css'

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            }
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true
            }
        }
        default:
            return state
    }
}


const Input = (props) => {

    const [inputState, dispatch] = useReducer(inputReducer, { value: props.value || '', isValid: props.valid || false, isTouched: false })

    const { id, getTitle } = props
    const { value, isValid } = inputState

    useEffect(() => {
        getTitle(id, value, isValid)
    }, [id, getTitle, value, isValid])

    const changeHandler = event => {
        dispatch({ type: 'CHANGE', val: event.target.value, validators: props.validators })
    }

    const touchHandler = () => {
        dispatch({ type: 'TOUCH' })
    }

    const inputElement = props.element === 'input' ? <input id={props.id}
        type={props.type}
        placeholder={props.placehodler}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler} /> :
        <textarea id={props.id}
            rows={props.rows || 3}
            value={inputState.value}
            onChange={changeHandler}
            onBlur={touchHandler} />

    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}:</label>
            {inputElement}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    )
}

export default Input