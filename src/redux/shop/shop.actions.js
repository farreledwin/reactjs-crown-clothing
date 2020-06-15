import { shopTypes } from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const updateCollection = (collection) => ({
	type: shopTypes.UPDATE_COLLECTION,
	payload: collection
});

export const fetchCollectionsStart = () => ({
	type: shopTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = (collection) => ({
	type: shopTypes.FETCH_COLLECTION_SUCCESS,
	payload: collection
});

export const fetchCollectionError = (error) => ({
	type: shopTypes.FETCH_COLLECTION_FAILURE,
	payload: error
});

// export const fetchCollectionStartAsync = () => {
// 	return (dispatch) => {
// 		const collectionRef = firestore.collection('collection');
// 		dispatch(fetchCollectionsStart());

// 		collectionRef
// 			.get()
// 			.then((snapshot) => {
// 				const collectionMap = convertCollectionsSnapshotToMap(snapshot);
// 				dispatch(fetchCollectionSuccess(collectionMap));
// 			})
// 			.catch((error) => dispatch(fetchCollectionError(error.message)));
// 	};
// };
