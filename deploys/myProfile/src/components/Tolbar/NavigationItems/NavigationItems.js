import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/profile" exact>Profile</NavigationItem>
        {/* <NavigationItem link="/experience">Experience</NavigationItem> */}
        <NavigationItem link="/project">Projects</NavigationItem>
        <a href={'mailto: felipealisboa@outlook.com'}>Contact</a>
    </ul>
);

export default NavigationItems;