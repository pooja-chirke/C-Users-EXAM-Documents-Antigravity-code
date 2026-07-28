/**
 * VJTI HOC 2027 - Reviewer Dashboard Page
 * 
 * Production-ready dashboard for peer reviewers.
 * Displays assigned papers, review deadlines, multi-criteria scoring statuses,
 * and confidential feedback options for Track Chairs.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/Reviewer/ReviewerDashboard.jsx
 */

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export const ReviewerDashboard = () => {
  const { user } = useAuth();

  // Sample assigned papers state for UI layout (to be connected to reviewService in Phase 13)
  const [assignedPapers] = useState([
    {
      id: 'HOC-2027-104',
      title: 'Scalable Quantum Error Correction Algorithms using Surface Codes',
      track: 'Quantum Computing & Information Processing',
      assignedDate: '2026-07-21',
      deadline: '2026-08-15',
      status: 'PENDING',
      score: null,
    },
    {
      id: 'HOC-2027-052',
      title: 'Accelerating Large Language Model Inference with Quantized Neural Accelerators',
      track: 'Artificial Intelligence & Deep Learning',
      assignedDate: '2026-07-10',
      deadline: '2026-08-01',
      status: 'COMPLETED',
      score: 4,
    },
  ]);

  return (
    <div className="py-4 bg-light min-vh-100">
      <div className="container">
        
        {/* Welcome Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-3 border-bottom">
          <div>
            <h2 className="fw-bold font-heading text-vjti-maroon mb-1">
              Reviewer Dashboard
            </h2>
            <p className="text-muted small mb-0">
              Technical Program Reviewer: <strong>{user?.fullName || user?.username}</strong> ({user?.affiliation || 'VJTI Reviewer'})
            </p>
          </div>
          <div className="mt-3 mt-md-0">
            <span className="badge bg-vjti-maroon text-vjti-gold font-monospace px-3 py-2">
              TPC MEMBER
            </span>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="row g-3 mb-4">
          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-primary">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Assigned Papers</div>
                  <h3 className="fw-bold text-primary mb-0">{assignedPapers.length}</h3>
                </div>
                <div className="bg-primary-subtle text-primary p-3 rounded-circle">
                  <i className="bi bi-file-earmark-text fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-warning">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Pending Reviews</div>
                  <h3 className="fw-bold text-warning mb-0">
                    {assignedPapers.filter((p) => p.status === 'PENDING').length}
                  </h3>
                </div>
                <div className="bg-warning-subtle text-warning p-3 rounded-circle">
                  <i className="bi bi-clock-history fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-success">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Completed Reviews</div>
                  <h3 className="fw-bold text-success mb-0">
                    {assignedPapers.filter((p) => p.status === 'COMPLETED').length}
                  </h3>
                </div>
                <div className="bg-success-subtle text-success p-3 rounded-circle">
                  <i className="bi bi-check-all fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-danger">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Review Deadline</div>
                  <h5 className="fw-bold text-danger mb-0 font-monospace">Aug 15, 2026</h5>
                </div>
                <div className="bg-danger-subtle text-danger p-3 rounded-circle">
                  <i className="bi bi-calendar-check fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assigned Papers Table */}
        <div className="card border-0 shadow-sm rounded-4 mb-4 card-hoc">
          <div className="card-header bg-white py-3 border-0 d-flex justify-content-between align-items-center">
            <h5 className="fw-bold font-heading mb-0 text-vjti-maroon">
              <i className="bi bi-clipboard-check me-2"></i>Assigned Papers for Peer Review
            </h5>
            <span className="badge bg-light text-dark border">
              {assignedPapers.length} Assignments
            </span>
          </div>
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light text-muted small uppercase">
                <tr>
                  <th>Paper ID</th>
                  <th>Paper Title</th>
                  <th>Track</th>
                  <th>Assigned Date</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Score</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assignedPapers.map((paper) => (
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
                    <td className="small text-muted">{paper.assignedDate}</td>
                    <td className="small text-danger fw-semibold">{paper.deadline}</td>
                    <td>
                      {paper.status === 'COMPLETED' ? (
                        <span className="badge bg-success">Completed</span>
                      ) : (
                        <span className="badge bg-warning text-dark">Pending Review</span>
                      )}
                    </td>
                    <td className="fw-bold">
                      {paper.score ? `${paper.score} / 5` : '-'}
                    </td>
                    <td className="text-end">
                      <button className="btn btn-vjti-maroon btn-sm d-inline-flex align-items-center gap-1">
                        <i className="bi bi-pencil-square"></i>
                        <span>{paper.status === 'COMPLETED' ? 'Edit Review' : 'Start Review'}</span>
                      </button>
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

export default ReviewerDashboard;
