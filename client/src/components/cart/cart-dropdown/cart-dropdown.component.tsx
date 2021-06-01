import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectCartItems } from '../../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component'
import { toggleDropdown } from '../../../redux/cart/cart.actions'
import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from './cart-dropdown.styles'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const history = useHistory()

  const toggleCheckoutClick = () => {
    history.push('/checkout')
    dispatch(toggleDropdown())
  }
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton onClick={toggleCheckoutClick}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  )
}

export default CartDropdown
