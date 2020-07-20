import {CartActionTypes} from './cart.action.types';

export const setCart = cart => ({
    type : CartActionTypes.SET_CART,
    payload : cart
})

export const updateCartItem = item => ({
    type : CartActionTypes.UPDATE_CART_ITEM,
    payload : item
})