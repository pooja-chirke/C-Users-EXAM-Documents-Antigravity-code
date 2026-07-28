/**
 * VJTI HOC 2027 - Registration Fees & Guidelines Page
 * 
 * Production-ready page component detailing registration categories, fee tables,
 * VJTI bank transfer details (NEFT/RTGS/UPI), and payment proof verification instructions.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/Registration/RegistrationFeesPage.jsx
 */

import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

export const RegistrationFeesPage = () => {
  const feeCategories = [
    { category: 'AICTE approved Institutes Faculty/Research scholars', indianINR: 'FREE', foreignUSD: '$200', ieeeDiscount: 'FREE ' },
    { category: 'Industry Participation', indianINR: '₹ 4000', foreignUSD: '$ 180', ieeeDiscount: '₹ 5,500 / $ 150' },
    { category: 'Conference Proceeding', indianINR: '₹ 3000', foreignUSD: '$ 350', ieeeDiscount: '₹ 9,500 / $ 300' },
    { category: 'Book Chapter', indianINR: '₹ 2000', foreignUSD: '$ 120', ieeeDiscount: '₹ 3,500 / $ 100' },
    { category: 'Poster Presentation', indianINR: '₹ 1000', foreignUSD: '$ 120', ieeeDiscount: '₹ 3,500 / $ 100' },
  ];

  return (
    <MainLayout
      title="Registration & Fee Guidelines"
      subtitle="Category-wise fee structure, registration inclusions, and VJTI bank transfer details"
      badge="ATTEND HOC 2027"
    >
      {/* 1. Registration Fee Table */}
      <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white mb-5">
        <div className="card-body">
          <h3 className="fw-bold font-heading text-vjti-maroon mb-3 text-center">
            Registration Fee Structure
          </h3>
          <p className="text-muted text-center max-w-2xl mx-auto mb-4 small">
            Registration fees are inclusive of 18% GST. At least one author of each accepted paper must register at the Author Rate before the deadline.
          </p>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-dark bg-vjti-navy text-white uppercase small">
                <tr>
                  <th>Delegate Category</th>
                  <th>Indian Delegates (INR)</th>
                  <th>Foreign Delegates (USD)</th>
                  <th>IEEE / ACM Member Discount</th>
                </tr>
              </thead>
              <tbody>
                {feeCategories.map((cat, idx) => (
                  <tr key={idx}>
                    <td className="fw-semibold text-dark">{cat.category}</td>
                    <td className="fw-mono text-vjti-maroon font-semibold">{cat.indianINR}</td>
                    <td className="fw-mono text-primary font-semibold">{cat.foreignUSD}</td>
                    <td>
                      <span className="badge bg-success-subtle text-success font-monospace border border-success">
                        {cat.ieeeDiscount}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 2. Bank Details & Inclusions */}
      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-vjti-navy text-white h-100">
            <div className="card-body">
              <h4 className="fw-bold font-heading text-vjti-gold mb-3">
                <i className="bi bi-bank me-2"></i>VJTI Bank Account Details (NEFT/RTGS)
              </h4>
              <p className="text-white-50 small mb-4">
                Please transfer registration fees using the official bank details below and retain the Transaction ID / Receipt PDF.
              </p>

              <ul className="list-unstyled space-y-3 small text-white-50 mb-0">
                <li className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span>Account Name:</span>
                  <strong className="text-white">VJTI Conference Account</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span>Bank Name:</span>
                  <strong className="text-white">State Bank of India (SBI)</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span>Branch Name:</span>
                  <strong className="text-white">VJTI Campus, Matunga Branch</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span>Account Number:</span>
                  <strong className="text-vjti-gold font-monospace">30123456789</strong>
                </li>
                <li className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span>IFSC Code:</span>
                  <strong className="text-vjti-gold font-monospace">SBIN0001107</strong>
                </li>
                <li className="d-flex justify-content-between pb-1">
                  <span>Swift Code (Foreign Transfer):</span>
                  <strong className="text-white font-monospace">SBININBB107</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-light h-100">
            <div className="card-body">
              <h4 className="fw-bold font-heading text-vjti-maroon mb-3">
                <i className="bi bi-box-seam me-2"></i>Registration Fee Inclusions
              </h4>
              <ul className="space-y-3 text-muted small mb-4">
                <li className="d-flex items-start gap-2">
                  <i className="bi bi-check-circle-fill text-success mt-1"></i>
                  <span>Access to all Keynote Addresses, Technical Paper Sessions & Workshops.</span>
                </li>
                <li className="d-flex items-start gap-2">
                  <i className="bi bi-check-circle-fill text-success mt-1"></i>
                  <span>Official Conference Kit, Souvenir, and Electronic Proceedings Access.</span>
                </li>
                <li className="d-flex items-start gap-2">
                  <i className="bi bi-check-circle-fill text-success mt-1"></i>
                  <span>Lunch, High-Tea, and Official Banquet Dinner at VJTI Campus.</span>
                </li>
                <li className="d-flex items-start gap-2">
                  <i className="bi bi-check-circle-fill text-success mt-1"></i>
                  <span>Paper Presentation Certificate & Official Attendance Certificate.</span>
                </li>
              </ul>

              <div className="p-3 bg-white rounded-3 border">
                <h6 className="fw-bold text-dark mb-1">Upload Payment Proof</h6>
                <p className="extra-small text-muted mb-2">
                  After paying, log in to your account and upload your payment transaction proof for verification.
                </p>
                <Link to="/register" className="btn btn-vjti-maroon btn-sm fw-semibold w-100">
                  Register Account to Proceed
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegistrationFeesPage;
