import { takeEvery, call, put, all } from 'redux-saga/effects'
import { convertCollectionSnapshotToMap, converter, firestore } from '../../firebase/firebase.utils'
import { Collections } from '../../pages/shop/shop.component'
import { fetchCollectionsFailure, fetchCollectionsSuccess, shopActions } from './shop.actions'

export function* fetchCollectionsAsync(): Generator<any, any, any> {
  try {
    const collectionRef = firestore
      .collection('collections')
      .withConverter(converter<Collections>())
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(shopActions.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
