import { takeLatest, put, all, call } from 'redux-saga/effects';

import { userTypes } from './user.types';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { emailSignInSuccess, emailSignInFailure, signOutSuccess, signOutFailure } from './user.actions';

export function* getSnapshotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth);
		const userSnapshot = yield userRef.get();
		yield put(emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
		console.log(userRef);
	} catch (error) {
		yield put(emailSignInFailure(error));
	}
}

export function* signInWithGoogle() {
	try {
		console.log('sign in');
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(emailSignInFailure(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		console.log('sign ins');
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(emailSignInFailure(error));
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) {
			console.log('fail');
			return;
		}
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(emailSignInFailure(error));
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure(error));
	}
}

export function* onSignOutStart() {
	yield takeLatest(userTypes.SIGN_OUT_START, signOut);
}

export function* onCheckUserSession() {
	yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
	yield all([ call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignOutStart) ]);
}
