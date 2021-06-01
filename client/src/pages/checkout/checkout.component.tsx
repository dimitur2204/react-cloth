import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/checkout/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe/stripe-button.component'
import { selectCartItems, selectCartItemsTotalPrice } from '../../redux/cart/cart.selectors'
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout.styles'

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const cartPrice = useSelector(selectCartItemsTotalPrice)
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${cartPrice}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
      <StripeButton price={cartPrice} />
    </CheckoutPageContainer>
  )
}

export default CheckoutPage
