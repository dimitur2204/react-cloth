import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import './App.scss';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

export type User = {
	id: string;
	displayName?: string;
	email?: string;
	createdAt?: Date;
};

function App() {
	const dispatch = useDispatch();
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
				<Route path="/signin" component={SignInUpPage} />
			</Switch>
		</div>
	);
}

export default App;
