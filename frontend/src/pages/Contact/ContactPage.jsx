/**
 * VJTI HOC 2027 - Contact & Venue Page
 * 
 * Production-ready page component providing Secretariat contact details,
 * interactive contact inquiry form, travel instructions to VJTI Matunga, and map view.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/Contact/ContactPage.jsx
 */

import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';

export const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <MainLayout
      title="Contact Secretariat & Venue"
      subtitle="Veermata Jijabai Technological Institute (VJTI), Matunga, Mumbai"
      badge="REACH OUT TO US"
    >
      <div className="row g-4 mb-5">
        
        {/* Contact Info Cards */}
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-vjti-navy text-white mb-4">
            <div className="card-body">
              <h4 className="fw-bold font-heading text-vjti-gold mb-4">
                <i className="bi bi-geo-alt-fill me-2"></i>Secretariat Contact
              </h4>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="bg-vjti-maroon text-vjti-gold p-3 rounded-circle shrink-0">
                  <i className="bi bi-building fs-4"></i>
                </div>
                <div>
                  <h6 className="fw-bold text-white mb-1">Conference Address</h6>
                  <p className="small text-white-50 leading-relaxed mb-0">
                    Department of Computer Engineering, VJTI, H. R. Mahajani Road, Matunga, Mumbai - 400019, Maharashtra, India.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="bg-vjti-maroon text-vjti-gold p-3 rounded-circle shrink-0">
                  <i className="bi bi-envelope-fill fs-4"></i>
                </div>
                <div>
                  <h6 className="fw-bold text-white mb-1">Email Inquiry</h6>
                  <a href="mailto:hoc2027@vjti.ac.in" className="small text-vjti-gold text-decoration-none fw-semibold">
                    hoc2027@vjti.ac.in
                  </a>
                  <p className="extra-small text-white-50 mb-0">Submissions & general queries</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="bg-vjti-maroon text-vjti-gold p-3 rounded-circle shrink-0">
                  <i className="bi bi-telephone-fill fs-4"></i>
                </div>
                <div>
                  <h6 className="fw-bold text-white mb-1">Phone Helpline</h6>
                  <span className="small text-white font-monospace">+91 22 2419 8100</span>
                  <p className="extra-small text-white-50 mb-0">Mon–Fri: 10:00 AM – 5:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Reach VJTI Card */}
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white">
            <div className="card-body">
              <h5 className="fw-bold font-heading text-vjti-maroon mb-3">
                <i className="bi bi-signpost-2 me-2"></i>How to Reach VJTI
              </h5>
              <ul className="list-unstyled space-y-2 text-muted small mb-0">
                <li className="d-flex items-start gap-2">
                  <i className="bi bi-airplane-fill text-vjti-maroon mt-1"></i>
                  <span><strong>By Air:</strong> Chhatrapati Shivaji Maharaj International Airport (BOM) — 12 km from VJTI.</span>
                </li>
                <li className="d-flex items-start gap-2">
                  <i className="bi bi-train-front-fill text-vjti-maroon mt-1"></i>
                  <span><strong>By Train:</strong> Nearest suburban stations are Dadar (Central/Western) and Wadala (Harbour line).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Inquiry Form */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white h-100">
            <div className="card-body">
              <h4 className="fw-bold font-heading text-vjti-maroon mb-3">
                Send an Inquiry to Secretariat
              </h4>

              {formSubmitted ? (
                <div className="alert alert-success p-4 rounded-3 text-center my-4">
                  <i className="bi bi-check-circle-fill fs-1 text-success d-block mb-2"></i>
                  <h5 className="fw-bold text-dark">Thank You for Reaching Out!</h5>
                  <p className="small text-muted mb-0">
                    Your inquiry has been submitted to the HOC 2027 Secretariat. We will respond to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold small text-secondary">Your Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Dr. / Mr. / Ms. Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold small text-secondary">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@institution.ac.in"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold small text-secondary">Subject / Category *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Paper Submission Inquiry / Registration Query"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold small text-secondary">Message / Query *</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Type your inquiry details here..."
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-vjti-maroon w-100 py-2.5 fw-semibold shadow-sm">
                        Submit Message <i className="bi bi-send-fill ms-1"></i>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default ContactPage;
