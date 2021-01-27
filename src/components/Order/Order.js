import React from 'react';
import classes from './Order.css';

const order = (props) => {
    return (
        <div className={classes.Order}>
            <p>Ingredients: </p>
            <p>Price: <strong>Euro</strong></p>
        </div>
    );
}

export default order;