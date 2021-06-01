import { shopActions } from './shop.actions'
import shopReducer from './shop.reducer'

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: '',
}

describe('shopReducer', () => {
  it('should return initial state', () => {
    expect(shopReducer(undefined, { type: '' })).toEqual(initialState)
  })

  it('should set isFetching to true if fetchingCollectionsStart action', () => {
    expect(
      shopReducer(initialState, {
        type: shopActions.FETCH_COLLECTIONS_START,
      }).isFetching,
    ).toBe(true)
  })

  it('should set isFetching to false and collections to payload if fetchingCollectionsSuccess', () => {
    const mockItems = [{ id: 1 }, { id: 2 }]
    expect(
      shopReducer(initialState, {
        type: shopActions.FETCH_COLLECTIONS_SUCCESS,
        payload: mockItems,
      }),
    ).toEqual({
      ...initialState,
      isFetching: false,
      collections: mockItems,
    })
  })

  it('should set isFetching to false and errorMessage to payload if fetchingCollectionsFailure', () => {
    expect(
      shopReducer(initialState, {
        type: shopActions.FETCH_COLLECTIONS_FAILURE,
        payload: 'error',
      }),
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'error',
    })
  })
})
