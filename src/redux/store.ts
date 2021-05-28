import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}
middlewares.push(thunk);

export const store: Store = createStore(
	rootReducer,
	applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);

const stores = { store, persistor };
export default stores;
