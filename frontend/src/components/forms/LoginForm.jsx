/**
 * VJTI HOC 2027 - Login Form Component
 * 
 * Production-ready login component built with Bootstrap 5 and React Hook Form.
 * Handles client-side validation, password visibility toggling, REST authentication,
 * error state feedback, and automatic role-based post-login navigation.
 * 
 * @file VJTI-HOC-Conference/frontend/src/components/forms/LoginForm.jsx
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if redirected due to expired session
  const queryParams = new URLSearchParams(location.search);
  const isSessionExpired = queryParams.get('sessionExpired') === 'true';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      usernameOrEmail: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const user = await login(data.usernameOrEmail, data.password);

      // Determine return target route or role-based default dashboard
      const fromPath = location.state?.from?.pathname;
      if (fromPath) {
        navigate(fromPath, { replace: true });
        return;
      }

      // Default role-based routing
      if (user.roles.includes('ROLE_ADMIN')) {
        navigate('/admin', { replace: true });
      } else if (user.roles.includes('ROLE_CHAIR')) {
        navigate('/chair', { replace: true });
      } else if (user.roles.includes('ROLE_REVIEWER')) {
        navigate('/reviewer', { replace: true });
      } else {
        navigate('/author', { replace: true });
      }
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        'Invalid credentials. Please check your username/email and password.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 card-hoc">
      <div className="card-body">
        <div className="text-center mb-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-vjti-maroon text-vjti-gold p-3 rounded-circle mb-3 shadow">
            <i className="bi bi-shield-lock-fill fs-3"></i>
          </div>
          <h3 className="fw-bold font-heading text-vjti-maroon">Portal Login</h3>
          <p className="text-muted small">
            Sign in to access your VJTI HOC 2027 Conference Dashboard
          </p>
        </div>

        {/* Session Expired Alert */}
        {isSessionExpired && (
          <div className="alert alert-warning alert-dismissible fade show small" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            Your session has expired. Please log in again to continue.
          </div>
        )}

        {/* Login Error Alert */}
        {errorMessage && (
          <div className="alert alert-danger alert-dismissible fade show small" role="alert">
            <i className="bi bi-exclamation-circle-fill me-2"></i>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Username / Email Field */}
          <div className="mb-3">
            <label className="form-label fw-semibold small text-secondary">
              Username or Email Address
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light text-muted border-end-0">
                <i className="bi bi-person"></i>
              </span>
              <input
                type="text"
                className={`form-control border-start-0 ${errors.usernameOrEmail ? 'is-invalid' : ''}`}
                placeholder="enter username or email"
                {...register('usernameOrEmail', {
                  required: 'Username or email is required',
                })}
              />
            </div>
            {errors.usernameOrEmail && (
              <div className="text-danger small mt-1">
                {errors.usernameOrEmail.message}
              </div>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <label className="form-label fw-semibold small text-secondary">
                Password
              </label>
              <Link to="/forgot-password" className="small text-vjti-maroon text-decoration-none">
                Forgot password?
              </Link>
            </div>
            <div className="input-group">
              <span className="input-group-text bg-light text-muted border-end-0">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                className={`form-control border-start-0 border-end-0 ${errors.password ? 'is-invalid' : ''}`}
                placeholder="••••••••"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />
              <button
                type="button"
                className="btn btn-light border border-start-0 text-muted"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex="-1"
              >
                <i className={`bi bi-eye${showPassword ? '-slash' : ''}`}></i>
              </button>
            </div>
            {errors.password && (
              <div className="text-danger small mt-1">
                {errors.password.message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-vjti-maroon w-100 py-2.5 fw-semibold d-flex align-items-center justify-content-center gap-2 shadow-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <i className="bi bi-arrow-right-short fs-5"></i>
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-4 pt-3 border-top">
          <p className="small text-muted mb-0">
            Don't have an account yet?{' '}
            <Link to="/register" className="fw-semibold text-vjti-maroon text-decoration-none">
              Register as Author / Delegate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
