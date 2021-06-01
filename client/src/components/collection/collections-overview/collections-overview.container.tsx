import { useSelector } from 'react-redux'
import { selectIsCollectionFetching } from '../../../redux/shop/shop.selectors'
import withSpinner from '../../shared/with-spinner/with-spinner.component'
import CollectionsOverview from './collections-overview.component'

const CollectionOverviewWithSpinner = withSpinner(CollectionsOverview)

const CollectionsOverviewContainer = () => {
  const loading = useSelector(selectIsCollectionFetching)
  return <CollectionOverviewWithSpinner props={null} isLoading={loading} />
}

export default CollectionsOverviewContainer
