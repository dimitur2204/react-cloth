import { useDispatch } from 'react-redux'
import { Item } from '../../../pages/shop/shop.component'
import { addItem } from '../../../redux/cart/cart.actions'
import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.styles'

export type CollectionItemProps = {
  item: Item
}

const CollectionItem = ({ item }: CollectionItemProps) => {
  const { name, price, imageUrl } = item

  const dispatch = useDispatch()
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
}

export default CollectionItem
