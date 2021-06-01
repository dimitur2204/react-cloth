import { Collections } from '../../pages/shop/shop.component'
import { Action } from '../helpers'
import { shopActions } from './shop.actions'

export type ShopState = {
  collections: Collections | null
  isFetching: boolean
  errorMessage: string
}

const INITIAL_STATE: ShopState = {
  collections: null,
  isFetching: false,
  errorMessage: '',
}

const shopReducer = (state = INITIAL_STATE, action: Action): ShopState => {
  switch (action.type) {
    case shopActions.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true }
    case shopActions.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false }
    case shopActions.FETCH_COLLECTIONS_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false }
    default:
      return state
  }
}

export default shopReducer
