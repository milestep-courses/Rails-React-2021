import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node,
};
