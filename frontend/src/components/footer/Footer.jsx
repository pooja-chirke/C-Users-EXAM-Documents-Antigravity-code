/**
 * VJTI HOC 2027 - Shared Footer Component
 * 
 * Production-ready footer component built with Bootstrap 5.
 * Contains VJTI institutional identification, secretariat contact details,
 * technical domains, navigation links, and copyright notices.
 * 
 * @file VJTI-HOC-Conference/frontend/src/components/footer/Footer.jsx
 */

import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-vjti-navy text-white-50 pt-5 pb-4 border-top border-secondary mt-auto">
      <div className="container">
        <div className="row g-4 pb-4 border-bottom border-secondary">

          {/* Column 1: VJTI & HOC 2027 Branding */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="bg-vjti-gold text-dark p-2 rounded-3 d-flex align-items-center justify-content-center shadow-sm">
                <i className="bi bi-cpu-fill fs-4"></i>
              </div>
              <div>
                <h5 className="fw-bold font-heading text-white mb-0">
                  VJTI SAQC <span className="text-vjti-gold">2027</span>
                </h5>
                <span className="text-white-50 small font-monospace">Matunga, Mumbai</span>
              </div>
            </div>
            <p className="small leading-relaxed text-white-50 mb-3">
              International Conference on Advance Computing(Supercomputing, Artficial Intelligence & Quantum Computing) organized by <strong className="text-white">Veermata Jijabai Technological Institute (VJTI)</strong>, Mumbai.
            </p>
            <div className="d-flex items-center gap-2">
              <span className="badge bg-vjti-maroon text-vjti-gold border border-warning">
                <i className="bi bi-calendar-event me-1"></i>Jan 08-09, 2027
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold font-heading text-vjti-gold text-uppercase mb-3 small tracking-wider">
              Quick Links
            </h6>
            <ul className="list-unstyled small space-y-2 mb-0">
              <li><Link to="/about" className="text-white-50 text-decoration-none hover-text-white">About SAQC 2027</Link></li>
              <li><Link to="/call-for-papers" className="text-white-50 text-decoration-none hover-text-white">Call for Papers</Link></li>
              <li><Link to="/tracks" className="text-white-50 text-decoration-none hover-text-white">Conference Tracks</Link></li>
              <li><Link to="/committee" className="text-white-50 text-decoration-none hover-text-white">Organizing Committee</Link></li>
              <li><Link to="/keynotes" className="text-white-50 text-decoration-none hover-text-white">Keynote Speakers</Link></li>
              <li><Link to="/registration" className="text-white-50 text-decoration-none hover-text-white">Registration Fees</Link></li>
            </ul>
          </div>

          {/* Column 3: Focus Domains */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold font-heading text-vjti-gold text-uppercase mb-3 small tracking-wider">
              Technical Scope
            </h6>
            <ul className="list-unstyled small space-y-2 text-white-50 mb-0">
              <li><i className="bi bi-chevron-right text-vjti-gold me-1"></i>Application for High Performance Computing</li>
              <li><i className="bi bi-chevron-right text-vjti-gold me-1"></i>Artificial Intelligent Systems & Applications</li>
              <li><i className="bi bi-chevron-right text-vjti-gold me-1"></i>Quantum Computing Systems & Applications</li>
              <li><i className="bi bi-chevron-right text-vjti-gold me-1"></i>Optimization Techniques & Intelligent Computing</li>
              <li><i className="bi bi-chevron-right text-vjti-gold me-1"></i>Sustainable development for advance computing</li>
            </ul>
          </div>

          {/* Column 4: Secretariat Contact */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold font-heading text-vjti-gold text-uppercase mb-3 small tracking-wider">
              Secretariat
            </h6>
            <ul className="list-unstyled small text-white-50 space-y-2 mb-0">
              <li className="d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt-fill text-vjti-gold mt-1"></i>
                <span>VJTI, H. R. Mahajani Road, Matunga, Mumbai - 400019, MH, India</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill text-vjti-gold"></i>
                <a href="mailto: stshingade@it.vjti.ac.in" className="text-white-50 text-decoration-none hover-text-white">stshingade@it.vjti.ac.in</a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill text-vjti-gold"></i>
                <span> 2265 398 100 +363 </span>
                <span>+91 8793707873</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center small text-white-50">
          <div>
            © 2027 Veermata Jijabai Technological Institute (VJTI). All rights reserved.
          </div>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <a href="https://vjti.ac.in" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none hover-text-white d-flex align-items-center gap-1">
              <span>VJTI Official Website</span>
              <i className="bi bi-box-arrow-up-right small"></i>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
