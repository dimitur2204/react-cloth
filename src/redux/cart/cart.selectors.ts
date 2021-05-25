import { createSelector } from 'reselect';
import { AppState } from '../root-reducer';

const selectCart = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce((acc, curr) => {
			return acc + curr.quantity;
		}, 0)
);
