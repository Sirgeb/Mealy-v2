import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

export const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store =  createStore(rootReducer, applyMiddleware(...middlewares));

export const persistore = persistStore(store);

export default store;
