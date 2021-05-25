import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';

function App() {
	return (
		<div className="container">
			<Header></Header>
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route exact path="/shop" component={ShopPage}></Route>
				<Route exact path="/signin" component={SignInUpPage}></Route>
			</Switch>
		</div>
	);
}

export default App;
