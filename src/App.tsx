import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage.component';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
			</Switch>
		</div>
	);
}

export default App;
