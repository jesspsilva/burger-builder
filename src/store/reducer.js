import * as actionTypes from './actions.js';

const initialState = {
    ingredients: null,
    totalPrice: 4
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return
        case actionTypes.REMOVE_INGREDIENT:
            return
    }
    return state;
}

export default reducer;