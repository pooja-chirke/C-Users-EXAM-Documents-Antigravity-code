/**
 * VJTI HOC 2027 - Track Chair Dashboard Page
 * 
 * Production-ready dashboard for Track Chairs.
 * Displays technical track submissions, reviewer allocation management,
 * review scores oversight, and final acceptance/rejection decisions.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/Chair/ChairDashboard.jsx
 */

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export const ChairDashboard = () => {
  const { user } = useAuth();

  // Sample track papers state for UI layout (to be connected to paperService/reviewService)
  const [trackPapers] = useState([
    {
      id: 'HOC-2027-104',
      title: 'Scalable Quantum Error Correction Algorithms using Surface Codes',
      author: 'Dr. Rajesh Sharma',
      track: 'Quantum Computing & Information Processing',
      assignedReviewersCount: 2,
      status: 'UNDER_REVIEW',
    },
    {
      id: 'HOC-2027-089',
      title: 'High Throughput Distributed Deep Learning on Heterogeneous GPU Clusters',
      author: 'Prof. Ananya Roy',
      track: 'High Performance Computing & Cloud Architecture',
      assignedReviewersCount: 3,
      status: 'ACCEPTED',
    },
    {
      id: 'HOC-2027-112',
      title: 'Post-Quantum Cryptographic Key Exchange Protocols for IoT Networks',
      author: 'Mr. Vikram Patil',
      track: 'Quantum Computing & Information Processing',
      assignedReviewersCount: 0,
      status: 'SUBMITTED',
    },
  ]);

  return (
    <div className="py-4 bg-light min-vh-100">
      <div className="container">

        {/* Welcome Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-3 border-bottom">
          <div>
            <h2 className="fw-bold font-heading text-vjti-maroon mb-1">
              Track Chair Dashboard
            </h2>
            <p className="text-muted small mb-0">
              Track Chair: <strong>{user?.fullName || user?.username}</strong> ({user?.affiliation || 'VJTI Track Chair'})
            </p>
          </div>
          <div className="mt-3 mt-md-0">
            <span className="badge bg-vjti-gold text-dark font-monospace px-3 py-2">
              TRACK CHAIR PORTAL
            </span>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="row g-3 mb-4">
          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-primary">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Track Submissions</div>
                  <h3 className="fw-bold text-primary mb-0">{trackPapers.length}</h3>
                </div>
                <div className="bg-primary-subtle text-primary p-3 rounded-circle">
                  <i className="bi bi-folder-symlink fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-danger">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Unassigned Papers</div>
                  <h3 className="fw-bold text-danger mb-0">
                    {trackPapers.filter((p) => p.assignedReviewersCount === 0).length}
                  </h3>
                </div>
                <div className="bg-danger-subtle text-danger p-3 rounded-circle">
                  <i className="bi bi-person-x fs-4"></i>
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
                    {trackPapers.filter((p) => p.status === 'UNDER_REVIEW').length}
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
                    {trackPapers.filter((p) => p.status === 'ACCEPTED').length}
                  </h3>
                </div>
                <div className="bg-success-subtle text-success p-3 rounded-circle">
                  <i className="bi bi-check-circle-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Track Papers Table */}
        <div className="card border-0 shadow-sm rounded-4 mb-4 card-hoc">
          <div className="card-header bg-white py-3 border-0 d-flex justify-content-between align-items-center">
            <h5 className="fw-bold font-heading mb-0 text-vjti-maroon">
              <i className="bi bi-diagram-3 me-2"></i>Track Submissions & Reviewer Allocation
            </h5>
            <span className="badge bg-light text-dark border">
              {trackPapers.length} Submissions
            </span>
          </div>
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light text-muted small uppercase">
                <tr>
                  <th>Paper ID</th>
                  <th>Paper Title</th>
                  <th>Lead Author</th>
                  <th>Track</th>
                  <th>Reviewers Assigned</th>
                  <th>Status</th>
                  <th className="text-end">Chair Actions</th>
                </tr>
              </thead>
              <tbody>
                {trackPapers.map((paper) => (
                  <tr key={paper.id}>
                    <td className="fw-mono text-vjti-maroon font-semibold">{paper.id}</td>
                    <td>
                      <div className="fw-semibold text-dark max-w-xs text-truncate">
                        {paper.title}
                      </div>
                    </td>
                    <td className="small text-muted">{paper.author}</td>
                    <td>
                      <span className="badge bg-light text-dark border font-monospace">
                        {paper.track}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${paper.assignedReviewersCount > 0 ? 'bg-info text-dark' : 'bg-danger'}`}>
                        {paper.assignedReviewersCount} Reviewers
                      </span>
                    </td>
                    <td>
                      {paper.status === 'ACCEPTED' && <span className="badge bg-success">Accepted</span>}
                      {paper.status === 'UNDER_REVIEW' && <span className="badge bg-warning text-dark">Under Review</span>}
                      {paper.status === 'SUBMITTED' && <span className="badge bg-primary">Awaiting Allocation</span>}
                    </td>
                    <td className="text-end">
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-primary" title="Assign Reviewers">
                          <i className="bi bi-person-plus me-1"></i>Assign
                        </button>
                        <button className="btn btn-vjti-maroon" title="Final Decision">
                          <i className="bi bi-check-square me-1"></i>Decision
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChairDashboard;
