import { put, takeLatest, all, call } from '@redux-saga/core/effects';
import {
	auth,
	createUserProfileDoc,
	googleProvider,
} from '../../firebase/firebase.utils';
import {
	googleSignInFailure,
	googleSignInSuccess,
	userActions,
} from './user.actions';

export function* signInWithGoogle(): Generator<any, any, any> {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDoc, user);
		const userSnapshot = yield userRef.get();
		yield put(
			googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (error) {
		yield put(googleSignInFailure(error.message));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(userActions.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
	yield all([call(onGoogleSignInStart)]);
}
