import { User } from '../../App';
import { Action } from '../helpers';
import { userActions } from './user.actions';

export type UserState = {
	currentUser: User | null;
};

const INITIAL_STATE: UserState = {
	currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case userActions.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
