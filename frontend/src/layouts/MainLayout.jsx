/**
 * VJTI HOC 2027 - Master Main Layout Component
 * 
 * Shared page layout wrapper integrating Navbar, optional page hero header banner,
 * main page content, and Footer.
 * 
 * @file VJTI-HOC-Conference/frontend/src/layouts/MainLayout.jsx
 */

import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export const MainLayout = ({ children, title, subtitle, badge, fullWidth = false }) => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Shared Navigation Header */}
      <Navbar />

      {/* Optional Inner Page Hero Banner */}
      {title && (
        <div className="bg-vjti-navy text-white py-5 border-bottom border-secondary position-relative">
          <div className="container py-3 text-center">
            {badge && (
              <span className="badge bg-vjti-maroon text-vjti-gold font-monospace border border-warning px-3 py-2 mb-3">
                {badge}
              </span>
            )}
            <h1 className="display-5 fw-bold font-heading text-white mb-2">
              {title}
            </h1>
            {subtitle && (
              <p className="lead text-white-50 max-w-2xl mx-auto mb-0 fs-6">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow-1">
        {fullWidth ? children : <div className="container py-5">{children}</div>}
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
