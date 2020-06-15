import { takeLatest, put, all, call } from 'redux-saga/effects';

import { userTypes } from '../user/user.types';

import { clearCart } from './cart.actions';

export function* deleteAllCart() {
	yield put(clearCart());
}

export function* onSignOutSuccess() {
	yield takeLatest(userTypes.SIGN_OUT_SUCCESS, deleteAllCart);
}

export function* cartSagas() {
	yield call(onSignOutSuccess);
}
