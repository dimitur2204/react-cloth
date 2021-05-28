import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, useRouteMatch } from 'react-router';
import CollectionsOverview from '../../components/collection/collections-overview/collections-overview.component';
import withSpinner from '../../components/shared/with-spinner/with-spinner.component';
import {
	converter,
	convertCollectionSnapshotToMap,
	firestore,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.components';

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

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = () => {
	const match = useRouteMatch();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const collectionRef = firestore
			.collection('collections')
			.withConverter(converter<Collection>());

		collectionRef.get().then((snap) => {
			const collectionMap = convertCollectionSnapshotToMap(snap);
			dispatch(updateCollections(collectionMap));
			setLoading(false);
		});
	}, [dispatch]);
	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				render={(_) => (
					<CollectionsOverviewWithSpinner isLoading={loading} props={_} />
				)}
			></Route>
			<Route
				path={`${match.path}/:collectionId`}
				render={(_) => (
					<CollectionPageWithSpinner isLoading={loading} props={_} />
				)}
			></Route>
		</div>
	);
};

export default ShopPage;
