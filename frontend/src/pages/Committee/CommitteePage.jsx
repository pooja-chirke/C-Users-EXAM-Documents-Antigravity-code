/**
 * VJTI HOC 2027 - Organizing Committee Page
 * 
 * Production-ready page component detailing HOC 2027 leadership, General Chairs,
 * Track Chairs, Steering Committee, and International Advisory Board.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/Committee/CommitteePage.jsx
 */

import React from 'react';
import MainLayout from '../../layouts/MainLayout';

export const CommitteePage = () => {
  const patrons = [
    { name: 'Dr. Sunil Luthra', title: 'Director of the AICTE, New Delhi', role: 'Chief Patron' },
    { name: 'Dr. Sudhir Mehta', title: 'Chairperson, BOG, VJTI', role: 'Chief Patron' },
    { name: 'Dr. S.D.Kore', title: 'Director, VJTI', role: 'Chief Patron' },
  ];

  const trackChairs = [
    { name: 'Dr.S.T.Shingade', track: 'Applications for High Performance Computing', affiliation: 'VJTI Mumbai' },
    { name: 'Dr.S.S.Udmale', track: 'Artificial Intelligence Systems and Applications', affiliation: 'VJTI Mumbai' },
    { name: 'Dr.V.B.Nikam', track: 'Quantum Computing Systems & Applications', affiliation: 'VJTI Mumbai' },
    { name: 'Dr.M.R.Shirole', track: 'Optimization Techniques and Intelligent Computing', affiliation: 'VJTI Mumbai' },
    { name: 'Dr.M.M.Chandane', track: 'Sustainable Development through Advanced Computing', affiliation: 'VJTI Mumbai' },
  ];

  const tpcMembers = [
    { name: 'Dr. Amitav Mukherji', affiliation: 'IISc Bangalore' },
    { name: 'Prof. Elena Rostova', affiliation: 'TU Munich, Germany' },
    { name: 'Dr. Michael Chang', affiliation: 'National University of Singapore' },
    { name: 'Dr. Preeti Deshmukh', affiliation: 'COEP Technological University' },
    { name: 'Prof. Robert Taylor', affiliation: 'University of Edinburgh, UK' },
    { name: 'Dr. K. V. Ramakrishnan', affiliation: 'TIFR Mumbai' },
  ];

  return (
    <MainLayout
      title="Organizing Committee & Advisory Board"
      subtitle="Patrons, General Chairs, Track Chairs & Technical Program Committee"
      badge="CONFERENCE LEADERSHIP"
    >
      {/* 1. Chief Patrons & Leadership */}
      <div className="mb-5">
        <h3 className="fw-bold font-heading text-vjti-maroon mb-4 text-center">
          Chief Patrons & Academic Leadership
        </h3>
        <div className="row g-4 justify-content-center">
          {patrons.map((p, idx) => (
            <div className="col-md-5" key={idx}>
              <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white text-center h-100">
                <div className="card-body">
                  <div className="bg-vjti-maroon text-vjti-gold p-3 rounded-circle d-inline-flex mb-3 shadow-sm" style={{ width: '64px', height: '64px' }}>
                    <i className="bi bi-person-workspace fs-2"></i>
                  </div>
                  <span className="badge bg-vjti-gold text-dark font-monospace mb-2">{p.role}</span>
                  <h4 className="fw-bold text-dark mb-1">{p.name}</h4>
                  <p className="text-muted small mb-0">{p.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Track Chairs */}
      <div className="mb-5">
        <h3 className="fw-bold font-heading text-vjti-maroon mb-4 text-center">
          Technical Track Chairs
        </h3>
        <div className="row g-4">
          {trackChairs.map((tc, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-light text-center h-100">
                <div className="card-body">
                  <div className="bg-vjti-navy text-vjti-gold p-3 rounded-circle d-inline-flex mb-3 shadow-sm" style={{ width: '56px', height: '56px' }}>
                    <i className="bi bi-award fs-3"></i>
                  </div>
                  <h5 className="fw-bold text-dark mb-1">{tc.name}</h5>
                  <div className="small text-vjti-maroon fw-semibold mb-2">{tc.track}</div>
                  <span className="badge bg-white text-dark border small">{tc.affiliation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Technical Program Committee (TPC) */}
      <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white mb-5">
        <div className="card-body">
          <h4 className="fw-bold font-heading text-vjti-maroon mb-3 text-center">
            Technical Program Committee (TPC)
          </h4>
          <p className="text-muted text-center max-w-2xl mx-auto mb-4 small">
            International review committee ensuring double-blind peer review standards for HOC 2027.
          </p>
          <div className="row g-3">
            {tpcMembers.map((member, idx) => (
              <div className="col-md-4 col-sm-6" key={idx}>
                <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3">
                  <i className="bi bi-person-check-fill text-vjti-maroon fs-4"></i>
                  <div>
                    <strong className="d-block text-dark small">{member.name}</strong>
                    <span className="text-muted extra-small">{member.affiliation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommitteePage;
