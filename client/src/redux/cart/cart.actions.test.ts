import { Item } from '../../pages/shop/shop.component'
import { cartActions } from './cart.actions'
import { toggleDropdown, addItem, removeItem, clearCart } from './cart.actions'

describe('toggleCartHidden action', () => {
  it('should create the toggleHidden action', () => {
    expect(toggleDropdown().type).toEqual(cartActions.TOGGLE_CART_DROPDOWN)
  })
})

describe('addItem action', () => {
  it('should create the addItem action', () => {
    const mockItem = {
      id: 1,
    } as Item

    const action = addItem(mockItem)

    expect(action.type).toEqual(cartActions.ADD_ITEM)
    expect(action.payload).toEqual(mockItem)
  })
})

describe('removeItem action', () => {
  it('should create the removeItem action', () => {
    const mockItem = 1

    const action = removeItem(mockItem)

    expect(action.type).toEqual(cartActions.REMOVE_ITEM)
    expect(action.payload).toEqual(mockItem)
  })
})

describe('clearCart action', () => {
  it('should create the clearCart action', () => {
    expect(clearCart().type).toEqual(cartActions.CLEAR_CART)
  })
})
