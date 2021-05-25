import { CartItem as CartItemType } from '../../redux/cart/cart.utils';
import './cart-item.styles.scss';

export type CartItemProps = {
	item: CartItemType;
};
const CartItem = ({
	item: { imageUrl, price, name, quantity },
}: CartItemProps) => (
	<div className="cart-item">
		<img src={imageUrl} alt="item" />
		<div className="item-details">
			<span className="name">{name}</span>
			<span className="price">
				{quantity} x ${price}
			</span>
		</div>
	</div>
);

export default CartItem;
