import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = type => {
        // Update ingredients number
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        // Get the old state
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;

        // Update the total price
        const priceAddition = INGREDIENT_PRICES[type];
        // Get the old totalPrice value
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        // Update the state with the new values
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientsHandler = type => {
        // Update ingredients number
        const oldCount = this.state.ingredients[type];

        // Return if there's no ingredient
        if (oldCount <= 0) {
            return;
        }

        const updatedCounted = oldCount - 1;
        // Get the old state
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;

        // Update the total price
        const priceSubtraction = INGREDIENT_PRICES[type];
        // Get the old totalPrice value
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;

        // Update the state with the new values
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    render(){
        // Disable less button if ingredient is <= 0
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientsHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;