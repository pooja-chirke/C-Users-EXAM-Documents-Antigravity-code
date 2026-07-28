/**
 * VJTI HOC 2027 - Author Dashboard Page
 * 
 * Production-ready dashboard for paper authors.
 * Displays submission statistics, research paper status tracking, quick actions,
 * and camera-ready upload statuses.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/Author/AuthorDashboard.jsx
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const AuthorDashboard = () => {
  const { user } = useAuth();

  // Sample papers state for UI layout (to be connected to paperService in Phase 13)
  const [papers] = useState([
    {
      id: 'HOC-2027-104',
      title: 'Scalable Quantum Error Correction Algorithms using Surface Codes',
      track: 'Quantum Computing & Information Processing',
      submittedAt: '2026-07-20',
      status: 'UNDER_REVIEW',
    },
    {
      id: 'HOC-2027-089',
      title: 'High Throughput Distributed Deep Learning on Heterogeneous GPU Clusters',
      track: 'High Performance Computing & Cloud Architecture',
      submittedAt: '2026-07-15',
      status: 'ACCEPTED',
    },
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'SUBMITTED':
        return <span className="badge bg-primary">Submitted</span>;
      case 'UNDER_REVIEW':
        return <span className="badge bg-warning text-dark">Under Review</span>;
      case 'ACCEPTED':
        return <span className="badge bg-success">Accepted</span>;
      case 'REJECTED':
        return <span className="badge bg-danger">Rejected</span>;
      case 'REVISION_REQUIRED':
        return <span className="badge bg-info text-dark">Revision Required</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  return (
    <div className="py-4 bg-light min-vh-100">
      <div className="container">
        
        {/* Welcome Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-3 border-bottom">
          <div>
            <h2 className="fw-bold font-heading text-vjti-maroon mb-1">
              Author Dashboard
            </h2>
            <p className="text-muted small mb-0">
              Welcome back, <strong>{user?.fullName || user?.username}</strong> ({user?.affiliation || 'VJTI Author'})
            </p>
          </div>
          <div className="mt-3 mt-md-0 d-flex gap-2">
            <Link to="/submission" className="btn btn-vjti-gold btn-sm font-semibold d-inline-flex align-items-center gap-1 shadow-sm">
              <i className="bi bi-file-earmark-plus-fill"></i>
              <span>Submit New Paper</span>
            </Link>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="row g-3 mb-4">
          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-primary">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Total Submissions</div>
                  <h3 className="fw-bold text-primary mb-0">{papers.length}</h3>
                </div>
                <div className="bg-primary-subtle text-primary p-3 rounded-circle">
                  <i className="bi bi-journal-text fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-warning">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Under Review</div>
                  <h3 className="fw-bold text-warning mb-0">
                    {papers.filter((p) => p.status === 'UNDER_REVIEW').length}
                  </h3>
                </div>
                <div className="bg-warning-subtle text-warning p-3 rounded-circle">
                  <i className="bi bi-hourglass-split fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-success">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Accepted Papers</div>
                  <h3 className="fw-bold text-success mb-0">
                    {papers.filter((p) => p.status === 'ACCEPTED').length}
                  </h3>
                </div>
                <div className="bg-success-subtle text-success p-3 rounded-circle">
                  <i className="bi bi-check-circle-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-danger">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Camera Ready Due</div>
                  <h3 className="fw-bold text-danger mb-0">1</h3>
                </div>
                <div className="bg-danger-subtle text-danger p-3 rounded-circle">
                  <i className="bi bi-file-earmark-arrow-up fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Papers Submissions Table */}
        <div className="card border-0 shadow-sm rounded-4 mb-4 card-hoc">
          <div className="card-header bg-white py-3 border-0 d-flex justify-content-between align-items-center">
            <h5 className="fw-bold font-heading mb-0 text-vjti-maroon">
              <i className="bi bi-files me-2"></i>My Submissions
            </h5>
            <span className="badge bg-light text-dark border">
              {papers.length} Papers Registered
            </span>
          </div>
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light text-muted small uppercase">
                <tr>
                  <th>Paper ID</th>
                  <th>Paper Title</th>
                  <th>Track</th>
                  <th>Submitted Date</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {papers.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-muted">
                      No research papers submitted yet. Click "Submit New Paper" to get started.
                    </td>
                  </tr>
                ) : (
                  papers.map((paper) => (
                    <tr key={paper.id}>
                      <td className="fw-mono text-vjti-maroon font-semibold">{paper.id}</td>
                      <td>
                        <div className="fw-semibold text-dark max-w-xs text-truncate">
                          {paper.title}
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-light text-dark border font-monospace">
                          {paper.track}
                        </span>
                      </td>
                      <td className="small text-muted">{paper.submittedAt}</td>
                      <td>{getStatusBadge(paper.status)}</td>
                      <td className="text-end">
                        <div className="btn-group btn-group-sm">
                          <button className="btn btn-outline-secondary" title="View Submission Details">
                            <i className="bi bi-eye"></i>
                          </button>
                          <button className="btn btn-outline-primary" title="Upload Revision / Camera-Ready">
                            <i className="bi bi-upload"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthorDashboard;
