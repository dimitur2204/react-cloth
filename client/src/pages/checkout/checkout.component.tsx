import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe/stripe-button.component';
import {
	selectCartItems,
	selectCartItemsTotalPrice,
} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const CheckoutPage = () => {
	const cartItems = useSelector(selectCartItems);
	const cartPrice = useSelector(selectCartItemsTotalPrice);
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} item={cartItem} />
			))}

			<div className="total">
				<span>Total: ${cartPrice}</span>
			</div>
			<div className="test-warning">
				*Please use the following test credit card for payments
				<br />
				4242 4242 4242 4242 - Exp: 'Any future date' - CVV: 'Any 3 digits'
			</div>
			<StripeButton price={cartPrice} />
		</div>
	);
};

export default CheckoutPage;
