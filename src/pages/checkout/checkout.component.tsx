import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout/checkout-item/checkout-item.component';
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
				<CheckoutItem item={cartItem} />
			))}

			<div className="total">
				<span>Total: ${cartPrice}</span>
			</div>
		</div>
	);
};

export default CheckoutPage;
