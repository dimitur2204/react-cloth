import { User } from '../../App';
import { Action } from '../helpers';

export const userActions = {
	GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
	GOOGLE_SIGN_IN_SUCCESS: 'GOOGLE_SIGN_IN_SUCCESS',
	GOOGLE_SIGN_IN_FAILURE: 'GOOGLE_SIGN_IN_FAILURE',
	EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
	EMAIL_SIGN_IN_SUCCESS: 'EMAIL_SIGN_IN_SUCCESS',
	EMAIL_SIGN_IN_FAILURE: 'EMAIL_SIGN_IN_FAILURE',
};

export const googleSignInStart = (): Action => ({
	type: userActions.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user: User): Action<User> => ({
	type: userActions.GOOGLE_SIGN_IN_SUCCESS,
	payload: user,
});

export const googleSignInFailure = (errMessage: string): Action<string> => ({
	type: userActions.GOOGLE_SIGN_IN_FAILURE,
	payload: errMessage,
});

export const emailSignInStart = (
	email: string,
	password: string
): Action<{ email: string; password: string }> => ({
	type: userActions.EMAIL_SIGN_IN_START,
	payload: { email, password },
});

export const emailSignInSuccess = (user: User): Action<User> => ({
	type: userActions.EMAIL_SIGN_IN_SUCCESS,
	payload: user,
});

export const emailSignInFailure = (errMessage: string): Action<string> => ({
	type: userActions.EMAIL_SIGN_IN_FAILURE,
	payload: errMessage,
});
