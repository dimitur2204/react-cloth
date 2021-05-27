import { CartItem } from '../../../redux/cart/cart.utils';
import './checkout-item.styles.scss';

export type CheckoutItemProps = {
	item: CartItem;
};
const CheckoutItem = ({
	item: { name, imageUrl, price, quantity },
}: CheckoutItemProps) => {
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<div className="name">{name}</div>
			<div className="quantity">{quantity}</div>
			<div className="price">${price}</div>
			<div className="remove-btn">&#10005;</div>
		</div>
	);
};

export default CheckoutItem;
