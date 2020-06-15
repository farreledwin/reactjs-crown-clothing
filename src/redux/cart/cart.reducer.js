import { cartTypes } from './cart.types';
import { addItemToCart, removeItemCart } from './cart.utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartTypes.TOGGLE_SET_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case cartTypes.ADD_ITEMS:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		case cartTypes.REMOVE_ITEM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter((cartitem) => cartitem.id !== action.payload.id)
			};
		case cartTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: removeItemCart(state.cartItems, action.payload)
			};
		case cartTypes.CLEAR_CART:
			return {
				...state,
				cartItems: []
			};
		default:
			return state;
	}
};

export default cartReducer;
