/**
 * VJTI HOC 2027 - Keynote Speakers Page
 * 
 * Production-ready page component showcasing international Keynote Speakers,
 * presentation titles, abstracts, and professional bio profiles.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/Speakers/KeynoteSpeakersPage.jsx
 */

import React from 'react';
import MainLayout from '../../layouts/MainLayout';

export const KeynoteSpeakersPage = () => {
  const speakers = [
    {
      name: 'Dr. Aris Thorne',
      title: 'Head of Quantum Algorithms Lab',
      org: 'IBM Quantum Research, USA',
      topic: 'Fault-Tolerant Quantum Error Mitigation for NISQ Devices',
      abstract:
        'Explores recent breakthroughs in surface code error correction and hybrid quantum-classical algorithms operating on NISQ processors for chemistry and materials simulation.',
      icon: 'bi-cpu-fill',
    },
    {
      name: 'Prof. Hiroshi Tanaka',
      title: 'Chair Professor of Computer Science',
      org: 'Tokyo Institute of Technology, Japan',
      topic: 'Exascale Parallel Computing Architectures and Energy Efficiency',
      abstract:
        'Discusses design principles for next-generation exascale supercomputing clusters, focusing on GPU memory bandwidth optimization and green computing energy metrics.',
      icon: 'bi-speedometer2',
    },
    {
      name: 'Dr. Sophia Martinez',
      title: 'Principal AI Scientist',
      org: 'DeepMind / Oxford AI Institute, UK',
      topic: 'Scalable Multimodal Foundation Models and Trustworthy AI',
      abstract:
        'Examines modern generative foundation models, alignment strategies, and architectural innovations enabling scalable reasoning across multimodal datasets.',
      icon: 'bi-robot',
    },
  ];

  return (
    <MainLayout
      title={
        <>
          <div>Keynote Speakers</div>

          <div
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              fontSize: "32px",
              lineHeight: "1.6",
              marginTop: "8px",
              color: "#ffffff"
            }}
          >
            प्रमुख वक्ते
          </div>
        </>
      }

      subtitle={
        <>
          <div>
            World-renowned international experts delivering keynote addresses at
            VJTI SAQC 2027
          </div>

          <div
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              fontSize: "18px",
              lineHeight: "1.9",
              marginTop: "12px",
              color: "rgba(255,255,255,0.75)"
            }}
          >
            VJTI SAQC 2027 मध्ये प्रमुख व्याख्याने देणारे जागतिक स्तरावरील
            आंतरराष्ट्रीय तज्ज्ञ
          </div>
        </>
      }

      badge={
        <>
          <span>KEYNOTE ADDRESSES</span>

          <span
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              marginLeft: "12px"
            }}
          >
            प्रमुख व्याख्याने
          </span>
        </>
      }
    >
      <div className="row g-4 mb-5">
        {speakers.map((speaker, idx) => (
          <div className="col-12" key={idx}>
            <div className="card border-0 shadow-sm rounded-4 card-hoc bg-white overflow-hidden">
              <div className="card-body p-4 p-lg-5">
                <div className="row align-items-center g-4">

                  {/* Speaker Avatar & Bio Header */}
                  <div className="col-lg-4 text-center text-lg-start border-lg-end pr-lg-4">
                    <div className="bg-vjti-navy text-vjti-gold p-4 rounded-circle d-inline-flex mb-3 shadow" style={{ width: '80px', height: '80px' }}>
                      <i className={`bi ${speaker.icon} fs-1`}></i>
                    </div>
                    <h4 className="fw-bold font-heading text-vjti-maroon mb-1">
                      {speaker.name}
                    </h4>
                    <div className="fw-semibold text-dark small mb-1">{speaker.title}</div>
                    <span className="badge bg-vjti-gold text-dark font-monospace">{speaker.org}</span>
                  </div>

                  {/* Session Title & Abstract */}
                  <div className="col-lg-8">
                    <span className="badge bg-light text-muted border uppercase mb-2 font-monospace">Keynote Session</span>
                    <h4 className="fw-bold font-heading text-dark mb-3">
                      "{speaker.topic}"
                    </h4>
                    <p className="text-muted leading-relaxed small mb-0">
                      {speaker.abstract}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default KeynoteSpeakersPage;
