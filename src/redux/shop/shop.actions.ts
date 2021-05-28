import { Collections } from '../../pages/shop/shop.component';
import { Action } from '../helpers';

export const shopActions = {
	UPDATE_COLLECTIONS: 'UPDATE_COLLECTIONS',
};
export const updateCollections = (
	collections: Collections | null
): Action<Collections> => ({
	type: shopActions.UPDATE_COLLECTIONS,
	payload: collections,
});
