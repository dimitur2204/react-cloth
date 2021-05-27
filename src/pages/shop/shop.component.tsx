import { Route, useRouteMatch } from 'react-router';
import CollectionsOverview from '../../components/collection/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.components';

export type Collection = {
	id: number;
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
	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverview}
			></Route>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPage}
			></Route>
		</div>
	);
};

export default ShopPage;
