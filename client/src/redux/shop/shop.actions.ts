import { ThunkAction } from 'redux-thunk'
import { convertCollectionSnapshotToMap, converter, firestore } from '../../firebase/firebase.utils'
import { Collection, Collections } from '../../pages/shop/shop.component'
import { Action } from '../helpers'
import { ShopState } from './shop.reducer'

export const shopActions = {
  FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE',
}
export const fetchCollectionsStart = (): Action => ({
  type: shopActions.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collections: Collections): Action<Collections> => ({
  type: shopActions.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
})

export const fetchCollectionsFailure = (errorMessage: string): Action<string> => ({
  type: shopActions.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})

export const fetchCollectionsStartAsync =
  (): ThunkAction<void, ShopState, unknown, Action<Collections>> => (dispatch) => {
    const collectionRef = firestore.collection('collections').withConverter(converter<Collection>())

    collectionRef
      .get()
      .then((snap) => {
        const collectionMap = convertCollectionSnapshotToMap(snap)
        dispatch(fetchCollectionsSuccess(collectionMap))
      })
      .catch((err) => {
        dispatch(fetchCollectionsFailure(err.message))
      })
  }
