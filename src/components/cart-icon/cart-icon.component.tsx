import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { toggleDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = () => {
	const dispatch = useDispatch();
	const count = useSelector(selectCartItemsCount);
	return (
		<div className="cart-icon" onClick={() => dispatch(toggleDropdown())}>
			<ShoppingBagIcon className="shopping-icon"></ShoppingBagIcon>
			<div className="item-count">{count}</div>
		</div>
	);
};

export default CartIcon;
