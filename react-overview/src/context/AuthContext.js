import React, { useContext, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

// Our Context object
const AuthContext = React.createContext();

// Create Consumer using useContext hook
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create Provider component that has own state and pass this state to Context Provider component
// There is also using composition, this component receive child component
export const AuthProvider = ({ children }) => {
  //use context as custom hook that encapsulate own state and methods to manipulate this state
  const [currentUser, setCurrentUser] = useState();
  const [val, incrementVal] = useState(0);

  const login = (email) => {
    setCurrentUser(email);
  };

  // prevent creation function after rerender
  const increment = useCallback(() => {
    incrementVal((prev) => prev + 1);
  }, []);

  // Object that we pass through context
  const value = {
    currentUser,
    login,
    val,
    increment,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
