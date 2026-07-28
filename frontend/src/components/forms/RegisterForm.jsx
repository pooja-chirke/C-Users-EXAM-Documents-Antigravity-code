/**
 * VJTI HOC 2027 - Registration Form Component
 * 
 * Production-ready registration component built with Bootstrap 5 and React Hook Form.
 * Handles client-side validations, password match confirmation, institutional metadata collection,
 * role selection, and user account creation.
 * 
 * @file VJTI-HOC-Conference/frontend/src/components/forms/RegisterForm.jsx
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const RegisterForm = () => {
  const { register: registerAuth } = useAuth();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      affiliation: '',
      country: '',
      designation: '',
      phone: '',
      selectedRole: 'ROLE_AUTHOR',
    },
  });

  const passwordValue = watch('password');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    const payload = {
      username: data.username,
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      affiliation: data.affiliation,
      country: data.country,
      designation: data.designation,
      phone: data.phone,
      roles: [data.selectedRole],
    };

    try {
      await registerAuth(payload);
      setSuccessMessage('Account registered successfully! Redirecting to login portal...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        'Registration failed. Please verify your details and try again.';
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
            <i className="bi bi-person-plus-fill fs-3"></i>
          </div>
          <h3 className="fw-bold font-heading text-vjti-maroon">Create Account</h3>
          <p className="text-muted small">
            Register to submit papers, participate, or review for VJTI HOC 2027
          </p>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <div className="alert alert-success alert-dismissible fade show small" role="alert">
            <i className="bi bi-check-circle-fill me-2"></i>
            {successMessage}
          </div>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <div className="alert alert-danger alert-dismissible fade show small" role="alert">
            <i className="bi bi-exclamation-circle-fill me-2"></i>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="row g-3">
            {/* Full Name */}
            <div className="col-12">
              <label className="form-label fw-semibold small text-secondary">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                placeholder="Dr. / Prof. / Mr. / Ms. Full Name"
                {...register('fullName', { required: 'Full name is required' })}
              />
              {errors.fullName && (
                <div className="text-danger small mt-1">{errors.fullName.message}</div>
              )}
            </div>

            {/* Email Address */}
            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="name@institution.ac.in"
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
              {errors.email && (
                <div className="text-danger small mt-1">{errors.email.message}</div>
              )}
            </div>

            {/* Username */}
            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">
                Username <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                placeholder="unique_username"
                {...register('username', {
                  required: 'Username is required',
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters',
                  },
                })}
              />
              {errors.username && (
                <div className="text-danger small mt-1">{errors.username.message}</div>
              )}
            </div>

            {/* Password */}
            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">
                Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="••••••••"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />
              {errors.password && (
                <div className="text-danger small mt-1">{errors.password.message}</div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">
                Confirm Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                placeholder="••••••••"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === passwordValue || 'Passwords do not match',
                })}
              />
              {errors.confirmPassword && (
                <div className="text-danger small mt-1">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>

            {/* Affiliation / Institution */}
            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">
                Affiliation / Institution
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. VJTI Mumbai / IIT Bombay"
                {...register('affiliation')}
              />
            </div>

            {/* Designation */}
            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">
                Designation / Position
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Associate Professor / Research Scholar"
                {...register('designation')}
              />
            </div>

            {/* Country */}
            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">Country</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. India"
                {...register('country')}
              />
            </div>

            {/* Phone */}
            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="+91 9876543210"
                {...register('phone')}
              />
            </div>

            {/* Primary Role Selection */}
            <div className="col-12">
              <label className="form-label fw-semibold small text-secondary">
                Primary Account Purpose
              </label>
              <select className="form-select" {...register('selectedRole')}>
                <option value="ROLE_AUTHOR">Paper Author (Submit & Track Research Papers)</option>
                <option value="ROLE_REVIEWER">Peer Reviewer (Evaluate Assigned Papers)</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-vjti-maroon w-100 py-2.5 fw-semibold d-flex align-items-center justify-content-center gap-2 shadow-sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Complete Registration</span>
                  <i className="bi bi-check-circle-fill"></i>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-4 pt-3 border-top">
          <p className="small text-muted mb-0">
            Already have an account?{' '}
            <Link to="/login" className="fw-semibold text-vjti-maroon text-decoration-none">
              Sign In to your Dashboard
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
