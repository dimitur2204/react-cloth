import { useDispatch } from 'react-redux'
import { addItem, decreaseItem, removeItem } from '../../../redux/cart/cart.actions'
import { CartItem } from '../../../redux/cart/cart.utils'
import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer,
} from './checkout-item.styles'

export type CheckoutItemProps = {
  item: CartItem
}
const CheckoutItem = ({ item }: CheckoutItemProps) => {
  const dispatch = useDispatch()
  const { id, name, imageUrl, price, quantity } = item
  const handleRemoveClicked = () => {
    dispatch(removeItem(id))
  }

  const handleDecreaseClicked = () => {
    dispatch(decreaseItem(item))
  }

  const handleIncreaseClicked = () => {
    dispatch(addItem(item))
  }

  return (
    <CheckoutItemContainer className="checkout-item">
      <ImageContainer className="image-container">
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer className="name">{name}</TextContainer>
      <QuantityContainer className="quantity">
        <div className="arrow" onClick={handleDecreaseClicked}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncreaseClicked}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer className="price">${price}</TextContainer>
      <RemoveButtonContainer onClick={handleRemoveClicked} className="remove-button">
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
