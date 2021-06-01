import { useSelector } from 'react-redux'
import { selectCollections } from '../../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { CollectionsOverviewContainer } from './collections-overview.styles'

export default function CollectionsOverview() {
  const collections = useSelector(selectCollections)
  const collectionsElement = Object.values(collections).map(({ id, ...props }) => (
    <CollectionPreview key={id} {...props}></CollectionPreview>
  ))
  return <CollectionsOverviewContainer>{collectionsElement}</CollectionsOverviewContainer>
}
