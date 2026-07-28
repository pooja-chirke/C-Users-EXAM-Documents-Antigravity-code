/**
 * VJTI HOC 2027 - Frontend Authentication Service Module
 * 
 * Invokes authentication REST endpoints (/api/auth/*) using the central api.js Axios client.
 * Handles token storage, user session retrieval, and logout clearing.
 * 
 * @file VJTI-HOC-Conference/frontend/src/services/authService.js
 */

import api from './api';

const TOKEN_KEY = 'hoc2027_token';
const USER_KEY = 'hoc2027_user';

/**
 * Authenticates user credentials via POST /api/auth/login.
 * On success, persists JWT token and user payload to localStorage.
 */
export const login = async (usernameOrEmail, password) => {
  const response = await api.post('/auth/login', { usernameOrEmail, password });
  const { token, ...userData } = response.data.data;

  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  }

  return userData;
};

/**
 * Registers a new user account via POST /api/auth/register.
 */
export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

/**
 * Fetches authenticated profile for current session via GET /api/auth/me.
 */
export const fetchCurrentUser = async () => {
  const response = await api.get('/auth/me');
  return response.data.data;
};

/**
 * Retrieves cached user session object from localStorage.
 */
export const getStoredUser = () => {
  const userJson = localStorage.getItem(USER_KEY);
  if (!userJson) return null;
  try {
    return JSON.parse(userJson);
  } catch (error) {
    localStorage.removeItem(USER_KEY);
    return null;
  }
};

/**
 * Retrieves cached JWT Bearer token from localStorage.
 */
export const getStoredToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

/**
 * Performs client-side logout by removing stored tokens and user metadata.
 */
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

/**
 * Checks whether user possesses a valid cached session token.
 */
export const isAuthenticated = () => {
  return !!getStoredToken();
};

const authService = {
  login,
  register,
  fetchCurrentUser,
  getStoredUser,
  getStoredToken,
  logout,
  isAuthenticated,
};

export default authService;
