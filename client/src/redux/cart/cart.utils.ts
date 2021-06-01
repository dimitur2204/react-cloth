import { Item } from '../../pages/shop/shop.component'

export interface CartItem extends Item {
  quantity: number
}
export const addItemToCart = (cartItems: CartItem[], cartItemToAdd: CartItem) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id)

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems: CartItem[], idToRemove: number) => {
  const newCartItems = [...cartItems]
  const item = newCartItems.find((i) => i.id === idToRemove)
  if (item) {
    const index = newCartItems.indexOf(item)

    if (index !== -1) {
      newCartItems.splice(index, 1)
    }
  }

  return newCartItems
}

export const decreaseItemFromCart = (cartItems: CartItem[], itemToDecrease: CartItem) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToDecrease.id)
  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecrease.id)
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrease.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
  )
}
