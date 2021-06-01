import { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, useRouteMatch } from 'react-router'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { ShopContainer } from './shop.styles'
import { SuspenseWithFallBack } from '../../App'

export type Collection = {
  id: string
  title: string
  routeName: string
  items: Item[]
}

export type Collections = {
  [key: string]: Collection
}

export type Item = {
  id: number
  name: string
  imageUrl: string
  price: number
}

const CollectionsOverviewContainer = lazy(
  () => import('../../components/collection/collections-overview/collections-overview.container'),
)
const CollectionPageContainer = lazy(() => import('../collection/collection.container'))
const ShopPage = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch])
  return (
    <ShopContainer>
      <SuspenseWithFallBack>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}></Route>
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}></Route>
      </SuspenseWithFallBack>
    </ShopContainer>
  )
}

export default ShopPage
