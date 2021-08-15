import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer(), composeEnhancers(applyMiddleware(sagaMiddleware, logger)));

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
sagaMiddleware.run(rootSaga);

StoreProvider.propTypes = {
  children: PropTypes.node,
};
