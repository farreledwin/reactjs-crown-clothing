import React, { useEffect } from 'react';
import logo from './logo.svg';
import './	css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.components';
import SignInSignUpPage from './pages/signin-signup-pages/signin-signup.component';
import CheckOutPage from './pages/checkout/checkout.components';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser, checkUserSession } from './redux/user/user.actions';
import { selectShopAll } from './redux/shop/shop.selector';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

const App = ({ checkUserSession }) => {
	useEffect(
		() => {
			checkUserSession();
		},
		[ checkUserSession ]
	);
	// 	console.log(this.props);
	// const { currentUser, setCurrentUser, collectionArray } = this.props;
	// 	this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
	// 		if (userAuth) {
	// 			const userRef = await createUserProfileDocument(userAuth);
	// 			userRef.onSnapshot((snapShot) => {
	// 				setCurrentUser({
	// 					id: snapShot.id,
	// 					...snapShot.data()
	// 				});
	// 			});
	// 		}
	// 		setCurrentUser(userAuth);
	// 		// addCollectionAndDocuments('collection', collectionArray.map(({ title, items }) => ({ title, items })));
	// 	});

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckOutPage} />
				<Route exact path="/login" component={SignInSignUpPage} />
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	collectionArray: selectShopAll
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession())
});
// const mapDispatchToProps = (dispatch) => ({
// 	setCurrentUser: (user) => dispatch(setCurrentUser(user))
// });

export default connect(mapStateToProps, mapDispatchToProps)(App);
