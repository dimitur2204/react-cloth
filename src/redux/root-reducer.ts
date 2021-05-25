import { combineReducers } from 'redux';
import cartReducer, { CartState } from './cart/cart.reducer';
import userReducer, { UserState } from './user/user.reducer';

export type AppState = {
	user: UserState;
	cart: CartState;
};

export default combineReducers({
	user: userReducer,
	cart: cartReducer,
});
