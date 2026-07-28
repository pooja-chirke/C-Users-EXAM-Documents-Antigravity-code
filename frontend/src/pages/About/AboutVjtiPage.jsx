/**
 * VJTI HOC 2027 - About VJTI Institute Page
 * 
 * Production-ready page component detailing Veermata Jijabai Technological Institute (VJTI),
 * Mumbai's historic 135+ year legacy (Est. 1887), academic departments, research centers,
 * and Matunga campus infrastructure.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/About/AboutVjtiPage.jsx
 */

import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

export const AboutVjtiPage = () => {
  return (
    <MainLayout
      title="About VJTI Mumbai"
      subtitle="Veermata Jijabai Technological Institute — Pioneer in Engineering Education & Research Since 1887"
      badge="INSTITUTE HERITAGE"
    >
      <div className="row g-4 align-items-center mb-5">
        <div className="col-lg-7">
          <span className="badge bg-vjti-gold text-dark font-monospace px-3 py-2 mb-2">
            ESTABLISHED 1887
          </span>
          <h3 className="fw-bold font-heading text-vjti-maroon mb-3">
            Legacy of Academic & Technological Excellence
          </h3>
          <p className="text-muted leading-relaxed">
            **Veermata Jijabai Technological Institute (VJTI)**, located in Matunga, Mumbai, is one of India's oldest and most prestigious engineering institutions. Established in 1887 as Victoria Jubilee Technical Institute, VJTI has pioneered engineering education and industrial innovation for over 135 years.
          </p>
          <p className="text-muted leading-relaxed">
            Autonomous since 2004, VJTI offers top-tier undergraduate, postgraduate, and doctoral research programs across Computer Engineering, High Performance Computing, Information Technology, Electrical Engineering, and Artificial Intelligence.
          </p>
          <div className="row g-3 pt-2">
            <div className="col-sm-6">
              <div className="p-3 bg-light rounded-3 border-start border-4 border-vjti-maroon">
                <h6 className="fw-bold text-dark mb-1"><i className="bi bi-bank text-vjti-maroon me-2"></i>135+ Years Legacy</h6>
                <span className="small text-muted">A premier autonomous institute governed by the Board of Governors.</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-3 bg-light rounded-3 border-start border-4 border-warning">
                <h6 className="fw-bold text-dark mb-1"><i className="bi bi-geo-alt-fill text-warning me-2"></i>Prime Mumbai Location</h6>
                <span className="small text-muted">Situated in Matunga, Mumbai, connected to India's financial capital.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white">
            <div className="card-body">
              <h4 className="fw-bold font-heading text-vjti-maroon mb-3">
                <i className="bi bi-building-check me-2"></i>VJTI At A Glance
              </h4>
              <ul className="list-unstyled space-y-3 small text-muted mb-0">
                <li className="d-flex justify-content-between border-bottom pb-2">
                  <span>Year Established:</span>
                  <strong className="text-dark font-monospace">1887</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom pb-2">
                  <span>Status:</span>
                  <strong className="text-vjti-maroon">Autonomous Institute</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom pb-2">
                  <span>Location:</span>
                  <strong className="text-dark">Matunga, Mumbai - 400019</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom pb-2">
                  <span>Host Department:</span>
                  <strong className="text-dark">Computer Engineering & IT</strong>
                </li>
                <li className="d-flex justify-content-between pb-1">
                  <span>Official Website:</span>
                  <a href="https://vjti.ac.in" target="_blank" rel="noopener noreferrer" className="text-vjti-maroon font-semibold">
                    vjti.ac.in <i className="bi bi-box-arrow-up-right small"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Host Department & Research Facilities */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-4 card-hoc bg-light">
            <div className="card-body">
              <div className="bg-vjti-maroon text-vjti-gold p-3 rounded-3 d-inline-flex mb-3 shadow-sm">
                <i className="bi bi-cpu-fill fs-3"></i>
              </div>
              <h4 className="fw-bold font-heading text-dark mb-2">Department of Computer Engineering</h4>
              <p className="text-muted small leading-relaxed mb-0">
                The Department of Computer Engineering at VJTI is a center of excellence in High Performance Computing, Machine Learning, Data Science, and Cybersecurity. Equipped with state-of-the-art supercomputing clusters and specialized AI research labs.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-4 card-hoc bg-light">
            <div className="card-body">
              <div className="bg-vjti-navy text-vjti-gold p-3 rounded-3 d-inline-flex mb-3 shadow-sm">
                <i className="bi bi-globe-americas fs-3"></i>
              </div>
              <h4 className="fw-bold font-heading text-dark mb-2">Campus & Connectivity</h4>
              <p className="text-muted small leading-relaxed mb-0">
                VJTI’s sprawling Matunga campus features historic architecture alongside modern research auditoriums, digital seminar halls, and high-speed internet infrastructure. Located just minutes from Five Gardens and Central/Western Mumbai Railway corridors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conference Hosting CTA Banner */}
      <div className="bg-vjti-navy text-white rounded-4 p-5 text-center shadow-sm">
        <h3 className="fw-bold font-heading text-white mb-3">Welcome to VJTI Mumbai for HOC 2027</h3>
        <p className="text-white-50 max-w-2xl mx-auto mb-4 fs-6">
          We look forward to hosting international researchers and authors on our campus in Matunga, Mumbai.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/submission" className="btn btn-vjti-gold fw-bold px-4">
            Submit Paper
          </Link>
          <Link to="/contact" className="btn btn-outline-light fw-semibold px-4">
            Contact Secretariat
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutVjtiPage;
