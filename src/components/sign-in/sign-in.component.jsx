import React, { useState } from 'react';

import FormInput from '../form-input/form-input.components';

import CustomButton from './../custom-button/custom-button.components';

import { auth, signItWithGoogle } from '../../../src/firebase/firebase.utils';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { connect } from 'react-redux';

import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [ userCredentials, setUserCredentials ] = useState({ email: '', password: '' });
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		email: '',
	// 		password: ''
	// 	};
	// }
	const { email, password } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();

		emailSignInStart(email, password);

		// try {
		// 	await auth.signInWithEmailAndPassword(email, password);

		// 	this.setState({ email: '', password: '' });
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	const handleChange = (event) => {
		console.log('fff');
		const { value, name } = event.target;

		({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>i already have an account</h2>
			<span>sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput type="email" name="email" onChange={handleChange} value={email} label="email" required />
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit"> Sign In </CustomButton>
					<CustomButton type="submit" onClick={googleSignInStart} isGoogleSignIn>
						{' '}
						Sign In With Google{' '}
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});
export default connect(null, mapDispatchToProps)(SignIn);
