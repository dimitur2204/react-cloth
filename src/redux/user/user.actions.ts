import { User } from '../../App';
import { Action } from '../helpers';

export const userActions = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
};
export const setCurrentUser = (user: User | null): Action<User> => ({
	type: userActions.SET_CURRENT_USER,
	payload: user,
});
