import { Action } from '../helpers'
import { cartActions } from './cart.actions'
import { addItemToCart, CartItem, decreaseItemFromCart, removeItemFromCart } from './cart.utils'

export type CartState = {
  isDropdownHidden: boolean
  cartItems: CartItem[]
}

const INITIAL_STATE: CartState = {
  isDropdownHidden: true,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action: Action<any>) => {
  switch (action.type) {
    case cartActions.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        isDropdownHidden: !state.isDropdownHidden,
      }
    case cartActions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload as CartItem),
      }
    case cartActions.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload as number),
      }
    case cartActions.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseItemFromCart(state.cartItems, action.payload as CartItem),
      }
    case cartActions.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      }
    default:
      return state
  }
}

export default cartReducer
