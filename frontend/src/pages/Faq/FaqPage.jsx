/**
 * VJTI HOC 2027 - Frequently Asked Questions (FAQ) Page
 * 
 * Production-ready page component built with Bootstrap 5 accordion UI,
 * categorizing FAQs for Paper Submissions, Proceedings Indexing, Registration, and Hybrid Attendance.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/Faq/FaqPage.jsx
 */

import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

export const FaqPage = () => {
  const faqs = [
    {
      id: 'faq-1',
      question: 'What is the page limit and formatting standard for paper submissions?',
      answer:
        'Full research papers should be between 6 and 8 pages in length including references, figures, and tables. All manuscripts must strictly follow the IEEE double-column conference template and be uploaded in PDF format.',
    },
    {
      id: 'faq-2',
      question: 'How is the double-blind review process enforced?',
      answer:
        'Author names, affiliations, email addresses, funding acknowledgments, and self-identifying citations must be removed from the initial paper PDF. Manuscripts showing author identity will be desk-rejected.',
    },
    {
      id: 'faq-3',
      question: 'Will accepted papers be published in indexed proceedings?',
      answer:
        'Yes. All accepted and presented research papers will be published in official proceedings submitted for indexing in Scopus and major scientific indexing databases.',
    },
    {
      id: 'faq-4',
      question: 'Can I present my research paper online if I cannot travel to Mumbai?',
      answer:
        'Yes. VJTI HOC 2027 operates in a hybrid format. Authors unable to travel in-person to VJTI Matunga can present their accepted paper virtually in scheduled online presentation sessions.',
    },
    {
      id: 'faq-5',
      question: 'Is at least one author registration mandatory for publication?',
      answer:
        'Yes. At least one author of each accepted paper must complete author registration and fee payment by the camera-ready deadline for the paper to be included in the proceedings program.',
    },
    {
      id: 'faq-6',
      question: 'How do I upload payment receipts after paying registration fees?',
      answer:
        'After making an NEFT/RTGS/UPI payment to the VJTI bank account, log in to your HOC 2027 user portal account and upload your payment transaction receipt PDF in your dashboard.',
    },
  ];

  return (
    <MainLayout
      title="Frequently Asked Questions (FAQ)"
      subtitle="Find quick answers regarding paper submissions, proceedings indexing, registration, and attendance"
      badge="HELP & FAQ"
    >
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          
          {/* Bootstrap 5 Accordion Container */}
          <div className="accordion shadow-sm rounded-4 border-0 card-hoc overflow-hidden" id="hocFaqAccordion">
            {faqs.map((faq, idx) => (
              <div className="accordion-item border-bottom" key={faq.id}>
                <h2 className="accordion-header" id={`heading-${faq.id}`}>
                  <button
                    className={`accordion-button font-heading fw-bold text-dark py-3 ${idx !== 0 ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${faq.id}`}
                    aria-expanded={idx === 0 ? 'true' : 'false'}
                    aria-controls={`collapse-${faq.id}`}
                  >
                    <i className="bi bi-question-circle text-vjti-maroon me-2 fs-5"></i>
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse-${faq.id}`}
                  className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                  aria-labelledby={`heading-${faq.id}`}
                  data-bs-parent="#hocFaqAccordion"
                >
                  <div className="accordion-body bg-light text-muted leading-relaxed small p-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Need Help Box */}
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-vjti-navy text-white text-center mt-5">
            <div className="card-body">
              <h4 className="fw-bold font-heading text-white mb-2">Still Have Questions?</h4>
              <p className="text-white-50 small max-w-2xl mx-auto mb-3">
                If you could not find the answer to your query, please feel free to reach out to our conference secretariat team.
              </p>
              <Link to="/contact" className="btn btn-vjti-gold fw-bold px-4">
                Contact Secretariat <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default FaqPage;
