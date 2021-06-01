import { User } from '../../App'
import { Action } from '../helpers'

export const userActions = {
  GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',
  SIGN_UP_START: 'SIGN_UP_START',
  CHECK_USER_SESSION: 'CHECK_USER_SESSION',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
  SIGN_OUT_START: 'SIGN_OUT_START',
}

export const googleSignInStart = (): Action => ({
  type: userActions.GOOGLE_SIGN_IN_START,
})

export const emailSignInStart = (
  email: string,
  password: string,
): Action<{ email: string; password: string }> => ({
  type: userActions.EMAIL_SIGN_IN_START,
  payload: { email, password },
})

export const signInSuccess = (user: User): Action<User> => ({
  type: userActions.SIGN_IN_SUCCESS,
  payload: user,
})

export const signInFailure = (errMessage: string): Action<string> => ({
  type: userActions.SIGN_IN_FAILURE,
  payload: errMessage,
})

export const checkUserSession = (): Action => ({
  type: userActions.CHECK_USER_SESSION,
})

export const signOutStart = (): Action => ({
  type: userActions.SIGN_OUT_START,
})

export const signOutSuccess = (): Action => ({
  type: userActions.SIGN_OUT_SUCCESS,
})

export const signOutFailure = (errMessage: string): Action<string> => ({
  type: userActions.SIGN_OUT_FAILURE,
  payload: errMessage,
})

export const signUpStart = (
  email: string,
  password: string,
  displayName: string,
): Action<{ email: string; password: string; displayName: string }> => ({
  type: userActions.SIGN_UP_START,
  payload: { email, password, displayName },
})

export const signUpSuccess = (email: string, password: string): Action<firebase.default.User> => ({
  type: userActions.SIGN_UP_SUCCESS,
  payload: { email, password },
})

export const signUpFailure = (errMessage: string): Action<string> => ({
  type: userActions.SIGN_UP_FAILURE,
  payload: errMessage,
})
