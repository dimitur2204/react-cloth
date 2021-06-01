import { User } from '../../App'
import { Action } from '../helpers'
import { userActions } from './user.actions'

export type UserState = {
  currentUser: User | null
  errorMessage: string
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  errorMessage: '',
}

const userReducer = (state = INITIAL_STATE, action: Action): UserState => {
  switch (action.type) {
    case userActions.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: '',
      }
    case userActions.SIGN_IN_FAILURE:
    case userActions.SIGN_UP_FAILURE:
    case userActions.SIGN_OUT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      }
    case userActions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: '',
      }
    default:
      return state
  }
}

export default userReducer
