import { cartTypes } from './cart.types';

export const setToogleCart = () => ({
	type: cartTypes.TOGGLE_SET_HIDDEN
});

export const addItem = (item) => ({
	type: cartTypes.ADD_ITEMS,
	payload: item
});
