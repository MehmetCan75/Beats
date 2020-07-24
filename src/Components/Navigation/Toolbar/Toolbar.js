import React from 'react';
import {Link} from 'react-router-dom'

import './Toolbar.css'

// import Logo from '../../Logo/Logo'

import NavigationItems from '../NavigationItems/NavigationItems'

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const toolbar = (props) => (
    <header className='Toolbar'>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className='Logo2'>
        {/* <Logo height="80%" /> */}
        <Link to="/"><div className="eye-Brasil"></div></Link>
        </div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar