import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import Header from './components/shared/header/header.component';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import './App.scss';
import { selectCurrentUser } from './redux/user/user.selectors';

export type User = {
	id: string;
	displayName?: string;
	email?: string;
	createdAt?: Date;
};

function App() {
	const dispatch = useDispatch();

	const user = useSelector(selectCurrentUser);

	useEffect(() => {
		let unsubscribeFromAuth = () => {};
		const afterMount = () => {
			unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
				if (userAuth) {
					const userRef = await createUserProfileDoc(userAuth);

					userRef?.onSnapshot((snapShot) => {
						dispatch(
							setCurrentUser({
								id: snapShot.id,
								...snapShot.data(),
							})
						);
					});
				}
				dispatch(setCurrentUser(null));
			});
		};
		afterMount();
		return () => {
			unsubscribeFromAuth();
		};
	}, [dispatch]);

	return (
		<div className="container">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route
					path="/signin"
					render={() => (user ? <Redirect to={'/'} /> : <SignInUpPage />)}
				/>
			</Switch>
		</div>
	);
}

export default App;
