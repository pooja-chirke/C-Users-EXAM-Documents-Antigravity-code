/**
 * VJTI HOC 2027 - Registration Page Container
 * 
 * Container page rendering the user account registration portal, framing RegisterForm
 * inside a responsive Bootstrap 5 layout.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/Registration/RegistrationPage.jsx
 */

import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/forms/RegisterForm';

export const RegistrationPage = () => {
  return (
    <div className="py-5 bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <Link to="/" className="text-vjti-maroon text-decoration-none small fw-semibold d-inline-flex align-items-center gap-1">
                <i className="bi bi-arrow-left"></i> Back to Public Portal
              </Link>
              <span className="badge bg-vjti-maroon text-vjti-gold font-monospace px-3 py-2">
                HOC 2027 REGISTRATION
              </span>
            </div>
            {/* Conference Fee Table */}
            <div className="my-4">
              <h3 className="text-center mb-3">Conference Fee</h3>
              <table className="table table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Category</th>
                    <th>Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>AICTE Approved Institute Faculty / Research Scholars</td><td>FREE</td></tr>
                  <tr><td>Industry Participant</td><td>₹4000</td></tr>
                  <tr><td>Conference Proceedings</td><td>₹3000</td></tr>
                  <tr><td>Book Chapter</td><td>₹2000</td></tr>
                  <tr><td>Poster Presentation</td><td>₹1000</td></tr>
                </tbody>
              </table>
            </div>

            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
