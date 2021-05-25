import { Link } from 'react-router-dom';
import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { User } from '../../App';

type HeaderProps = {
	currentUser: User | undefined | null;
};

const Header = ({ currentUser }: HeaderProps) => {
	return (
		<div className="header">
			<Link className="logo-container no-hover" to="/">
				<Logo className="logo"></Logo>
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option link" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to={'/signin'}>
						Sign in
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
