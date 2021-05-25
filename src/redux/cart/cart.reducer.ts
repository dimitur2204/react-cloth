import { Action } from '../helpers';
import { cartActions } from './cart.actions';
import { addItemToCart, CartItem } from './cart.utils';

export type CartState = {
	isDropdownHidden: boolean;
	cartItems: CartItem[];
};

const INITIAL_STATE: CartState = {
	isDropdownHidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case cartActions.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				isDropdownHidden: !state.isDropdownHidden,
			};
		case cartActions.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload as CartItem),
			};
		default:
			return state;
	}
};

export default cartReducer;
