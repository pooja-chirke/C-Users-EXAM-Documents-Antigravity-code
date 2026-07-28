/**
 * VJTI HOC 2027 - Call for Papers Page
 * 
 * Production-ready Call for Papers page component detailing submission guidelines,
 * page limits, double-blind review policies, IEEE/ACM template downloads, and deadlines.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/CallForPapers/CallForPapersPage.jsx
 */

import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

export const CallForPapersPage = () => {
  return (
    <MainLayout
      title="Call for Papers (CFP)"
      subtitle="Submissions invited for Quantum Computing, Artificial Intelligence & High Performance Computing Tracks"
      badge="CALL FOR PAPERS 2027"
    >
      <div className="row g-4 mb-5">
        
        {/* Main Content Area */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white mb-4">
            <div className="card-body">
              <h3 className="fw-bold font-heading text-vjti-maroon mb-3">
                Submission Guidelines & Formatting
              </h3>
              <p className="text-muted leading-relaxed">
                Authors are invited to submit original, unpublished research papers demonstrating significant contributions in Quantum Computing, Artificial Intelligence, or High Performance Computing.
              </p>

              <h5 className="fw-bold text-dark mt-4 mb-2">Paper Length & Format</h5>
              <ul className="text-muted space-y-2 mb-4">
                <li><strong>Full Papers:</strong> 6 to 8 pages in length, including figures, tables, and references.</li>
                <li><strong>Short / Poster Papers:</strong> 4 to 5 pages presenting ongoing research or work-in-progress.</li>
                <li><strong>Formatting Standard:</strong> Submissions must follow the standard IEEE double-column conference template.</li>
                <li><strong>File Format:</strong> Only PDF file uploads are accepted via the online paper submission portal.</li>
              </ul>

              <h5 className="fw-bold text-dark mt-4 mb-2">Double-Blind Peer Review Policy</h5>
              <p className="text-muted leading-relaxed">
                HOC 2027 enforces a strict **double-blind peer review policy**. Author names, affiliations, acknowledgments, and explicit self-identifying references must be removed from the initial submission manuscript PDF.
              </p>

              <h5 className="fw-bold text-dark mt-4 mb-2">Plagiarism Policy & Ethics</h5>
              <p className="text-muted leading-relaxed mb-0">
                All submitted papers will undergo automated similarity checks (Turnitin / iThenticate). Manuscripts exceeding a **15% similarity index** or showing evidence of self-plagiarism / dual submission will be rejected immediately without review.
              </p>
            </div>
          </div>

          {/* Template Downloads Card */}
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-light">
            <div className="card-body">
              <h4 className="fw-bold font-heading text-vjti-maroon mb-3">
                <i className="bi bi-download me-2"></i>Paper Format Templates
              </h4>
              <p className="text-muted small mb-4">
                Please download and use the official conference templates before converting your final manuscript to PDF format.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#word-template" className="btn btn-outline-primary d-inline-flex align-items-center gap-2 font-semibold">
                  <i className="bi bi-file-earmark-word fs-5"></i>
                  <span>MS Word Template (.docx)</span>
                </a>
                <a href="#latex-template" className="btn btn-outline-dark d-inline-flex align-items-center gap-2 font-semibold">
                  <i className="bi bi-file-earmark-code fs-5"></i>
                  <span>LaTeX Template (.zip)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info Area */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-vjti-navy text-white mb-4">
            <div className="card-body">
              <h4 className="fw-bold font-heading text-vjti-gold mb-3">
                <i className="bi bi-calendar-event me-2"></i>Key Deadlines
              </h4>
              <ul className="list-unstyled space-y-3 small text-white-50 mb-4">
                <li className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span>Paper Submission:</span>
                  <strong className="text-vjti-gold font-monospace">Oct 31, 2026</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span>Acceptance Notice:</span>
                  <strong className="text-white font-monospace">Nov 30, 2026</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span>Camera-Ready Due:</span>
                  <strong className="text-white font-monospace">Dec 15, 2026</strong>
                </li>
                <li className="d-flex justify-content-between pb-1">
                  <span>Conference Dates:</span>
                  <strong className="text-white">Jan 20–22, 2027</strong>
                </li>
              </ul>

              <Link to="/submission" className="btn btn-vjti-gold w-100 fw-bold py-2.5 shadow-sm">
                Submit Paper Portal <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white">
            <div className="card-body">
              <h5 className="fw-bold font-heading text-vjti-maroon mb-2">Need Assistance?</h5>
              <p className="small text-muted mb-3">
                For questions regarding submission guidelines or paper formatting, contact the Technical Program Committee.
              </p>
              <a href="mailto:hoc2027@vjti.ac.in" className="text-vjti-maroon font-semibold small text-decoration-none">
                <i className="bi bi-envelope-fill me-1"></i>hoc2027@vjti.ac.in
              </a>
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default CallForPapersPage;
