import { takeLatest, put } from 'redux-saga/effects'

import { userActions } from '../user/user.actions'
import { clearCart } from './cart.actions'
import { clearCartSaga, onUserSignOut } from './cart.sagas'

describe('on signout success saga', () => {
  it('should trigger on SIGN_OUT_SUCCESS', async () => {
    const generator = onUserSignOut()
    expect(generator.next().value).toEqual(takeLatest(userActions.SIGN_OUT_SUCCESS, clearCartSaga))
  })
})

describe('clear cart on signout saga', () => {
  it('should fire clearCart', () => {
    const generator = clearCartSaga()
    expect(generator.next().value).toEqual(put(clearCart()))
  })
})
