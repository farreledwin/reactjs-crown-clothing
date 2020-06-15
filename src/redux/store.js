import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from './shop/shop.saga';

import rootReducer from './root.reducer';

import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];

export const store = createStore(rootReducer, applyMiddleware(...middlewares, logger));

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default { store, persistor };
