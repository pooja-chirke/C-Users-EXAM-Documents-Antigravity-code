/**
 * VJTI HOC 2027 - Centralized API Service Client
 * 
 * @module api
 * @description Configures Axios HTTP client instance with base URL, request interceptors for JWT injection,
 *              and response interceptors for global authentication error handling.
 * @file VJTI-HOC-Conference/frontend/src/services/api.js
 */

import axios from 'axios';

// Base URL configured for Spring Boot REST API (/api proxied via Vite to http://localhost:8080)
const API_BASE_URL = '/api';

/**
 * Custom Axios instance configured for VJTI HOC 2027 REST API communication.
 */
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds timeout for file uploads and server requests
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

/**
 * Request Interceptor
 * Automatically injects JWT Bearer token from localStorage into Authorization header for protected endpoints.
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('hoc2027_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * Intercepts responses to handle HTTP 401 (Unauthorized) and 403 (Forbidden) globally.
 * Clears stale tokens and redirects unauthenticated users to login page.
 */
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;
      
      // Handle 401 Unauthorized (Expired or Invalid JWT Token)
      if (status === 401) {
        localStorage.removeItem('hoc2027_token');
        localStorage.removeItem('hoc2027_user');
        
        // Prevent redirect loop if already on login page
        if (!window.location.pathname.startsWith('/login')) {
          window.location.href = '/login?sessionExpired=true';
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
