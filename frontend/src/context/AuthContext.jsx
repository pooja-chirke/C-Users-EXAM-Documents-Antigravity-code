/**
 * VJTI HOC 2027 - React Authentication Context Provider
 * 
 * Provides global reactive user state, session hydration from localStorage,
 * login/logout handlers, and role-based access helper functions across React routes.
 * 
 * @file VJTI-HOC-Conference/frontend/src/context/AuthContext.jsx
 */

import React, { createContext, useState, useEffect, useContext } from 'react';
import authService from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Hydrate user session from localStorage on app launch
  useEffect(() => {
    const storedUser = authService.getStoredUser();
    const token = authService.getStoredToken();

    if (storedUser && token) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  /**
   * Performs user login via authService and updates reactive user state.
   */
  const login = async (usernameOrEmail, password) => {
    const userData = await authService.login(usernameOrEmail, password);
    setUser(userData);
    return userData;
  };

  /**
   * Registers a new user account via authService.
   */
  const register = async (userData) => {
    return await authService.register(userData);
  };

  /**
   * Logs out the user and clears reactive user state.
   */
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  /**
   * Checks if current authenticated user possesses a specific role string.
   */
  const hasRole = (role) => {
    return user && user.roles && user.roles.includes(role);
  };

  /**
   * Checks if current user possesses any of the specified roles.
   */
  const hasAnyRole = (rolesList = []) => {
    if (!user || !user.roles) return false;
    return user.roles.some((role) => rolesList.includes(role));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        hasRole,
        hasAnyRole,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook for accessing AuthContext in components.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
