import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    console.log(props),
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">My Orders</NavigationItem>
        {!props.isAuthenticated ? 
        <NavigationItem link="/login">Login</NavigationItem> : 
        <NavigationItem link="/logout">Logout</NavigationItem>}
        
    </ul>
);

export default navigationItems;