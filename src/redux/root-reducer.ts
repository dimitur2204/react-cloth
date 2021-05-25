import { combineReducers } from 'redux';
import userReducer, { UserState } from './user/user.reducer';

export type AppState = {
	user: UserState;
};

export default combineReducers({
	user: userReducer,
});
