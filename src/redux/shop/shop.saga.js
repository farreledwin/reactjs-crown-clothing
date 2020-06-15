import { takeEvery, call, put, all } from 'redux-saga/effects';

import { shopTypes } from './shop.types';

import { fetchCollectionSuccess, fetchCollectionError } from './shop.actions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export function* fetchCollectionAsync() {
	try {
		console.log('tessssssssssssss');
		const collectionRef = yield firestore.collection('collection');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
		yield put(fetchCollectionSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionError(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeEvery(shopTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}

export function* shopSagas() {
	yield call(fetchCollectionsStart);
}
