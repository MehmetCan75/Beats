import React from 'react';

import './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className='NavigationItems'>
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/beats">Beats</NavigationItem>
    <NavigationItem link="/piano">Piano</NavigationItem>
    <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
)

export default navigationItems;