import { Item } from '../../pages/shop/shop.component';
import { Action } from '../helpers';

export const cartActions = {
	TOGGLE_CART_DROPDOWN: 'TOGGLE_CART_DROPDOWN',
	ADD_ITEM: 'ADD_ITEM',
};

export const toggleDropdown = (): Action<boolean> => ({
	type: cartActions.TOGGLE_CART_DROPDOWN,
	payload: true,
});

export const addItem = (item: Item): Action<Item> => ({
	type: cartActions.ADD_ITEM,
	payload: item,
});
