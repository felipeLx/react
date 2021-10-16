import React from 'react';

import classes from './Navbar.module.css';
import Picture from '../Picture/Picture';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

const Navbar = ( props ) => (
    <header className={classes.Navbar}>
         <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
        </div>
        <nav className={classes.DesktopOnly}>   
            <NavigationItems />
        </nav>
    </header>
);

export default Navbar;