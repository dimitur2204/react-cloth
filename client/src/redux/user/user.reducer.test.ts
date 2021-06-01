import { userActions } from './user.actions'
import userReducer, { UserState } from './user.reducer'

const initialState: UserState = {
  currentUser: null,
  errorMessage: '',
}

describe('userReducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, { type: '' })).toEqual(initialState)
  })

  it('should set currentUser to payload on signInSuccess action', () => {
    const mockUser = { id: 1, displayName: 'Yihua' }

    expect(
      userReducer(initialState, {
        type: userActions.SIGN_IN_SUCCESS,
        payload: mockUser,
      }).currentUser,
    ).toEqual(mockUser)
  })

  it('should set currentUser to null on signOutSuccess action', () => {
    expect(
      userReducer(initialState, {
        type: userActions.SIGN_OUT_SUCCESS,
      }).currentUser,
    ).toBe(null)
  })

  it('should set errorMessage to payload on signInFailure, signUpFailure, signOutFailure action', () => {
    const mockError = {
      message: 'errored',
      code: 404,
    }

    expect(
      userReducer(initialState, {
        type: userActions.SIGN_IN_FAILURE,
        payload: mockError.message,
      }).errorMessage,
    ).toBe(mockError.message)

    expect(
      userReducer(initialState, {
        type: userActions.SIGN_UP_FAILURE,
        payload: mockError.message,
      }).errorMessage,
    ).toBe(mockError.message)

    expect(
      userReducer(initialState, {
        type: userActions.SIGN_OUT_FAILURE,
        payload: mockError.message,
      }).errorMessage,
    ).toBe(mockError.message)
  })
})
