import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import Header from './components/shared/header/header.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import './App.scss';

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
		// let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
		// 	if (userAuth) {
		// 		const userRef = await createUserProfileDoc(userAuth);
		// 		userRef?.onSnapshot((snapShot) => {
		// 			dispatch(
		// 				setCurrentUser({
		// 					id: snapShot.id,
		// 					...snapShot.data(),
		// 				})
		// 			);
		// 		});
		// 	}
		// 	dispatch(setCurrentUser(null));
		// });
		// return () => {
		// 	unsubscribeFromAuth();
		// };
	}, [dispatch]);

	return (
		<div className="container">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route
					path="/signin"
					render={() => (user ? <Redirect to={'/'} /> : <SignInUpPage />)}
				/>
			</Switch>
		</div>
	);
}

export default App;
