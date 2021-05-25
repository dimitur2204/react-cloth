import { createSelector } from 'reselect';
import { AppState } from '../root-reducer';

const selectUser = (state: AppState) => state.user;

export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.currentUser
);
