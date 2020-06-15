import React from 'react';

import './checkout.styles.scss';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckOutItem from '../../components/checkout/checkout-items.components';

const CheckOutPage = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map((cartitem) => <CheckOutItem key={cartitem.id} cartItems={cartitem} />)}
		<div className="total">
			<span>TOTAL : {total}</span>
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({ cartItems: selectItems, total: selectCartTotal });

export default connect(mapStateToProps)(CheckOutPage);
