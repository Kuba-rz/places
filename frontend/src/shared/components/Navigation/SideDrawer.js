import React from 'react'

import ReactDom from 'react-dom'

import './SideDrawer.css'

const SideDrawer = (props) => {
    const drawer = <aside className='side-drawer'>{props.children}</aside>

    return ReactDom.createPortal(drawer, document.getElementById('header-drawer'))
}

export default SideDrawer