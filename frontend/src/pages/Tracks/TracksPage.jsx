/**
 * VJTI HOC 2027 - Technical Tracks Page
 * 
 * Production-ready page component detailing all technical conference tracks
 * (Quantum Computing, AI, High Performance Computing) and research sub-topics.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/Tracks/TracksPage.jsx
 */

import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

export const TracksPage = () => {
  const tracksList = [
    {
      id: 'track-1',
      number: 'Track 1',
      title: 'Quantum Computing & Information Processing',
      icon: 'bi-cpu-fill',
      bgHeader: 'bg-vjti-navy',
      description:
        'Focuses on theoretical, algorithmic, and physical aspects of quantum information processing systems, quantum error mitigation, and quantum-classical hybrid architectures.',
      subtopics: [
        'Quantum Algorithms, Circuit Optimization & Complexity',
        'Quantum Error Correction Surface Codes & Fault Tolerance',
        'Quantum Key Distribution (QKD) & Post-Quantum Cryptography',
        'Quantum Machine Learning (QML) & Neural Network Simulators',
        'Noisy Intermediate-Scale Quantum (NISQ) Hardware Implementations',
        'Quantum Sensing, Metrology & Information Theory',
      ],
    },
    {
      id: 'track-2',
      number: 'Track 2',
      title: 'Artificial Intelligence & Deep Learning',
      icon: 'bi-robot',
      bgHeader: 'bg-vjti-maroon',
      description:
        'Explores advancements in scalable AI models, generative architectures, natural language understanding, computer vision, and trustworthy AI implementations.',
      subtopics: [
        'Generative AI, Foundation Models & Large Language Models (LLMs)',
        'Deep Learning Architectures, Transformers & Attention Mechanisms',
        'Computer Vision, Image Processing & Video Analytics',
        'Natural Language Processing (NLP) & Multimodal AI Systems',
        'Reinforcement Learning, Autonomous Systems & Robotics',
        'Explainable AI (XAI), Ethics, Safety & Privacy-Preserving AI',
      ],
    },
    {
      id: 'track-3',
      number: 'Track 3',
      title: 'High Performance Computing & Cloud Architecture',
      icon: 'bi-speedometer2',
      bgHeader: 'bg-dark',
      description:
        'Dedicated to supercomputing infrastructure, exascale parallel algorithms, GPU/TPU cluster acceleration, and high-throughput cloud-edge systems.',
      subtopics: [
        'Exascale Supercomputing Architectures & Parallel Algorithms',
        'GPU, TPU & FPGA Heterogeneous Accelerator Systems',
        'Distributed Computing, Grid & High-Throughput Cluster Systems',
        'Cloud-Native Architectures, Microservices & Serverless Computing',
        'Energy-Aware & Green Supercomputing Infrastructure',
        'High-Performance Storage, I/O Subsystems & In-Memory Databases',
      ],
    },
  ];

  return (
    <MainLayout
      title="Technical Tracks & Research Scope"
      subtitle="Detailed sub-topics across Quantum Computing, Artificial Intelligence & High Performance Computing"
      badge="DOMAINS & SCOPE"
    >
      <div className="row g-4 mb-5">
        {tracksList.map((track) => (
          <div className="col-12" key={track.id} id={track.id}>
            <div className="card border-0 shadow-sm rounded-4 card-hoc overflow-hidden bg-white">
              <div className={`${track.bgHeader} text-white p-4 d-flex align-items-center justify-content-between`}>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-vjti-gold text-dark p-3 rounded-3 d-flex align-items-center justify-content-center shadow-sm">
                    <i className={`bi ${track.icon} fs-3`}></i>
                  </div>
                  <div>
                    <span className="badge bg-vjti-gold text-dark font-monospace mb-1">{track.number}</span>
                    <h3 className="fw-bold font-heading text-white mb-0">{track.title}</h3>
                  </div>
                </div>
              </div>

              <div className="card-body p-4 p-lg-5">
                <p className="text-muted leading-relaxed mb-4 fs-6">
                  {track.description}
                </p>

                <h5 className="fw-bold font-heading text-vjti-maroon mb-3">
                  <i className="bi bi-list-stars me-2"></i>Target Research Sub-Topics
                </h5>

                <div className="row g-3">
                  {track.subtopics.map((topic, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="p-3 bg-light rounded-3 d-flex align-items-start gap-2 h-100">
                        <i className="bi bi-check-circle-fill text-vjti-maroon mt-1 shrink-0"></i>
                        <span className="small text-dark font-medium">{topic}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <span className="small text-muted">
                    Ready to submit to <strong>{track.title}</strong>?
                  </span>
                  <Link to="/submission" className="btn btn-vjti-maroon btn-sm fw-semibold px-4 shadow-sm">
                    Submit Paper to {track.number} <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TracksPage;
