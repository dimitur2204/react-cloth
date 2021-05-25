import { useDispatch } from 'react-redux';
import { Item } from '../../pages/shop/shop.component';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

export type CollectionItemProps = {
	item: Item;
};

const CollectionItem = ({ item }: CollectionItemProps) => {
	const { name, price, imageUrl } = item;

	const dispatch = useDispatch();
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton onClick={() => dispatch(addItem(item))} inverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
