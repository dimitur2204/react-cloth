import { useDispatch } from 'react-redux';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { toggleDropdown } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = () => {
	const dispatch = useDispatch();
	return (
		<div className="cart-icon" onClick={() => dispatch(toggleDropdown())}>
			<ShoppingBagIcon className="shopping-icon"></ShoppingBagIcon>
			<div className="item-count">0</div>
		</div>
	);
};

export default CartIcon;
