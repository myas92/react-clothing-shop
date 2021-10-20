import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootreducer from './root-reducer';

const middlewares = [logger]

const store = createStore(rootreducer, applyMiddleware(...middlewares))

const persistor = persistStore(store)


export  { store, persistor }