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
      id: "track-1",

      title: "Applications for High Performance Computing",
      marathiTitle: "उच्च कार्यक्षमता संगणन (High Performance Computing) अनुप्रयोग",
      icon: "bi-cpu-fill",
      bgHeader: "bg-info",

      description:
        "Focuses on applications of High Performance Computing (HPC), including Parallel Computing, Distributed Computing, Supercomputing Architectures, GPU Computing, Cloud and Edge Computing, Exascale Computing, and HPC Applications.",

      marathiDescription:
        "उच्च कार्यक्षमता संगणन (High Performance Computing) अनुप्रयोगांवर आधारित ट्रॅक. यामध्ये समांतर संगणन, वितरित संगणन, सुपरकॉम्प्युटिंग संरचना, GPU संगणन, क्लाउड व एज संगणन, एक्सास्केल संगणन तसेच HPC आधारित अनुप्रयोगांचा समावेश आहे.",

      icon: "bi-cpu-fill",
      subtopics: [
        "Parallel Computing",
        "Distributed Computing",
        "Supercomputing Architectures",
        "GPU Computing",
        "Cloud and Edge Computing",
        "Exascale Computing",
        "High Performance Computing (HPC) Applications"
      ],

      marathiSubtopics: [
        "समांतर संगणन (Parallel Computing)",
        "वितरित संगणन (Distributed Computing)",
        "सुपरकॉम्प्युटिंग संरचना",
        "GPU संगणन",
        "क्लाउड व एज संगणन",
        "एक्सास्केल संगणन",
        "उच्च कार्यक्षमता संगणन (HPC) आधारित अनुप्रयोग"
      ]
    },
    {
      id: "track-2",

      title: "Artificial Intelligence Systems & Applications",
      marathiTitle: "कृत्रिम बुद्धिमत्ता प्रणाली व अनुप्रयोग",
      icon: "bi-robot",
      bgHeader: "bg-vjti-maroon",

      description:
        "Covers Artificial Intelligence systems and applications including Machine Learning, Deep Learning, Generative AI, Computer Vision, Natural Language Processing, Intelligent Systems, Explainable AI, and AI-based Applications.",

      marathiDescription:
        "कृत्रिम बुद्धिमत्ता प्रणाली व अनुप्रयोगांवर आधारित ट्रॅक. यामध्ये मशीन लर्निंग, डीप लर्निंग, जनरेटिव्ह AI, संगणकीय दृष्टि, नैसर्गिक भाषा प्रक्रिया (NLP), बुद्धिमान प्रणाली, स्पष्टीकरणीय AI तसेच AI आधारित अनुप्रयोगांचा समावेश आहे.",

      subtopics: [
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "Computer Vision",
        "Natural Language Processing (NLP)",
        "Intelligent Systems",
        "Explainable AI (XAI)",
        "AI-based Applications"
      ],

      marathiSubtopics: [
        "मशीन लर्निंग",
        "डीप लर्निंग",
        "जनरेटिव्ह कृत्रिम बुद्धिमत्ता (Generative AI)",
        "संगणकीय दृष्टि (Computer Vision)",
        "नैसर्गिक भाषा प्रक्रिया (NLP)",
        "बुद्धिमान प्रणाली",
        "स्पष्टीकरणीय कृत्रिम बुद्धिमत्ता (Explainable AI)",
        "कृत्रिम बुद्धिमत्ता आधारित अनुप्रयोग"
      ]
    },

    {
      id: "track-3",

      title: "Quantum Computing Systems & Applications",
      marathiTitle: "क्वांटम संगणन प्रणाली व अनुप्रयोग",
      icon: "bi-lightning-charge-fill",
      bgHeader: "bg-primary",

      description:
        "Focuses on Quantum Computing systems and applications including Quantum Algorithms, Quantum Information Processing, Quantum Communication, Quantum Cryptography, Quantum Machine Learning, and Quantum Hardware Technologies.",

      marathiDescription:
        "क्वांटम संगणन प्रणाली व अनुप्रयोगांवर आधारित ट्रॅक. यामध्ये क्वांटम अल्गोरिदम, क्वांटम माहिती प्रक्रिया, क्वांटम संप्रेषण, क्वांटम क्रिप्टोग्राफी, क्वांटम मशीन लर्निंग तसेच क्वांटम हार्डवेअर तंत्रज्ञानाचा समावेश आहे.",

      subtopics: [
        "Quantum Algorithms",
        "Quantum Information Processing",
        "Quantum Communication",
        "Quantum Cryptography",
        "Quantum Machine Learning",
        "Quantum Hardware Technologies"
      ],

      marathiSubtopics: [
        "क्वांटम अल्गोरिदम",
        "क्वांटम माहिती प्रक्रिया",
        "क्वांटम संप्रेषण",
        "क्वांटम क्रिप्टोग्राफी",
        "क्वांटम मशीन लर्निंग",
        "क्वांटम हार्डवेअर तंत्रज्ञान"
      ]
    },
    {
      id: "track-4",

      title: "Optimization Techniques & Intelligent Computing",
      marathiTitle: "ऑप्टिमायझेशन तंत्रे व बुद्धिमान संगणन",
      icon: "bi-diagram-3-fill",
      bgHeader: "bg-secondary",

      description:
        "Dedicated to Optimization Techniques and Intelligent Computing covering Metaheuristic Algorithms, Evolutionary Computing, Swarm Intelligence, Multi-objective Optimization, Operations Research, Computational Optimization, and Real-world Optimization Applications.",

      marathiDescription:
        "ऑप्टिमायझेशन तंत्रे व बुद्धिमान संगणनावर आधारित ट्रॅक. यामध्ये मेटाह्युरिस्टिक अल्गोरिदम, उत्क्रांती संगणन, स्वॉर्म इंटेलिजन्स, बहुउद्देशीय ऑप्टिमायझेशन, ऑपरेशन्स रिसर्च, संगणकीय ऑप्टिमायझेशन तसेच प्रत्यक्ष जीवनातील ऑप्टिमायझेशन अनुप्रयोगांचा समावेश आहे.",

      subtopics: [
        "Metaheuristic Algorithms",
        "Evolutionary Computing",
        "Swarm Intelligence",
        "Multi-objective Optimization",
        "Operations Research",
        "Computational Optimization",
        "Real-world Optimization Applications"
      ],

      marathiSubtopics: [
        "मेटाह्युरिस्टिक अल्गोरिदम",
        "उत्क्रांती संगणन (Evolutionary Computing)",
        "स्वॉर्म इंटेलिजन्स",
        "बहुउद्देशीय ऑप्टिमायझेशन",
        "ऑपरेशन्स रिसर्च",
        "संगणकीय ऑप्टिमायझेशन",
        "प्रत्यक्ष जीवनातील ऑप्टिमायझेशन अनुप्रयोग"
      ]
    },

    {
      id: "track-5",
      title: "Sustainable Development through Advanced Computing",
      marathiTitle: "प्रगत संगणनाद्वारे शाश्वत विकास",
      icon: "bi-globe-central-south-asia",
      bgHeader: "bg-success",

      description:
        "Highlights Sustainable Development through Advanced Computing technologies including Smart Cities, Green Computing, Sustainable Agriculture, Climate Modeling, Energy Optimization, Healthcare Innovations, and Tech-powered Sustainable Solutions.",

      marathiDescription:
        "प्रगत संगणनाद्वारे शाश्वत विकासावर आधारित ट्रॅक. यामध्ये स्मार्ट शहरे, हरित संगणन, शाश्वत शेती, हवामान मॉडेलिंग, ऊर्जा ऑप्टिमायझेशन, आरोग्यसेवा नवकल्पना तसेच तंत्रज्ञानाधारित शाश्वत उपाययोजनांचा समावेश आहे.",

      subtopics: [
        "Smart Cities",
        "Green Computing",
        "Sustainable Agriculture",
        "Climate Modeling",
        "Energy Optimization",
        "Healthcare Innovations",
        "Tech-powered Sustainable Solutions"
      ],

      marathiSubtopics: [
        "स्मार्ट शहरे",
        "हरित संगणन (Green Computing)",
        "शाश्वत शेती",
        "हवामान मॉडेलिंग",
        "ऊर्जा ऑप्टिमायझेशन",
        "आरोग्यसेवा नवकल्पना",
        "तंत्रज्ञानाधारित शाश्वत उपाययोजना"
      ]
    }
  ];



  return (
    <MainLayout
      title={
        <>
          <div>Technical Tracks & Research Scope</div>

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
            तांत्रिक विभाग आणि संशोधनाची व्याप्ती
          </div>
        </>
      }

      subtitle={
        <>
          <div>
            Detailed sub-topics across Quantum Computing, Artificial Intelligence
            & High Performance Computing
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
            क्वांटम संगणन, कृत्रिम बुद्धिमत्ता आणि उच्च कार्यक्षमता संगणन
            या क्षेत्रांतील विविध उपविषयांची सविस्तर माहिती
          </div>
        </>
      }

      badge={
        <>
          <span>DOMAINS & SCOPE</span>

          <span
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              marginLeft: "12px"
            }}
          >
            तांत्रिक विभाग आणि व्याप्ती
          </span>
        </>
      }
    >
      <div className="row g-4 mb-5">

        {tracksList.map((track) => (

          <div className="col-12" key={track.id} id={track.id}>

            <div className="card border-0 shadow-sm rounded-4 card-hoc overflow-hidden bg-white">

              {/* Header */}
              <div
                className={`${track.bgHeader} text-white p-4 d-flex align-items-center justify-content-between`}
              >
                <div className="d-flex align-items-center gap-3">

                  <div className="bg-vjti-gold text-dark p-3 rounded-3 d-flex align-items-center justify-content-center shadow-sm">
                    <i className={`bi ${track.icon} fs-3`}></i>
                  </div>

                  <div>
                    <span className="badge bg-vjti-gold text-dark font-monospace mb-1">
                      {track.number}
                    </span>

                    <div>

                      <span className="badge bg-vjti-gold text-dark font-monospace mb-2">
                        {track.number}
                      </span>

                      <h3 className="fw-bold text-white mb-1">
                        {track.title}
                      </h3>

                      <h5
                        className="mb-0"
                        style={{
                          fontFamily:
                            "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                          color: "#FFD700",
                          fontWeight: "500",
                          fontSize: "20px"
                        }}
                      >
                        {track.marathiTitle}
                      </h5>

                    </div>
                  </div>

                </div>
              </div>

              {/* Body */}
              <div className="card-body p-4 p-lg-5">

                {/* English Description */}

                <p
                  className="text-muted mb-2"
                  style={{
                    textAlign: "justify",
                    lineHeight: "1.8"
                  }}
                >
                  {track.description}
                </p>

                {/* Marathi Description */}

                <p
                  className="mb-4"
                  style={{
                    fontFamily:
                      "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                    color: "#555",
                    textAlign: "justify",
                    lineHeight: "2"
                  }}
                >
                  {track.marathiDescription}
                </p>

                {/* Heading */}

                <h5 className="fw-bold font-heading text-vjti-maroon mb-1">
                  <i className="bi bi-list-stars me-2"></i>
                  Target Research Sub-Topics
                </h5>

                <h6
                  className="mb-3"
                  style={{
                    fontFamily:
                      "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                    color: "#7a5403ff"
                  }}
                >
                  संशोधन उपविषय
                </h6>

                {/* Topics */}

                <div className="row g-3">

                  {track.subtopics.map((topic, idx) => (

                    <div className="col-md-6" key={idx}>

                      <div className="p-3 bg-light rounded-3 d-flex align-items-start gap-3 h-100">

                        <i className="bi bi-check-circle-fill text-vjti-maroon mt-1"></i>

                        <div>

                          {/* English */}

                          <div
                            className="fw-semibold"
                            style={{
                              color: "#222",
                              fontSize: "15px"
                            }}
                          >
                            {topic}
                          </div>

                          {/* Marathi */}

                          <div
                            style={{
                              fontFamily:
                                "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                              color: "#666",
                              fontSize: "14px",
                              marginTop: "4px",
                              lineHeight: "1.8"
                            }}
                          >
                            {track.marathiSubtopics &&
                              track.marathiSubtopics[idx]}
                          </div>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

                {/* Bottom */}

                <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center flex-wrap gap-3">

                  <div>

                    <div className="small text-muted">
                      Ready to submit to <strong>{track.title}</strong>?
                    </div>

                    <div
                      style={{
                        fontFamily:
                          "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                        color: "#666",
                        fontSize: "14px"
                      }}
                    >
                      या ट्रॅकमध्ये संशोधन लेख सादर करण्यासाठी तयार आहात?
                    </div>

                  </div>

                  <Link
                    to="/submission"
                    className="btn btn-vjti-maroon btn-sm fw-semibold px-4 shadow-sm"
                  >
                    <div className="text-center">

                      <div>Submit Paper</div>

                      <small
                        style={{
                          fontFamily:
                            "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                        }}
                      >
                        संशोधन लेख सादर करा
                      </small>

                    </div>
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
