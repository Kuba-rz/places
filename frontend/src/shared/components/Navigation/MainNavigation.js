import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader'
import SideDrawer from './SideDrawer'
import NavLinks from './NavLinks'
import './MainNavigation.css'

const MainNavigation = () => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)
    return (
        <>
        //Either open the side drawer or the main navigation at the top depending on the state
            {drawerIsOpen ? <SideDrawer>
                <nav className='main-navigation__drawer-nav'>
                    <NavLinks />
                </nav>
            </SideDrawer> :
                <MainHeader>
                    <button className='main-navigation__menu-btn'>
                        <span />
                        <span />
                        <span />
                    </button>
                    <h1 className='main-navigation__title'>
                        <Link to='/'>Places</Link>
                    </h1>
                    <nav className='main-navigation__header-nav'>
                        <NavLinks />
                    </nav>
                </MainHeader>}

        </>

    )
}

export default MainNavigation