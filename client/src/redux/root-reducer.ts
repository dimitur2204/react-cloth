import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer, { CartState } from './cart/cart.reducer'
import directoryReducer, { DirectoryState } from './directory/directory.reducer'
import shopReducer, { ShopState } from './shop/shop.reducer'
import userReducer, { UserState } from './user/user.reducer'

export type AppState = {
  user: UserState
  cart: CartState
  directory: DirectoryState
  shop: ShopState
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer)
