import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import CollectionItem from '../../components/collection/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selectors'
import {
  CollectionPageContainer,
  CollectionItemsContainer,
  CollectionTitle,
} from './collection.styles'

export type CollectionRouteParams = {
  collectionId: string
}

const CollectionPage = () => {
  const match = useRouteMatch<CollectionRouteParams>()
  const {
    params: { collectionId },
  } = match
  const collection = useSelector(selectCollection(collectionId))
  return (
    <CollectionPageContainer>
      <CollectionTitle>{collection?.title}</CollectionTitle>
      <CollectionItemsContainer>
        {collection?.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

export default CollectionPage
