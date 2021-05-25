import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route exact path="/shop" component={ShopPage}></Route>
			</Switch>
		</div>
	);
}

export default App;
