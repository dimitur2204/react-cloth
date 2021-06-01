import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { userActions } from '../user/user.actions'
import { clearCart } from './cart.actions'

export function* clearCartSaga(): Generator<any, any, any> {
  yield put(clearCart())
}

export function* onUserSignOut() {
  yield takeLatest(userActions.SIGN_OUT_SUCCESS, clearCartSaga)
}
export function* cartSagas() {
  yield all([call(onUserSignOut)])
}
