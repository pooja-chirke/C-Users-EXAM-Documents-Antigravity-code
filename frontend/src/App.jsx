/**
 * VJTI HOC 2027 - Master Application Router
 * 
 * Production-ready React application entry component wiring AuthProvider,
 * public website routes, authentication views, role-guarded dashboards, and 404 fallbacks.
 * 
 * @file VJTI-HOC-Conference/frontend/src/App.jsx
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';

// Public Website Pages
import HomePage from './pages/Home/HomePage';
import AboutConferencePage from './pages/About/AboutConferencePage';
import AboutVjtiPage from './pages/About/AboutVjtiPage';
import CallForPapersPage from './pages/CallForPapers/CallForPapersPage';
import TracksPage from './pages/Tracks/TracksPage';
import CommitteePage from './pages/Committee/CommitteePage';
import KeynoteSpeakersPage from './pages/Speakers/KeynoteSpeakersPage';
import RegistrationFeesPage from './pages/Registration/RegistrationFeesPage';
import ContactPage from './pages/Contact/ContactPage';
import FaqPage from './pages/Faq/FaqPage';

// Authentication Pages
import LoginPage from './pages/Login/LoginPage';
import RegistrationPage from './pages/Registration/RegistrationPage';

// Role-Based Dashboard Pages
import AuthorDashboard from './pages/Author/AuthorDashboard';
import ReviewerDashboard from './pages/Reviewer/ReviewerDashboard';
import ChairDashboard from './pages/Chair/ChairDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';

export function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutConferencePage />} />
          <Route path="/about-vjti" element={<AboutVjtiPage />} />
          <Route path="/call-for-papers" element={<CallForPapersPage />} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/keynotes" element={<KeynoteSpeakersPage />} />
          <Route path="/registration" element={<RegistrationFeesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />

          {/* Paper Submission Shortcut Redirect */}
          <Route path="/submission" element={<Navigate to="/author" replace />} />

          {/* Authentication Portal Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />

          {/* Protected Role-Based Dashboards */}
          <Route element={<ProtectedRoute allowedRoles={['ROLE_AUTHOR', 'ROLE_CHAIR', 'ROLE_ADMIN']} />}>
            <Route path="/author" element={<AuthorDashboard />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['ROLE_REVIEWER', 'ROLE_CHAIR', 'ROLE_ADMIN']} />}>
            <Route path="/reviewer" element={<ReviewerDashboard />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['ROLE_CHAIR', 'ROLE_ADMIN']} />}>
            <Route path="/chair" element={<ChairDashboard />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['ROLE_ADMIN']} />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>

          {/* 403 Unauthorized Access Fallback */}
          <Route
            path="/unauthorized"
            element={
              <div className="py-5 bg-light min-vh-100 d-flex align-items-center justify-content-center text-center">
                <div className="container">
                  <div className="bg-white p-5 rounded-4 shadow-sm max-w-2xl mx-auto card-hoc">
                    <div className="text-danger mb-3">
                      <i className="bi bi-shield-lock-fill display-1"></i>
                    </div>
                    <h2 className="fw-bold font-heading text-dark mb-2">403 - Access Denied</h2>
                    <p className="text-muted mb-4">
                      You do not have the required role privileges to access this conference dashboard portal.
                    </p>
                    <a href="/" className="btn btn-vjti-maroon fw-semibold px-4">
                      Return to Home Page
                    </a>
                  </div>
                </div>
              </div>
            }
          />

          {/* 404 Page Not Found Fallback */}
          <Route
            path="*"
            element={
              <div className="py-5 bg-light min-vh-100 d-flex align-items-center justify-content-center text-center">
                <div className="container">
                  <div className="bg-white p-5 rounded-4 shadow-sm max-w-2xl mx-auto card-hoc">
                    <div className="text-vjti-maroon mb-3">
                      <i className="bi bi-exclamation-triangle-fill display-1"></i>
                    </div>
                    <h2 className="fw-bold font-heading text-vjti-maroon mb-2">404 - Page Not Found</h2>
                    <p className="text-muted mb-4">
                      The page you are looking for does not exist on the VJTI HOC 2027 Conference Portal.
                    </p>
                    <a href="/" className="btn btn-vjti-gold text-dark fw-bold px-4">
                      Back to Conference Portal
                    </a>
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
