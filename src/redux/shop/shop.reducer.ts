import { Collections } from '../../pages/shop/shop.component';
import { Action } from '../helpers';
import SHOP_DATA from './shop.data';

export type ShopState = {
	collections: Collections;
};

const INITIAL_STATE: ShopState = {
	collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default shopReducer;
