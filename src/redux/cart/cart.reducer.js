import CartActionTypes from './cart.action.types';

const INITIAL_STATE = {
    cart : []
}

const cartReducer = ( state=INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.SET_CART:
            return{
                ...state,
                cart : action.payload
            }
        case CartActionTypes.UPDATE_CART_ITEM:
            return{
                ...state,
                cart : [...state.cart,action.payload]
            }
        default:
            return state
    }
}