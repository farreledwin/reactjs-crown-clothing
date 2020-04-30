import React from 'react';

import './signin-signup.styles.scss';

import SignInComponent from '../../components/sign-in/sign-in.component';
import SignUpComponent from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
	<div className="sign-in-and-sign-up">
		<SignInComponent />
		<SignUpComponent />
	</div>
);

export default SignInAndSignUpPage;
