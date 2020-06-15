import { userTypes } from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			};
		case userTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null
			};
		case userTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null
			};
		case userTypes.SIGN_OUT_FAILURE:
		case userTypes.SIGN_IN_FAILURE:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
