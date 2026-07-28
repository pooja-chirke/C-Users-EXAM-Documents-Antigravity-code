/**
 * VJTI HOC 2027 - Protected Route Security Guard
 * 
 * Enforces user authentication and Role-Based Access Control (RBAC) on React routes.
 * 
 * Behavior:
 * - If session is loading: Renders Bootstrap spinner.
 * - If user is unauthenticated: Redirects to /login preserving target location.
 * - If user lacks required role: Redirects to /unauthorized.
 * - If authenticated and authorized: Renders nested child routes (<Outlet />).
 * 
 * @file VJTI-HOC-Conference/frontend/src/routes/ProtectedRoute.jsx
 */

import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { user, loading, hasAnyRole } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="d-flex justify-content-center items-center min-vh-100 bg-light">
        <div className="spinner-border text-vjti-maroon" role="status">
          <span className="visually-hidden">Loading session...</span>
        </div>
      </div>
    );
  }

  // Redirect unauthenticated user to login with return path state
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Redirect unauthorized user if role mismatch
  if (allowedRoles.length > 0 && !hasAnyRole(allowedRoles)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
