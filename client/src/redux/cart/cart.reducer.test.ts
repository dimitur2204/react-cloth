import { cartActions } from './cart.actions'
import cartReducer, { CartState } from './cart.reducer'
import { CartItem } from './cart.utils'

const initialState = {
  isDropdownHidden: true,
  cartItems: [],
}

describe('cartReducer', () => {
  it('should return initial state', () => {
    expect(cartReducer(undefined, { type: '' })).toEqual(initialState)
  })

  it('should toggle hidden with toggleHidden action', () => {
    expect(
      cartReducer(initialState, { type: cartActions.TOGGLE_CART_DROPDOWN }).isDropdownHidden,
    ).toBe(false)
  })

  it('should increase quantity of matching item by 1 if addItem action fired with same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    } as CartItem

    const mockPrevState = {
      isDropdownHidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 } as CartItem],
    }

    expect(
      cartReducer(mockPrevState, {
        type: cartActions.ADD_ITEM,
        payload: mockItem,
      }).cartItems[0].quantity,
    ).toBe(4)
  })

  it('should decrease quantity of matching item by 1 if removeItem action fired with same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    } as CartItem

    const mockPrevState: CartState = {
      cartItems: [mockItem, { id: 2, quantity: 1 } as CartItem],
      isDropdownHidden: true,
    }

    expect(
      cartReducer(mockPrevState, {
        type: cartActions.DECREASE_ITEM,
        payload: mockItem,
      }).cartItems[0].quantity,
    ).toBe(2)
  })

  it('should clear cart if clearCart action fired', () => {
    const mockPrevState: CartState = {
      isDropdownHidden: true,
      cartItems: [{ id: 1, quantity: 3 } as CartItem, { id: 2, quantity: 1 } as CartItem],
    }

    expect(
      cartReducer(mockPrevState, {
        type: cartActions.CLEAR_CART,
      }).cartItems.length,
    ).toBe(0)
  })
})
