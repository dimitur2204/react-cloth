import { Item } from '../../pages/shop/shop.component'
import { Action } from '../helpers'
import { CartItem } from './cart.utils'

export const cartActions = {
  TOGGLE_CART_DROPDOWN: 'TOGGLE_CART_DROPDOWN',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  DECREASE_ITEM: 'DECREASE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
}

export const toggleDropdown = (): Action<boolean> => ({
  type: cartActions.TOGGLE_CART_DROPDOWN,
  payload: true,
})

export const addItem = (item: Item): Action<Item> => ({
  type: cartActions.ADD_ITEM,
  payload: item,
})

export const removeItem = (id: number): Action<number> => ({
  type: cartActions.REMOVE_ITEM,
  payload: id,
})

export const decreaseItem = (id: CartItem): Action<CartItem> => ({
  type: cartActions.DECREASE_ITEM,
  payload: id,
})

export const clearCart = (): Action => ({
  type: cartActions.CLEAR_CART,
})
