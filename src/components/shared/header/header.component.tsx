import { useSelector } from 'react-redux';

import { ReactComponent as Logo } from '../../../assets/crown.svg';
import { auth } from '../../../firebase/firebase.utils';
import CartIcon from '../../cart/cart-icon/cart-icon.component';
import CartDropdown from '../../cart/cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../../redux/user/user.selectors';

import {
	HeaderContainer,
	LogoContainer,
	OptionLink,
	OptionsContainer,
} from './header.styles';

const Header = () => {
	const user = useSelector(selectCurrentUser);
	const isHidden = useSelector(selectCartHidden);
	return (
		<HeaderContainer className="header">
			<LogoContainer className="logo-container no-hover" to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer className="options">
				<OptionLink className="option" to="/shop">
					SHOP
				</OptionLink>
				<OptionLink className="option" to="/contact">
					CONTACT
				</OptionLink>
				{user ? (
					<OptionLink
						as="div"
						className="option link"
						onClick={() => auth.signOut()}
					>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink className="option" to={'/signin'}>
						SIGN IN
					</OptionLink>
				)}
				<CartIcon></CartIcon>
			</OptionsContainer>
			{isHidden ? null : <CartDropdown></CartDropdown>}
		</HeaderContainer>
	);
};

export default Header;
