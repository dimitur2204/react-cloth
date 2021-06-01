import axios from 'axios'
import StripeCheckout, { Token } from 'react-stripe-checkout'

export type StripeButtonProps = {
  price: number
}

const StripeButton = ({ price }: StripeButtonProps) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51HmiW8JLlnbRmnT5Kb8o0mPGXdD1zee0ev97LZoDeaBv6JnH7S2UDYMNNBnVJhnQlZKCPCQ6BEbqb6h7an8ameJO00P1Mis8mw'
  const handleToken = (token: Token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then(() => {
        alert('Payment successful')
      })
      .catch((error) => {
        console.error('Payment error: ', JSON.parse(error))
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card.',
        )
      })
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="React Cloth"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      stripeKey={publishableKey}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={handleToken}></StripeCheckout>
  )
}

export default StripeButton
