import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { setToogleCart } from '../../redux/cart/cart.actions';

import { connect } from 'react-redux';
import './cart-icon.styles.scss';

const cartIcon = ({ setToogleCart }) => (
	<div className="cart-icon" onClick={setToogleCart}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
);

export const mapDispatchToProps = (dispatch) => ({
	setToogleCart: () => dispatch(setToogleCart())
});
export default connect(null, mapDispatchToProps)(cartIcon);
