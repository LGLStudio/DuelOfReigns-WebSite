// Creates an authentication context and a hook for accessing it. Also provides an authentication provider allowing access signing in / out, as well as the user data

import React, { createContext, useContext, useState } from "react";

// Create the context for user authentication
const AuthContext = createContext(null);

/**
 * Hook that returns the authentication context.
 *
 * @return {AuthContext} The authentication context.
 */
const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

/**
 * Provider that gives the authentication context to its children.
 *
 * @param {React.FC} children - the child components to be wrapped with the authentication context.
 * @return {React.ReactNode} the wrapped child components with the authentication context.
 */
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  /**
   * Updates the user data when he connects.
   *
   * @param {User} userData - the new user data to be set
   * @param {VoidFunction} callback - the function to be executed after setting user data
   */
  const signin = (userData, callback) => {
    setUser(userData);
    callback();
  };

  /**
   * Signs out the current user.
   *
   */
  const signout = () =>
    // callback: VoidFunction
    {
      setUser(null);
      // callback();
    };

  const authContextValue = {
    user: user,
    signin: signin,
    signout: signout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, useAuth };
