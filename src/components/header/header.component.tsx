import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/root-reducer';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = () => {
	const user = useSelector((state: AppState) => state.user.currentUser);
	const isHidden = useSelector(
		(state: AppState) => state.cart.isDropdownHidden
	);
	return (
		<div className="header">
			<Link className="logo-container no-hover" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{user ? (
					<div className="option link" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to={'/signin'}>
						SIGN IN
					</Link>
				)}
				<CartIcon></CartIcon>
			</div>
			{isHidden ? null : <CartDropdown></CartDropdown>}
		</div>
	);
};

export default Header;
