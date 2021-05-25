import { Action } from '../helpers';
import { cartActions } from './cart.actions';

export type CartState = {
	isDropdownHidden: boolean;
};

const INITIAL_STATE: CartState = {
	isDropdownHidden: true,
};

const cartReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case cartActions.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				isDropdownHidden: !state.isDropdownHidden,
			};
		default:
			return state;
	}
};

export default cartReducer;
