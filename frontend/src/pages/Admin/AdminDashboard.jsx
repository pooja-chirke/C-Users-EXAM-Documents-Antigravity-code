/**
 * VJTI HOC 2027 - Admin Dashboard Page
 * 
 * Production-ready dashboard for System Administrators.
 * Displays global conference metrics, user account management, RBAC role assignments,
 * technical track configurations, and system audit shortcuts.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/Admin/AdminDashboard.jsx
 */

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export const AdminDashboard = () => {
  const { user } = useAuth();

  // Sample system users state for UI layout (to be connected to userService)
  const [users] = useState([
    {
      id: 1,
      fullName: 'VJTI HOC Admin',
      username: 'admin',
      email: 'admin@vjti.ac.in',
      affiliation: 'VJTI Mumbai',
      roles: ['ROLE_ADMIN'],
    },
    {
      id: 2,
      fullName: 'Dr. Rajesh Sharma',
      username: 'rsharma',
      email: 'rsharma@vjti.ac.in',
      affiliation: 'VJTI Department of Computer Engineering',
      roles: ['ROLE_CHAIR', 'ROLE_REVIEWER'],
    },
    {
      id: 3,
      fullName: 'Prof. Ananya Roy',
      username: 'ananya_roy',
      email: 'ananya@iitb.ac.in',
      affiliation: 'IIT Bombay',
      roles: ['ROLE_AUTHOR'],
    },
  ]);

  return (
    <div className="py-4 bg-light min-vh-100">
      <div className="container">
        
        {/* Welcome Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-3 border-bottom">
          <div>
            <h2 className="fw-bold font-heading text-vjti-maroon mb-1">
              System Admin Dashboard
            </h2>
            <p className="text-muted small mb-0">
              Logged in as Administrator: <strong>{user?.fullName || user?.username}</strong> ({user?.email})
            </p>
          </div>
          <div className="mt-3 mt-md-0 d-flex gap-2">
            <button className="btn btn-vjti-maroon btn-sm d-inline-flex align-items-center gap-1">
              <i className="bi bi-plus-circle"></i>
              <span>Create Track</span>
            </button>
            <button className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-1">
              <i className="bi bi-gear-fill"></i>
              <span>System Settings</span>
            </button>
          </div>
        </div>

        {/* Global Metric Cards Row */}
        <div className="row g-3 mb-4">
          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-primary">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Registered Users</div>
                  <h3 className="fw-bold text-primary mb-0">142</h3>
                </div>
                <div className="bg-primary-subtle text-primary p-3 rounded-circle">
                  <i className="bi bi-people-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-success">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Total Submissions</div>
                  <h3 className="fw-bold text-success mb-0">86</h3>
                </div>
                <div className="bg-success-subtle text-success p-3 rounded-circle">
                  <i className="bi bi-journal-text fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-warning">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Active Reviewers</div>
                  <h3 className="fw-bold text-warning mb-0">28</h3>
                </div>
                <div className="bg-warning-subtle text-warning p-3 rounded-circle">
                  <i className="bi bi-person-check-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card border-0 shadow-sm rounded-3 p-3 card-hoc bg-white border-start border-4 border-info">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">Verified Payments</div>
                  <h3 className="fw-bold text-info mb-0">34</h3>
                </div>
                <div className="bg-info-subtle text-info p-3 rounded-circle">
                  <i className="bi bi-cash-stack fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Account Management Table */}
        <div className="card border-0 shadow-sm rounded-4 mb-4 card-hoc">
          <div className="card-header bg-white py-3 border-0 d-flex justify-content-between align-items-center">
            <h5 className="fw-bold font-heading mb-0 text-vjti-maroon">
              <i className="bi bi-shield-lock me-2"></i>User Management & RBAC Authority
            </h5>
            <span className="badge bg-light text-dark border">
              {users.length} Users Listed
            </span>
          </div>
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light text-muted small uppercase">
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Username / Email</th>
                  <th>Institution / Affiliation</th>
                  <th>Assigned Roles</th>
                  <th className="text-end">Admin Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td className="fw-mono text-muted">{u.id}</td>
                    <td className="fw-semibold text-dark">{u.fullName}</td>
                    <td>
                      <div className="small font-monospace">{u.username}</div>
                      <div className="small text-muted">{u.email}</div>
                    </td>
                    <td className="small text-muted">{u.affiliation}</td>
                    <td>
                      <div className="d-flex gap-1 flex-wrap">
                        {u.roles.map((role) => (
                          <span
                            key={role}
                            className={`badge ${
                              role === 'ROLE_ADMIN'
                                ? 'bg-danger'
                                : role === 'ROLE_CHAIR'
                                ? 'bg-warning text-dark'
                                : role === 'ROLE_REVIEWER'
                                ? 'bg-info text-dark'
                                : 'bg-secondary'
                            }`}
                          >
                            {role.replace('ROLE_', '')}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="text-end">
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-primary" title="Manage User Roles">
                          <i className="bi bi-shield-plus me-1"></i>Roles
                        </button>
                        <button className="btn btn-outline-secondary" title="View Audit Logs">
                          <i className="bi bi-list-task me-1"></i>Logs
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

export default AdminDashboard;
