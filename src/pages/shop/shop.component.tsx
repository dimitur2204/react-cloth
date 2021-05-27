import CollectionsOverview from '../../components/collection/collections-overview/collections-overview.component';

export type Collection = {
	id: number;
	title: string;
	routeName: string;
	items: Item[];
};

export type Item = {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
};

const ShopPage = () => {
	return <CollectionsOverview />;
};

export default ShopPage;
