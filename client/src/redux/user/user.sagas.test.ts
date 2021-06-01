import { takeLatest, put, call } from 'redux-saga/effects'

import { userActions } from './user.actions'

import { signInFailure, signOutSuccess, signOutFailure } from './user.actions'

import { auth, createUserProfileDoc, getCurrentUser } from '../../firebase/firebase.utils'

import {
  getSnapshotFromUserAuth,
  signInWithGoogle,
  isUserAuthenticated,
  signOut,
  signUpStartSaga,
  onGoogleSignInStart,
  onSignInWithEmailAndPassword,
  onCheckUserSession,
  onSignOutStart,
  onSignUpStart,
  onSignUpSuccess,
  signUpSuccessSaga,
  signInWithEmailAndPassword,
} from './user.sagas'

describe('on signup success saga', () => {
  it('should trigger on SIGN_UP_SUCCESS', () => {
    const generator = onSignUpSuccess()
    expect(generator.next().value).toEqual(
      takeLatest(userActions.SIGN_UP_SUCCESS, signUpSuccessSaga),
    )
  })
})

describe('on signup start saga', () => {
  it('should trigger on SIGN_UP_START', () => {
    const generator = onSignUpStart()
    expect(generator.next().value).toEqual(takeLatest(userActions.SIGN_UP_START, signUpStartSaga))
  })
})

describe('on signout start saga', () => {
  it('should trigger on SIGN_UP_START', () => {
    const generator = onSignOutStart()
    expect(generator.next().value).toEqual(takeLatest(userActions.SIGN_OUT_START, signOut))
  })
})

describe('on check user session saga', () => {
  it('should trigger on CHECK_USER_SESSION', () => {
    const generator = onCheckUserSession()
    expect(generator.next().value).toEqual(
      takeLatest(userActions.CHECK_USER_SESSION, isUserAuthenticated),
    )
  })
})

describe('on email sign in start saga', () => {
  it('should trigger on EMAIL_SIGN_IN_START', () => {
    const generator = onSignInWithEmailAndPassword()
    expect(generator.next().value).toEqual(
      takeLatest(userActions.EMAIL_SIGN_IN_START, signInWithEmailAndPassword),
    )
  })
})

describe('on google sign in start saga', () => {
  it('should trigger on GOOGLE_SIGN_IN_START', () => {
    const generator = onGoogleSignInStart()
    expect(generator.next().value).toEqual(
      takeLatest(userActions.GOOGLE_SIGN_IN_START, signInWithGoogle),
    )
  })
})

describe('on sign up saga', () => {
  const mockEmail = 'cindy@gmail.com'
  const mockPassword = 'test123'
  const mockDisplayName = 'cindy'

  const mockAction = {
    type: '',
    payload: {
      email: mockEmail,
      password: mockPassword,
      displayName: mockDisplayName,
    },
  }

  const generator = signUpStartSaga(mockAction)

  it('should call auth.createUserWithEmailAndPassword', () => {
    const createUserWithEmailAndPassword = jest.spyOn(auth, 'createUserWithEmailAndPassword')
    generator.next()
    expect(createUserWithEmailAndPassword).toHaveBeenCalled()
  })
})

describe('on sign out saga', () => {
  const generator = signOut()

  it('should call auth.signOut', () => {
    const expectSignOut = jest.spyOn(auth, 'signOut')
    generator.next()
    expect(expectSignOut).toHaveBeenCalled()
  })

  it('should call signOutSuccess', () => {
    expect(generator.next().value).toEqual(put(signOutSuccess()))
  })

  it('should call signOutFailure on error', () => {
    const newGenerator = signOut()
    newGenerator.next()
    expect(newGenerator.throw({ message: 'error' }).value).toEqual(put(signOutFailure('error')))
  })
})

describe('is user authenticated saga', () => {
  const generator = isUserAuthenticated()

  it('should call getCurrentUser', () => {
    expect(generator.next().value).toEqual(getCurrentUser())
  })

  it('should call getSnapshotFromUserAuth if userAuth exists', () => {
    const mockUserAuth = { uid: '123da' }
    expect(generator.next(mockUserAuth).value).toEqual(
      getSnapshotFromUserAuth(mockUserAuth as firebase.default.User),
    )
  })

  it('should call signInFailure on error', () => {
    const newGenerator = isUserAuthenticated()
    newGenerator.next()
    expect(newGenerator.throw('error').value).toEqual(put(signInFailure('error')))
  })
})

describe('get snapshot from userAuth', () => {
  const mockUserAuth = {} as firebase.default.User
  const generator = getSnapshotFromUserAuth(mockUserAuth)

  expect(generator.next().value).toEqual(call(createUserProfileDoc, mockUserAuth))
})
