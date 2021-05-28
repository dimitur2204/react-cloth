import { User } from '../../App';
import { Action } from '../helpers';
import { userActions } from './user.actions';

export type UserState = {
	currentUser: User | null;
	errorMessage: string;
};

const INITIAL_STATE: UserState = {
	currentUser: null,
	errorMessage: '',
};

const userReducer = (state = INITIAL_STATE, action: Action): UserState => {
	switch (action.type) {
		case userActions.GOOGLE_SIGN_IN_SUCCESS:
		case userActions.EMAIL_SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				errorMessage: '',
			};
		case userActions.GOOGLE_SIGN_IN_FAILURE:
		case userActions.EMAIL_SIGN_IN_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
