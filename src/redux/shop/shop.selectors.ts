import { createSelector } from 'reselect';
import { AppState } from '../root-reducer';

const selectShop = (state: AppState) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(state) => state.collections
);

export const selectCollection = (collectionId: string) => {
	return createSelector(
		[selectCollections],
		(collections) => collections[collectionId]
	);
};