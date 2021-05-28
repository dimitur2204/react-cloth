import { Collections } from '../../pages/shop/shop.component';
import { Action } from '../helpers';
import { shopActions } from './shop.actions';

export type ShopState = {
	collections: Collections | null;
};

const INITIAL_STATE: ShopState = {
	collections: null,
};

const shopReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case shopActions.UPDATE_COLLECTIONS:
			return { ...state, collections: action.payload };
		default:
			return state;
	}
};

export default shopReducer;
