import { useSelector } from 'react-redux'
import withSpinner from '../../components/shared/with-spinner/with-spinner.component'
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'
import CollectionPage from './collection.component'

const CollectionPageWithSpinner = withSpinner(CollectionPage)

const CollectionPageContainer = () => {
  const loaded = useSelector(selectIsCollectionLoaded)
  return <CollectionPageWithSpinner props={null} isLoading={!loaded} />
}

export default CollectionPageContainer
