import { Action } from '../helpers';

export const cartActions = {
	TOGGLE_CART_DROPDOWN: 'TOGGLE_CART_DROPDOWN',
};

export const toggleDropdown = (): Action<boolean> => ({
	type: cartActions.TOGGLE_CART_DROPDOWN,
	payload: true,
});
