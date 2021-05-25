import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { AppState } from './redux/root-reducer';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import './App.scss';

export type User = {
	id: string;
	displayName?: string;
	email?: string;
	createdAt?: Date;
};

function App() {
	const dispatch = useDispatch();

	const user = useSelector((state: AppState) => state.user.currentUser);

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
	}, []);

	return (
		<div>
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
