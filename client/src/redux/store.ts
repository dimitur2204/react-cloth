import { createStore, applyMiddleware, Store } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = []
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}
middlewares.push(sagaMiddleware)

export const store: Store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

const stores = { store, persistor }
export default stores
