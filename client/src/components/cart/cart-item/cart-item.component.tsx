import { memo } from 'react'
import { CartItem as CartItemType } from '../../../redux/cart/cart.utils'
import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles'

export type CartItemProps = {
  item: CartItemType
}
const CartItem = ({ item: { imageUrl, price, name, quantity } }: CartItemProps) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default memo(CartItem)
