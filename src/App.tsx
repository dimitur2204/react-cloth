import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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

export type AppState = {
	currentUser: User | undefined | null;
};

class App extends Component<{}, AppState> {
	constructor(props: any) {
		super(props);

		this.state = {
			currentUser: undefined,
		};
	}

	unsubscribeFromAuth = () => {};

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDoc(userAuth);

				userRef?.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			}
			this.setState({ currentUser: null });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInUpPage} />
				</Switch>
			</div>
		);
	}
}

// function App() {
// 	const [currentUser, setCurrentUser] = useState<User | null>(null);
// 	useEffect(() => {
// 		let unsubscribeFromAuth = () => {};
// 		const afterMount = () => {
// 			unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
// 				if (userAuth) {
// 					const userRef = await createUserProfileDoc(userAuth);

// 					userRef?.onSnapshot((snapShot) => {
// 						setCurrentUser({
// 							id: snapShot.id,
// 							...snapShot.data(),
// 						});

// 						console.log(currentUser);
// 					});
// 				}
// 			});
// 		};
// 		afterMount();
// 		return () => {
// 			unsubscribeFromAuth();
// 		};
// 	}, []);
// 	return (
// 		<div>
// 			<Header currentUser={currentUser} />
// 			<Switch>
// 				<Route exact path="/" component={HomePage} />
// 				<Route path="/shop" component={ShopPage} />
// 				<Route path="/signin" component={SignInUpPage} />
// 			</Switch>
// 		</div>
// 	);
// }

export default App;
