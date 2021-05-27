import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../../shared/base/custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { toggleDropdown } from '../../../redux/cart/cart.actions';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const history = useHistory();

	const toggleCheckoutClick = () => {
		history.push('/checkout');
		dispatch(toggleDropdown());
	};
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((i) => <CartItem key={i.id} item={i}></CartItem>)
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton onClick={toggleCheckoutClick}>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;
