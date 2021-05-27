import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import CollectionItem from '../../components/collection/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

export type CollectionRouteParams = {
	collectionId: string;
};

const CollectionPage = () => {
	const match = useRouteMatch<CollectionRouteParams>();
	const {
		params: { collectionId },
	} = match;
	const collection = useSelector(selectCollection(collectionId));
	return (
		<div className="collection-page">
			<h2>{collection?.title}</h2>
			<div className="items">
				{collection?.items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default CollectionPage;
