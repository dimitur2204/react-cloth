import StripeCheckout from 'react-stripe-checkout';

export type StripeButtonProps = {
	price: number;
};

const StripeButton = ({ price }: StripeButtonProps) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51HmiW8JLlnbRmnT5Kb8o0mPGXdD1zee0ev97LZoDeaBv6JnH7S2UDYMNNBnVJhnQlZKCPCQ6BEbqb6h7an8ameJO00P1Mis8mw';
	const handleToken = () => {
		alert('Payment successfull');
	};
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
			token={handleToken}
		></StripeCheckout>
	);
};

export default StripeButton;
