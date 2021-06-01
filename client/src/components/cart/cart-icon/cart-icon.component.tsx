import { useDispatch, useSelector } from 'react-redux'
import { toggleDropdown } from '../../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors'
import { CartIconContainer, ItemCountContainer, ShoppingBagIcon } from './cart-icon.styles'

const CartIcon = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCartItemsCount)
  return (
    <CartIconContainer
      onClick={() => {
        dispatch(toggleDropdown())
      }}>
      <ShoppingBagIcon></ShoppingBagIcon>
      <ItemCountContainer>{count}</ItemCountContainer>
    </CartIconContainer>
  )
}

export default CartIcon
