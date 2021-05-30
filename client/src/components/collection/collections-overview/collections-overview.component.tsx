import { useSelector } from 'react-redux';
import { selectCollections } from '../../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

export default function CollectionsOverview() {
	const collections = useSelector(selectCollections);
	return (
		<div>
			{Object.values(collections).map(({ id, ...props }) => (
				<CollectionPreview key={id} {...props}></CollectionPreview>
			))}
		</div>
	);
}
