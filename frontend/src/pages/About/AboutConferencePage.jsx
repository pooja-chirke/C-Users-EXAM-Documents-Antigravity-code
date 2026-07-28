/**
 * VJTI HOC 2027 - About Conference Page
 * 
 * Production-ready page component detailing HOC 2027 vision, objectives,
 * Scopus/IEEE indexing guidelines, hybrid presentation modes, and award categories.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/About/AboutConferencePage.jsx
 */

import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

export const AboutConferencePage = () => {
  return (
    <MainLayout
      title="About HOC 2027 Conference"
      subtitle="International Conference on Quantum Computing, Artificial Intelligence and High Performance Computing"
      badge="ABOUT THE CONFERENCE"
    >
      <div className="row g-4 align-items-center mb-5">
        <div className="col-lg-7">
          <h3 className="fw-bold font-heading text-vjti-maroon mb-3">
            Bridging Quantum Frontier, AI Systems & Supercomputing
          </h3>
          <p className="text-muted leading-relaxed">
            The **International Conference on Quantum Computing, Artificial Intelligence and High Performance Computing (HOC 2027)** is a premier technical gathering organized by **Veermata Jijabai Technological Institute (VJTI)**, Mumbai.
          </p>
          <p className="text-muted leading-relaxed">
            HOC 2027 aims to bring together global researchers, computer scientists, industry experts, and academicians to discuss breakthrough developments across Quantum Algorithms, Scalable Generative AI, and Exascale High Performance Computing architectures.
          </p>
          <div className="row g-3 pt-2">
            <div className="col-sm-6">
              <div className="p-3 bg-light rounded-3 border-start border-4 border-primary">
                <h6 className="fw-bold text-dark mb-1"><i className="bi bi-patch-check-fill text-primary me-2"></i>Peer-Reviewed Quality</h6>
                <span className="small text-muted">Double-blind peer review by international technical committee.</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-3 bg-light rounded-3 border-start border-4 border-warning">
                <h6 className="fw-bold text-dark mb-1"><i className="bi bi-award-fill text-warning me-2"></i>Best Paper Recognition</h6>
                <span className="small text-muted">Awards presented for outstanding research in each track.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-vjti-navy text-white">
            <div className="card-body">
              <h4 className="fw-bold font-heading text-vjti-gold mb-3">
                <i className="bi bi-info-circle me-2"></i>Quick Facts
              </h4>
              <ul className="list-unstyled space-y-3 small text-white-50 mb-0">
                <li className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span>Host Institution:</span>
                  <strong className="text-white">VJTI Mumbai</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span>Dates:</span>
                  <strong className="text-vjti-gold">Jan 20–22, 2027</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span>Format:</span>
                  <strong className="text-white">Hybrid (In-Person & Online)</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span>Submission Deadline:</span>
                  <strong className="text-white font-monospace">October 31, 2026</strong>
                </li>
                <li className="d-flex justify-content-between pb-1">
                  <span>Primary Venue:</span>
                  <strong className="text-white">VJTI Campus, Matunga</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Conference Objectives Section */}
      <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc mb-5 bg-white">
        <div className="card-body">
          <h4 className="fw-bold font-heading text-vjti-maroon mb-4 text-center">
            Core Objectives of HOC 2027
          </h4>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-3">
                <div className="bg-vjti-maroon text-vjti-gold p-3 rounded-circle d-inline-flex mb-3 shadow-sm">
                  <i className="bi bi-lightbulb fs-3"></i>
                </div>
                <h5 className="fw-bold text-dark">Promote Innovation</h5>
                <p className="small text-muted mb-0">
                  Foster innovative interdisciplinary research merging Quantum algorithms with Deep Learning and HPC.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-3">
                <div className="bg-vjti-navy text-vjti-gold p-3 rounded-circle d-inline-flex mb-3 shadow-sm">
                  <i className="bi bi-people fs-3"></i>
                </div>
                <h5 className="fw-bold text-dark">Global Collaboration</h5>
                <p className="small text-muted mb-0">
                  Connect academic researchers with industry innovators across international borders.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-3">
                <div className="bg-success text-white p-3 rounded-circle d-inline-flex mb-3 shadow-sm">
                  <i className="bi bi-journal-arrow-up fs-3"></i>
                </div>
                <h5 className="fw-bold text-dark">High-Impact Publication</h5>
                <p className="small text-muted mb-0">
                  Provide high-visibility publication in Scopus-indexed proceedings for selected research papers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-vjti-navy text-white rounded-4 p-5 text-center shadow-sm">
        <h3 className="fw-bold font-heading text-white mb-3">Participate in HOC 2027</h3>
        <p className="text-white-50 max-w-2xl mx-auto mb-4 fs-6">
          Submit your original research paper or register as a conference delegate.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/submission" className="btn btn-vjti-gold fw-bold px-4">
            Submit Paper
          </Link>
          <Link to="/registration" className="btn btn-outline-light fw-semibold px-4">
            Registration Fees
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutConferencePage;
