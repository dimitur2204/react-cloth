import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, useRouteMatch } from 'react-router';
import CollectionsOverviewContainer from '../../components/collection/collections-overview/collections-overview.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collection.container';
import { ShopContainer } from './shop.styles';

export type Collection = {
	id: string;
	title: string;
	routeName: string;
	items: Item[];
};

export type Collections = {
	[key: string]: Collection;
};

export type Item = {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
};

const ShopPage = () => {
	const match = useRouteMatch();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCollectionsStart());
	}, [dispatch]);
	return (
		<ShopContainer>
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverviewContainer}
			></Route>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPageContainer}
			></Route>
		</ShopContainer>
	);
};

export default ShopPage;
