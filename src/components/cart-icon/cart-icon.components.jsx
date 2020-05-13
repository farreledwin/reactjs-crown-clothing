import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { setToogleCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';

const cartIcon = ({ setToogleCart, countItems }) => (
	<div className="cart-icon" onClick={setToogleCart}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{countItems}</span>
	</div>
);

export const mapStateToProps = (state) => ({
	countItems: selectCartItemsCount(state)
});

export const mapDispatchToProps = (dispatch) => ({
	setToogleCart: () => dispatch(setToogleCart())
});
export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
