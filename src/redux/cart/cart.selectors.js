import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector([ selectCart ], (cart) => cart.hidden);
export const selectItems = createSelector([ selectCart ], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([ selectItems ], (cartItems) =>
	cartItems.reduce((accumulateScore, cartItem) => accumulateScore + cartItem.quantity, 0)
);
