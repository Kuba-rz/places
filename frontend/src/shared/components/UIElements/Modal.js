import React from 'react'

import './Modal.css'
import ReactDom from 'react-dom'

const ModalOverview = () => {
    return ReactDom.createPortal(, document.getElementById('modal-hook'))
}

const Modal = () => {
    return (
        <div>Modal</div>
    )
}

export default Modal