/**
 * VJTI HOC 2027 - Login Page Container
 * 
 * Container page rendering the user authentication portal, framing the LoginForm component
 * inside a responsive Bootstrap 5 layout with VJTI branding side-cards.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/Login/LoginPage.jsx
 */

import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/forms/LoginForm';

export const LoginPage = () => {
  return (
    <div className="py-5 bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center g-4">
          
          {/* Left Column: VJTI HOC 2027 Info Card */}
          <div className="col-lg-5 col-md-10 d-none d-lg-block">
            <div className="p-4 p-xl-5 bg-vjti-navy text-white rounded-4 shadow-lg position-relative overflow-hidden">
              <div className="mb-4">
                <span className="badge bg-vjti-gold text-dark font-monospace px-3 py-2">
                  VJTI MUMBAI
                </span>
              </div>
              <h2 className="display-6 fw-bold font-heading text-white mb-3">
                VJTI HOC <span className="text-vjti-gold">2027</span>
              </h2>
              <p className="lead text-white-50 fs-6 mb-4">
                International Conference on Quantum Computing, Artificial Intelligence and High Performance Computing
              </p>
              <div className="d-flex flex-column gap-3 text-white-50 small mb-4">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-calendar-event text-vjti-gold fs-5"></i>
                  <span>January 20–22, 2027</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt text-vjti-gold fs-5"></i>
                  <span>VJTI Campus, Matunga, Mumbai</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-[#00F0FF] bi-globe text-info fs-5"></i>
                  <span>Hybrid Conference Format</span>
                </div>
              </div>
              <div className="pt-3 border-top border-secondary">
                <Link to="/" className="text-vjti-gold text-decoration-none small fw-semibold d-inline-flex align-items-center gap-1">
                  <i className="bi bi-arrow-left"></i> Back to Public Website
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Login Form Component */}
          <div className="col-lg-6 col-md-8 col-sm-11">
            <LoginForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
