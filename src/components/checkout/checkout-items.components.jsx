import React from 'react';

import { connect } from 'react-redux';

import { removeItemCart, addItem, clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-items.styles.scss';

const CheckOutItem = ({ cartItems, clearItem, addItem, clearItemFromCart }) => {
	const { imageUrl, name, quantity, price } = cartItems;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => clearItemFromCart(cartItems)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItems)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<span className="remove-button" onClick={() => clearItem(cartItems)}>
				&#10005;
			</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(removeItemCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	clearItemFromCart: (item) => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
