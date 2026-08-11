/**
 * VJTI HOC 2027 - Shared Navigation Bar Component
 *
 * Production-ready, responsive header component built with Bootstrap 5.
 *
 * Features:
 * - VJTI institutional branding
 * - English + Marathi navigation
 * - Active route highlighting
 * - Reactive user session dropdown
 * - Role-based dashboard links
 * - Sign In / Submit Paper CTA buttons
 * - Responsive mobile navigation
 * - Desktop navbar fits inside viewport
 *
 * @file VJTI-HOC-Conference/frontend/src/components/navbar/Navbar.jsx
 */

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import vjtiLogo from '../../assets/logos/vjticollege.png';
import './Navbar.css';

export const Navbar = () => {

  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // =========================================================
  // LOGOUT
  // =========================================================

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // =========================================================
  // NAVIGATION LINKS
  // =========================================================

  const navLinks = [
    {
      label: 'Home',
      marathi: 'मुख्यपृष्ठ',
      path: '/'
    },
    {
      label: 'About',
      marathi: 'आमच्याबद्दल',
      path: '/about'
    },
    {
      label: 'Call for Papers',
      marathi: 'संशोधन लेख सादरीकरणाचे आवाहन',
      path: '/call-for-papers'
    },
    {
      label: 'Tracks',
      marathi: 'तांत्रिक ट्रॅक्स',
      path: '/tracks'
    },
    {
      label: 'Committee',
      marathi: 'आयोजन समिती',
      path: '/committee'
    },
    {
      label: 'Keynotes',
      marathi: 'प्रमुख व्याख्याने',
      path: '/keynotes'
    },
    {
      label: 'Registration',
      marathi: 'नोंदणी',
      path: '/registration'
    },
    {
      label: 'Contact',
      marathi: 'संपर्क',
      path: '/contact'
    },
    {
      label: 'FAQ',
      marathi: 'वारंवार विचारले जाणारे प्रश्न',
      path: '/faq'
    }
  ];

  // =========================================================
  // RETURN
  // =========================================================

  return (

    <nav
      className="
        navbar
        navbar-expand-xl
        navbar-dark
        bg-vjti-maroon
        sticky-top
        shadow-sm
        py-2
        vjti-main-navbar
      "
    >

      {/* =====================================================
          FULL WIDTH CONTAINER
      ====================================================== */}

      <div className="container-fluid vjti-navbar-container">

        {/* ===================================================
            BRAND
        ==================================================== */}

        <Link
          className="navbar-brand vjti-navbar-brand"
          to="/"
        >

          {/* VJTI LOGO */}

          <img
            src={vjtiLogo}
            alt="VJTI Logo"
            className="vjti-navbar-logo"
          />


          {/* BRAND TEXT */}

          <div className="vjti-brand-text">

            <div className="vjti-brand-title">

              VJTI SAQC{' '}

              <span className="text-vjti-gold">
                2027
              </span>

            </div>


            {/* MARATHI CONFERENCE TITLE */}

            <div className="vjti-brand-marathi">

              उच्च कार्यक्षमता संगणन, कृत्रिम बुद्धिमत्ता
              आणि क्वांटम संगणन

            </div>

          </div>

        </Link>


        {/* ===================================================
            MOBILE TOGGLE
        ==================================================== */}

        <button
          className="
            navbar-toggler
            border-0
            shadow-none
            vjti-navbar-toggler
          "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#vjtiNavbarContent"
          aria-controls="vjtiNavbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>

        </button>


        {/* ===================================================
            NAVIGATION CONTENT
        ==================================================== */}

        <div
          className="collapse navbar-collapse vjti-navbar-collapse"
          id="vjtiNavbarContent"
        >

          {/* =================================================
              NAVIGATION LINKS
          ================================================== */}

          <ul className="navbar-nav vjti-nav-list">

            {navLinks.map((link) => {

              const isActive =
                location.pathname === link.path;

              return (

                <li
                  className="nav-item vjti-nav-item"
                  key={link.path}
                >

                  <Link
                    to={link.path}
                    className={`
                      nav-link
                      bilingual-nav-link
                      ${isActive ? 'active' : ''}
                    `}
                  >

                    {/* ENGLISH */}

                    <span className="nav-english">
                      {link.label}
                    </span>


                    {/* MARATHI */}

                    <span className="nav-marathi">
                      {link.marathi}
                    </span>

                  </Link>

                </li>

              );

            })}

          </ul>


          {/* =================================================
              RIGHT SIDE ACTIONS
          ================================================== */}

          <div className="navbar-actions">

            {user ? (

              /* =================================================
                 LOGGED-IN USER
              ================================================== */

              <div className="dropdown">

                <button
                  className="
                    btn
                    btn-vjti-gold
                    btn-sm
                    dropdown-toggle
                    d-flex
                    align-items-center
                    gap-2
                    shadow-sm
                    font-semibold
                    user-dropdown-button
                  "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >

                  <i className="bi bi-person-circle"></i>

                  <span>
                    {user.fullName || user.username}
                  </span>

                </button>


                {/* USER DROPDOWN */}

                <ul
                  className="
                    dropdown-menu
                    dropdown-menu-end
                    shadow-lg
                    border-0
                    rounded-3
                    mt-2
                  "
                >

                  {/* USER INFORMATION */}

                  <li className="px-3 py-2 bg-light border-bottom">

                    <div className="fw-bold text-dark">
                      {user.fullName}
                    </div>

                    <div className="text-muted small">
                      {user.email}
                    </div>

                  </li>


                  {/* ADMIN */}

                  {user.roles?.includes('ROLE_ADMIN') && (

                    <li>

                      <Link
                        className="dropdown-item py-2"
                        to="/admin"
                      >

                        <i className="bi bi-speedometer2 me-2 text-danger"></i>

                        Admin Dashboard

                      </Link>

                    </li>

                  )}


                  {/* CHAIR */}

                  {user.roles?.includes('ROLE_CHAIR') && (

                    <li>

                      <Link
                        className="dropdown-item py-2"
                        to="/chair"
                      >

                        <i className="bi bi-diagram-3 me-2 text-warning"></i>

                        Chair Dashboard

                      </Link>

                    </li>

                  )}


                  {/* REVIEWER */}

                  {user.roles?.includes('ROLE_REVIEWER') && (

                    <li>

                      <Link
                        className="dropdown-item py-2"
                        to="/reviewer"
                      >

                        <i className="bi bi-clipboard-check me-2 text-info"></i>

                        Reviewer Dashboard

                      </Link>

                    </li>

                  )}


                  {/* AUTHOR */}

                  {user.roles?.includes('ROLE_AUTHOR') && (

                    <li>

                      <Link
                        className="dropdown-item py-2"
                        to="/author"
                      >

                        <i className="bi bi-journal-text me-2 text-primary"></i>

                        Author Dashboard

                      </Link>

                    </li>

                  )}


                  {/* DIVIDER */}

                  <li>
                    <hr className="dropdown-divider my-1" />
                  </li>


                  {/* LOGOUT */}

                  <li>

                    <button
                      className="
                        dropdown-item
                        text-danger
                        py-2
                      "
                      onClick={handleLogout}
                    >

                      <i className="bi bi-box-arrow-right me-2"></i>

                      Sign Out

                    </button>

                  </li>

                </ul>

              </div>

            ) : (

              /* =================================================
                 LOGGED OUT
              ================================================== */

              <>

                {/* SIGN IN */}

                <Link
                  to="/login"
                  className="btn btn-outline-light btn-sm bilingual-cta sign-in-btn"
                >

                  <span className="cta-english">
                    Sign In
                  </span>

                  <span className="cta-marathi">
                    लॉगिन
                  </span>

                </Link>


                {/* SUBMIT PAPER */}

                <Link
                  to="/submission"
                  className="
                    btn
                    btn-vjti-gold
                    btn-sm
                    bilingual-cta
                    submit-paper-btn
                  "
                >

                  <span className="cta-english">
                    Submit Paper
                  </span>

                  <span className="cta-marathi">
                    संशोधन लेख सादर करा
                  </span>

                </Link>

              </>

            )}

          </div>

        </div>

      </div>


      {/* =====================================================
          NAVBAR CSS
      ====================================================== */}

      <style>{`

        /* ====================================================
           GLOBAL NAVBAR
        ==================================================== */

        .vjti-main-navbar {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          z-index: 1030;
        }


        /* ====================================================
           CONTAINER
        ==================================================== */

        .vjti-navbar-container {
          width: 100%;
          max-width: 100%;
          padding-left: 18px;
          padding-right: 18px;
          display: flex;
          align-items: center;
        }


        /* ====================================================
           BRAND
        ==================================================== */

        .vjti-navbar-brand {
          display: flex;
          align-items: center;

          gap: 14px;

          flex-shrink: 0;

          margin-right: 18px;

          padding-top: 0;
          padding-bottom: 0;
        }


        /* ====================================================
           LOGO
        ==================================================== */

        .vjti-navbar-logo {
          width: 76px;
          height: 76px;

          object-fit: contain;

          background: #ffffff;

          border-radius: 50%;

          padding: 3px;

          flex-shrink: 0;
        }


        /* ====================================================
           BRAND TEXT
        ==================================================== */

        .vjti-brand-text {
          min-width: 245px;
          max-width: 285px;
        }


        .vjti-brand-title {
          font-size: 27px;

          line-height: 1.05;

          font-weight: 700;

          white-space: nowrap;

          color: #ffffff;
        }


        .vjti-brand-marathi {
          font-family:
            'Mangal',
            'Noto Sans Devanagari',
            'Mukta',
            'Hind',
            sans-serif;

          font-size: 9px;

          line-height: 1.35;

          margin-top: 5px;

          color: rgba(255,255,255,0.72);

          white-space: nowrap;

          overflow: hidden;

          text-overflow: ellipsis;
        }


        /* ====================================================
           COLLAPSE
        ==================================================== */

        .vjti-navbar-collapse {
          min-width: 0;

          flex: 1 1 auto;

          display: flex;

          align-items: center;

          justify-content: flex-end;
        }


        /* ====================================================
           NAVIGATION LIST
        ==================================================== */

        .vjti-nav-list {
          display: flex;

          flex-direction: row;

          align-items: center;

          justify-content: flex-end;

          gap: 1px;

          margin: 0;

          padding: 0;

          min-width: 0;

          flex: 1 1 auto;
        }


        /* ====================================================
           NAV ITEM
        ==================================================== */

        .vjti-nav-item {
          flex: 0 1 auto;

          min-width: 0;
        }


        /* ====================================================
           BILINGUAL NAV LINK
        ==================================================== */

        .bilingual-nav-link {
          display: flex !important;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          padding: 5px 6px !important;

          margin: 0;

          border-radius: 5px;

          line-height: 1.05;

          white-space: nowrap;

          transition:
            color 0.2s ease,
            background-color 0.2s ease;

          min-width: 0;
        }


        /* ====================================================
           ENGLISH
        ==================================================== */

        .nav-english {
          display: block;

          font-size: 13px;

          line-height: 1.15;

          font-weight: 500;

          white-space: nowrap;
        }


        /* ====================================================
           MARATHI
        ==================================================== */

        .nav-marathi {
          display: block;

          margin-top: 3px;

          font-family:
            'Mangal',
            'Noto Sans Devanagari',
            'Mukta',
            'Hind',
            sans-serif;

          font-size: 8px;

          line-height: 1.15;

          font-weight: 500;

          color: rgba(255,255,255,0.67);

          white-space: nowrap;

          max-width: 145px;

          overflow: hidden;

          text-overflow: ellipsis;
        }


        /* ====================================================
           ACTIVE
        ==================================================== */

        .bilingual-nav-link.active {
          color: #d4af37 !important;

          font-weight: 700;

          border-bottom: 2px solid #d4af37;
        }


        .bilingual-nav-link.active .nav-marathi {
          color: #d4af37;
        }


        /* ====================================================
           HOVER
        ==================================================== */

        .bilingual-nav-link:hover {
          color: #ffffff !important;
        }


        .bilingual-nav-link:hover .nav-marathi {
          color: rgba(255,255,255,0.95);
        }


        /* ====================================================
           ACTION BUTTON AREA
        ==================================================== */

        .navbar-actions {
          display: flex;

          align-items: center;

          justify-content: flex-end;

          gap: 7px;

          margin-left: 8px;

          flex-shrink: 0;
        }


        /* ====================================================
           BILINGUAL CTA
        ==================================================== */

        .bilingual-cta {
          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          line-height: 1.05;

          white-space: nowrap;

          padding: 6px 10px !important;

          min-height: 42px;
        }


        /* ====================================================
           SIGN IN
        ==================================================== */

        .sign-in-btn {
          min-width: 82px;
        }


        /* ====================================================
           SUBMIT PAPER
        ==================================================== */

        .submit-paper-btn {
          min-width: 112px;
        }


        /* ====================================================
           CTA ENGLISH
        ==================================================== */

        .cta-english {
          display: block;

          font-size: 12px;

          line-height: 1.15;

          font-weight: 600;

          white-space: nowrap;
        }


        /* ====================================================
           CTA MARATHI
        ==================================================== */

        .cta-marathi {
          display: block;

          margin-top: 3px;

          font-family:
            'Mangal',
            'Noto Sans Devanagari',
            'Mukta',
            'Hind',
            sans-serif;

          font-size: 8px;

          line-height: 1.15;

          font-weight: 600;

          white-space: nowrap;
        }


        /* ====================================================
           USER BUTTON
        ==================================================== */

        .user-dropdown-button {
          white-space: nowrap;
        }


        /* ====================================================
           LARGE DESKTOP
        ==================================================== */

        @media (min-width: 1600px) {

          .vjti-navbar-container {
            padding-left: 28px;
            padding-right: 28px;
          }


          .vjti-navbar-logo {
            width: 82px;
            height: 82px;
          }


          .vjti-brand-title {
            font-size: 29px;
          }


          .bilingual-nav-link {
            padding-left: 7px !important;
            padding-right: 7px !important;
          }


          .nav-english {
            font-size: 14px;
          }


          .nav-marathi {
            font-size: 8.5px;
          }

        }


        /* ====================================================
           NORMAL DESKTOP
        ==================================================== */

        @media (min-width: 1200px) and (max-width: 1599px) {

          .vjti-navbar-container {
            padding-left: 12px;
            padding-right: 12px;
          }


          .vjti-navbar-brand {
            gap: 10px;

            margin-right: 8px;
          }


          .vjti-navbar-logo {
            width: 68px;
            height: 68px;
          }


          .vjti-brand-text {
            min-width: 205px;
            max-width: 220px;
          }


          .vjti-brand-title {
            font-size: 23px;
          }


          .vjti-brand-marathi {
            font-size: 7.5px;
          }


          .bilingual-nav-link {
            padding-left: 4px !important;
            padding-right: 4px !important;
          }


          .nav-english {
            font-size: 11.5px;
          }


          .nav-marathi {
            font-size: 7px;

            max-width: 105px;
          }


          .navbar-actions {
            gap: 4px;

            margin-left: 4px;
          }


          .bilingual-cta {
            padding-left: 7px !important;
            padding-right: 7px !important;
          }


          .sign-in-btn {
            min-width: 70px;
          }


          .submit-paper-btn {
            min-width: 94px;
          }


          .cta-english {
            font-size: 10px;
          }


          .cta-marathi {
            font-size: 7px;
          }

        }


        /* ====================================================
           TABLET / MOBILE
        ==================================================== */

        @media (max-width: 1199px) {

          .vjti-navbar-container {
            padding-left: 15px;
            padding-right: 15px;
          }


          .vjti-navbar-brand {
            margin-right: 0;

            gap: 10px;
          }


          .vjti-navbar-logo {
            width: 64px;
            height: 64px;
          }


          .vjti-brand-text {
            min-width: 0;
            max-width: 240px;
          }


          .vjti-brand-title {
            font-size: 21px;
          }


          .vjti-brand-marathi {
            font-size: 8px;
          }


          .vjti-navbar-collapse {
            width: 100%;

            flex-basis: 100%;

            display: block;
          }


          .vjti-nav-list {
            display: block;

            width: 100%;

            margin-top: 12px;
          }


          .vjti-nav-item {
            width: 100%;
          }


          .bilingual-nav-link {
            align-items: flex-start;

            text-align: left;

            padding: 8px 12px !important;

            border-bottom: 0 !important;

            width: 100%;
          }


          .nav-english {
            font-size: 14px;
          }


          .nav-marathi {
            font-size: 10px;

            max-width: 100%;

            margin-top: 3px;
          }


          .bilingual-nav-link.active {
            background: rgba(255,255,255,0.08);

            border-left: 3px solid #d4af37 !important;

            border-bottom: 0 !important;
          }


          .navbar-actions {
            width: 100%;

            flex-direction: column;

            align-items: stretch;

            gap: 8px;

            margin: 10px 0 15px;

            padding: 0 12px;
          }


          .bilingual-cta {
            width: 100%;

            min-width: 0;
          }

        }


        /* ====================================================
           SMALL MOBILE
        ==================================================== */

        @media (max-width: 576px) {

          .vjti-navbar-container {
            padding-left: 10px;
            padding-right: 10px;
          }


          .vjti-navbar-logo {
            width: 56px;
            height: 56px;
          }


          .vjti-brand-title {
            font-size: 18px;
          }


          .vjti-brand-marathi {
            font-size: 7px;

            max-width: 185px;
          }


          .nav-english {
            font-size: 13px;
          }


          .nav-marathi {
            font-size: 9px;
          }

        }


        /* ====================================================
           VERY SMALL SCREEN
        ==================================================== */

        @media (max-width: 400px) {

          .vjti-navbar-logo {
            width: 50px;
            height: 50px;
          }


          .vjti-brand-title {
            font-size: 16px;
          }


          .vjti-brand-marathi {
            display: none;
          }

        }

      `}</style>

    </nav>

  );
};


export default Navbar;