import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks/useAuth';

export const Auth = ({ children }) => {
  // some additional auth logic could be here
  useAuth();
  return children;
};

Auth.propTypes = {
  children: PropTypes.node,
};
