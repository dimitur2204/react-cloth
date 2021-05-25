import { Item } from '../../pages/shop/shop.component';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

export type CollectionPreviewProps = {
	title: string;
	items: Item[];
};

const NUMBER_OF_ITEMS = 4;

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items.slice(0, NUMBER_OF_ITEMS).map(({ id, ...itemProps }) => (
				<CollectionItem key={id} {...itemProps}></CollectionItem>
			))}
		</div>
	</div>
);

export default CollectionPreview;
