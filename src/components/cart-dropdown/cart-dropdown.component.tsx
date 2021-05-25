import { useSelector } from 'react-redux';
import { AppState } from '../../redux/root-reducer';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	const cartItems = useSelector((state: AppState) => state.cart.cartItems);
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((i) => (
					<CartItem key={i.id} item={i}></CartItem>
				))}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;
