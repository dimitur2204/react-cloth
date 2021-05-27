import { useDispatch } from 'react-redux';
import {
	addItem,
	decreaseItem,
	removeItem,
} from '../../../redux/cart/cart.actions';
import { CartItem } from '../../../redux/cart/cart.utils';
import './checkout-item.styles.scss';

export type CheckoutItemProps = {
	item: CartItem;
};
const CheckoutItem = ({ item }: CheckoutItemProps) => {
	const dispatch = useDispatch();
	const { id, name, imageUrl, price, quantity } = item;
	const handleRemoveClicked = () => {
		dispatch(removeItem(id));
	};

	const handleDecreaseClicked = () => {
		dispatch(decreaseItem(item));
	};

	const handleIncreaseClicked = () => {
		dispatch(addItem(item));
	};

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<div className="name">{name}</div>
			<div className="quantity">
				<div className="arrow" onClick={handleDecreaseClicked}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={handleIncreaseClicked}>
					&#10095;
				</div>
			</div>
			<div className="price">${price}</div>
			<div onClick={handleRemoveClicked} className="remove-button">
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
