/**
 * VJTI HOC 2027 - Shared Navigation Bar Component
 * 
 * Production-ready, responsive header component built with Bootstrap 5.
 * Features VJTI institutional branding, public navigation links, active route highlighting,
 * reactive user session dropdown, and CTA action buttons.
 * 
 * @file VJTI-HOC-Conference/frontend/src/components/navbar/Navbar.jsx
 */

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import vjtiLogo from "../../assets/logos/vjticollege.png";
import "./Navbar.css";
export const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Call for Papers', path: '/call-for-papers' },
    { label: 'Tracks', path: '/tracks' },
    { label: 'Committee', path: '/committee' },
    { label: 'Keynotes', path: '/keynotes' },
    { label: 'Registration', path: '/registration' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-vjti-maroon sticky-top shadow-sm py-2">
      {/* Banner */}

      <div className="container">

        {/* Brand Emblem & Logo */}
        {/* Brand Logo */}
        <Link
          className="navbar-brand d-flex align-items-center gap-3 font-heading"
          to="/"
        >
          <img
            src={vjtiLogo}
            alt="VJTI Logo"
            style={{
              width: "90px",
              height: "85px",
              objectFit: "contain",
              background: "#fff",
              borderRadius: "50%",
              padding: "3px"
            }}
          />

          <div>
            <div className="fw-bold fs-4 lh-1">
              VJTI SAQC <span className="text-vjti-gold">2027</span>
            </div>

            <div
              className="text-white-50"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.5px",
              }}
            >

            </div>
          </div>
        </Link>
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#vjtiNavbarContent"
          aria-controls="vjtiNavbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className="collapse navbar-collapse" id="vjtiNavbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-xl-0 align-items-xl-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li className="nav-item" key={link.path}>
                  <Link
                    className={`nav-link px-2.5 py-1.5 rounded-2 font-medium transition-all ${isActive
                      ? 'text-vjti-gold fw-bold active border-bottom border-vjti-gold border-2'
                      : 'text-white-50 hover-text-white'
                      }`}
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* User Session / CTA Buttons */}
          <div className="d-flex gap-2 ms-xl-3 mt-3 mt-xl-0 align-items-center">
            {user ? (
              <div className="dropdown">
                <button
                  className="btn btn-vjti-gold btn-sm dropdown-toggle d-flex align-items-center gap-2 shadow-sm font-semibold"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle fs-6"></i>
                  <span>{user.fullName || user.username}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-3 mt-2">
                  <li className="px-3 py-2 bg-light border-bottom">
                    <div className="fw-bold text-dark">{user.fullName}</div>
                    <div className="text-muted small">{user.email}</div>
                  </li>
                  {user.roles?.includes('ROLE_ADMIN') && (
                    <li><Link className="dropdown-item py-2" to="/admin"><i className="bi bi-speedometer2 me-2 text-danger"></i>Admin Dashboard</Link></li>
                  )}
                  {user.roles?.includes('ROLE_CHAIR') && (
                    <li><Link className="dropdown-item py-2" to="/chair"><i className="bi bi-diagram-3 me-2 text-warning"></i>Chair Dashboard</Link></li>
                  )}
                  {user.roles?.includes('ROLE_REVIEWER') && (
                    <li><Link className="dropdown-item py-2" to="/reviewer"><i className="bi bi-clipboard-check me-2 text-info"></i>Reviewer Dashboard</Link></li>
                  )}
                  {user.roles?.includes('ROLE_AUTHOR') && (
                    <li><Link className="dropdown-item py-2" to="/author"><i className="bi bi-journal-text me-2 text-primary"></i>Author Dashboard</Link></li>
                  )}
                  <li><hr className="dropdown-divider my-1" /></li>
                  <li>
                    <button className="dropdown-item text-danger py-2" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right me-2"></i>Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light btn-sm font-medium px-3">
                  Sign In
                </Link>
                <Link to="/submission" className="btn btn-vjti-gold btn-sm font-semibold px-3 shadow-sm">
                  Submit Paper
                </Link>
              </>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
