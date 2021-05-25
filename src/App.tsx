import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth } from './firebase/firebase.utils';
import { useEffect, useState } from 'react';

function App() {
	const [user, setUser] = useState<firebase.default.User | null>();

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged((newUser) => {
			setUser(newUser);
		});
		return () => {
			unsubscribeFromAuth();
		};
	}, [user]);
	return (
		<div className="container">
			<Header currentUser={user} />
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route exact path="/shop" component={ShopPage}></Route>
				<Route exact path="/signin" component={SignInUpPage}></Route>
			</Switch>
		</div>
	);
}

export default App;
