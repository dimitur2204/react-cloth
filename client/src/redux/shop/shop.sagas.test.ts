import { shopActions } from './shop.actions'
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions'

describe('fetchCollectionsStart action', () => {
  it('should create the fetchCollectionsStart action', () => {
    expect(fetchCollectionsStart().type).toEqual(shopActions.FETCH_COLLECTIONS_START)
  })
})

describe('fetchCollectionsSuccess action', () => {
  it('should create the fetchCollectionsSuccess action', () => {
    const mockCollectionsMap = {
      hats: {
        id: 1,
      },
    }

    const action = fetchCollectionsSuccess(mockCollectionsMap as any)

    expect(action.type).toEqual(shopActions.FETCH_COLLECTIONS_SUCCESS)
    expect(action.payload).toEqual(mockCollectionsMap)
  })
})

describe('fetchCollectionsFailure action', () => {
  it('should create the fetchCollectionsFailure action', () => {
    const action = fetchCollectionsFailure('errored')

    expect(action.type).toEqual(shopActions.FETCH_COLLECTIONS_FAILURE)
    expect(action.payload).toEqual('errored')
  })
})
