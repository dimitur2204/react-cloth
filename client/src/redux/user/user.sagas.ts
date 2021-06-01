import { put, takeLatest, all, call } from '@redux-saga/core/effects'
import { SignInCredentials } from '../../components/auth/sign-in/sign-in.component'
import {
  auth,
  createUserProfileDoc,
  getCurrentUser,
  googleProvider,
} from '../../firebase/firebase.utils'
import { Action } from '../helpers'
import {
  emailSignInStart,
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
  userActions,
} from './user.actions'

export function* getSnapshotFromUserAuth(
  userAuth: firebase.default.User,
): Generator<any, any, any> {
  try {
    const userRef = yield call(createUserProfileDoc, userAuth)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* signInWithGoogle(): Generator<any, any, any> {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActions.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmailAndPassword({
  payload: { email, password },
}: Action<SignInCredentials>): Generator<any, any, any> {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    console.error(error)
    yield put(signInFailure(error.message))
  }
}

export function* onSignInWithEmailAndPassword() {
  yield takeLatest(userActions.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* signUpStartSaga({
  payload: { email, password },
}: Action<{ email: string; password: string; displayName: string }>): Generator<any, any, any> {
  try {
    yield auth.createUserWithEmailAndPassword(email, password)
    yield put(signUpSuccess(email, password))
  } catch (error) {
    yield put(signUpFailure(error.message))
  }
}

export function* onSignUpStart() {
  yield takeLatest(userActions.SIGN_UP_START, signUpStartSaga)
}

export function* signUpSuccessSaga({
  payload: { email, password },
}: Action<{ email: string; password: string }>) {
  yield put(emailSignInStart(email, password))
}

export function* onSignUpSuccess() {
  yield takeLatest(userActions.SIGN_UP_SUCCESS, signUpSuccessSaga)
}

export function* isUserAuthenticated(): Generator<any, any, any> {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getSnapshotFromUserAuth(userAuth)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userActions.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut(): Generator<any, any, any> {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error.message))
  }
}

export function* onSignOutStart() {
  yield takeLatest(userActions.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onSignInWithEmailAndPassword),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ])
}
