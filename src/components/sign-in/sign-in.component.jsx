import React from 'react';

import FormInput from '../form-input/form-input.components';

import CustomButton from './../custom-button/custom-button.components';

import { auth, signItWithGoogle } from '../../../src/firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>i already have an account</h2>
				<span>sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						onChange={this.handleChange}
						value={this.state.email}
						label="email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						label="password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit"> Sign In </CustomButton>
						<CustomButton type="submit" onClick={signItWithGoogle} isGoogleSignIn>
							{' '}
							Sign In With Google{' '}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
export default SignIn;
