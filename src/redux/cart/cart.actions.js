import { cartTypes } from './cart.types';

export const setToogleCart = () => ({
	type: cartTypes.TOGGLE_SET_HIDDEN
});

export const addItem = (item) => ({
	type: cartTypes.ADD_ITEMS,
	payload: item
});

export const removeItemCart = (item) => ({
	type: cartTypes.REMOVE_ITEM_CART,
	payload: item
});

export const clearItemFromCart = (item) => ({
	type: cartTypes.CLEAR_ITEM_FROM_CART,
	payload: item
});

export const clearCart = () => ({
	type: cartTypes.CLEAR_CART
});
