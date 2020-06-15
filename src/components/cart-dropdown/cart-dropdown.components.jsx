import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.components';

import CartItem from '../cart-item/cart-item.components';

import { withRouter } from 'react-router-dom';

import { selectItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';
import { setToogleCart } from '../../redux/cart/cart.actions';

const Cart = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((cart) => <CartItem key={cart.id} item={cart} />)
			) : (
				<span className="empty-message">your cart is empty</span>
			)}
		</div>
		<CustomButton
			onClick={() => {
				history.push('/checkout');
				dispatch(setToogleCart());
			}}
		>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectItems(state)
});

export default withRouter(connect(mapStateToProps)(Cart));
