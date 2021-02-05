import React from 'react';
import classes from './Order.css';

const order = (props) => {

    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {name: ingredientName, amount: props.ingredients[ingredientName]}
        );
    }

    const ingredientOutput = ingredients.map(ing => {
        return <span 
        key={ing.name} 
        className={classes.Ingredients}
        >
            {ing.name} ({ing.amount})
        </span>
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>Euro {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
}

export default order;