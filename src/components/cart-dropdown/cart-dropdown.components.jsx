import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.components';

import CartItem from '../cart-item/cart-item.components';

import { selectItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const Cart = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">{cartItems.map((cart) => <CartItem key={cart.id} item={cart} />)}</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectItems(state)
});

export default connect(mapStateToProps)(Cart);
