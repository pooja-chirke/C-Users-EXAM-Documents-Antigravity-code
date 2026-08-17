/**
 * VJTI HOC 2027 - About Conference Page
 *
 * Production-ready page component detailing HOC 2027 vision, objectives,
 * Scopus/IEEE indexing guidelines, hybrid presentation modes, award categories,
 * and eligible participants.
 *
 * @file VJTI-HOC-Conference/frontend/src/pages/About/AboutConferencePage.jsx
 */

import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

const workshopDescription = [
  "आजच्या डिजिटल युगामध्ये अभियांत्रिकी शिक्षण संस्थांनी शिक्षक, संशोधक आणि विद्यार्थ्यांना समांतर संगणन, उच्च कार्यक्षमता संगणन, कृत्रिम बुद्धिमत्ता, ग्राफिक्स प्रक्रिया आधारित संगणन आणि क्वांटम संगणन यांसारख्या प्रगत संगणन तंत्रज्ञानाचे ज्ञान व प्रात्यक्षिक अनुभव देणे आवश्यक झाले आहे.",

  "माहिती-केंद्रित अनुप्रयोग, सखोल शिक्षण प्रणाली, वैज्ञानिक सिम्युलेशन, मेघाधारित संरचना आणि क्वांटम तंत्रज्ञानाच्या वाढत्या वापरामुळे विस्तारक्षम आणि ऊर्जा-कार्यक्षम संगणन प्रणालींची मागणी वाढली आहे.",

  "ही कार्यशाळा सहभागींस आधुनिक संगणन संरचना, समांतर प्रोग्रामिंग पद्धती, कृत्रिम बुद्धिमत्ता प्रवेगन तंत्र, ग्राफिक्स प्रक्रिया आधारित संगणन आणि क्वांटम सिम्युलेशन फ्रेमवर्क यांचे सैद्धांतिक व प्रात्यक्षिक ज्ञान प्रदान करण्यासाठी आयोजित करण्यात येत आहे. या कार्यक्रमामध्ये महासंगणन, एमपीआय, ओपनएमपी, कुडा, कृत्रिम बुद्धिमत्ता आधारित उच्च कार्यक्षमता संगणन प्रणाली, सहयोगी संगणन आणि क्वांटम यंत्र शिक्षण यांसारख्या आधुनिक औद्योगिक व संशोधन प्रवाहांवर विशेष भर दिला जाईल.",

  "ही कार्यशाळा सहभागींस आंतरशाखीय संशोधन, प्रयोगशाळा विकास, उद्योग-अकादमिक सहकार्य आणि प्रकल्पाधारित शिक्षणासाठी प्रेरित करेल."
];

const objectives = [
  {
    icon: "bi-cpu",
    english: "To introduce participants to emerging trends in Advanced Computing.",
    marathi: "सहभागींस प्रगत संगणन क्षेत्रातील नवीन तंत्रज्ञानाची ओळख करून देणे."
  },
  {
    icon: "bi-translate",
    english: "To encourage technical learning in Marathi language.",
    marathi: "मराठी भाषेत तांत्रिक शिक्षणाला प्रोत्साहन देणे."
  },
  {
    icon: "bi-people-fill",
    english: "To create collaboration opportunities among academia and industry.",
    marathi: "उद्योग व शैक्षणिक संस्थांमध्ये सहकार्याच्या संधी निर्माण करणे."
  },
  {
    icon: "bi-hdd-network",
    english: "To develop awareness about Supercomputing and AI applications.",
    marathi: "महासंगणन आणि कृत्रिम बुद्धिमत्ता आधारित अनुप्रयोगांविषयी जागरूकता निर्माण करणे."
  },
];

export const AboutConferencePage = () => {
  return (
    <MainLayout
      title={
        <>
          <div>About SAQC 2027 Conference</div>

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
            SAQC २०२७ परिषदेविषयी
          </div>
        </>
      }

      subtitle={
        <>
          <div>
            International Conference on Supercomputing,Artificial Intelligence & Quantum Computing
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
            सुपरकॉम्प्युटिंग, कृत्रिम बुद्धिमत्ता आणि क्वांटम संगणनावरील आंतरराष्ट्रीय परिषद
          </div>
        </>
      }

      badge={
        <>
          <span>ABOUT THE CONFERENCE</span>

          <span
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              marginLeft: "12px"
            }}
          >
            परिषदेविषयी
          </span>
        </>
      }
    >
      <div className="row g-4 align-items-center mb-5">
        <div className="col-lg-7">
          <h3 className="fw-bold font-heading text-vjti-maroon mb-3">
            About The Program
          </h3>

          <p
            className="text-muted mb-3"
            style={{
              textAlign: "justify",
              lineHeight: "1.9",
              fontSize: "17px"
            }}
          >
            In the present digital era, academic institutions offering engineering education
            must equip faculty members, researchers, and students with knowledge and
            practical exposure in advanced computing paradigms including Parallel
            Computing, High Performance Computing (HPC), Artificial Intelligence,
            GPU Computing, and Quantum Computing. The rapid growth of data-intensive
            applications, deep learning systems, scientific simulations, cloud
            infrastructures, and quantum technologies has significantly increased the
            demand for scalable and energy-efficient computing platforms.
          </p>

          <p
            className="text-muted mb-4"
            style={{
              textAlign: "justify",
              lineHeight: "1.9",
              fontSize: "17px"
            }}
          >
            This Conference is designed to provide participants with conceptual
            understanding and practical exposure to modern computing architectures,
            parallel programming models, AI acceleration techniques, GPU-enabled
            computing, and quantum simulation frameworks. The program focuses on
            current industrial and research trends including Supercomputing, MPI,
            OpenMP, CUDA, AI-driven HPC systems, heterogeneous computing, and
            Quantum Machine Learning. The workshop will also motivate participants
            toward interdisciplinary research, laboratory development, industry
            collaboration, and project-based learning using advanced computing
            technologies.
          </p>

          <h4 className="fw-bold text-vjti-maroon mb-3">
            कार्यक्रमाविषयी
          </h4>

          <div className="marathi-text">
            {workshopDescription.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted mb-3"
                style={{
                  textAlign: "justify",
                  lineHeight: "2",
                  fontSize: "17px",
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="row g-3 pt-3">

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-start border-4 border-primary shadow-sm rounded-4">
                <div className="card-body">

                  <h6 className="fw-bold text-dark mb-1">
                    <i className="bi bi-patch-check-fill text-primary me-2"></i>
                    Peer-Reviewed Quality
                  </h6>

                  <div
                    className="fw-semibold mb-2"
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                      color: "#800000",
                      fontSize: "15px"
                    }}
                  >
                    समकक्ष पुनरावलोकन गुणवत्ता
                  </div>

                  <p className="small text-muted mb-2">
                    Double-blind peer review by an international technical committee to
                    ensure originality, technical quality, and research excellence.
                  </p>

                  <p
                    className="small mb-0"
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                      lineHeight: "1.8",
                      textAlign: "justify"
                    }}
                  >
                    संशोधन लेखांतील मौलिकता, तांत्रिक गुणवत्ता आणि संशोधनातील
                    उत्कृष्टता सुनिश्चित करण्यासाठी आंतरराष्ट्रीय तांत्रिक समितीकडून
                    दुहेरी-अंध (Double-Blind) समकक्ष पुनरावलोकन करण्यात येईल.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-start border-4 border-warning shadow-sm rounded-4">
                <div className="card-body">

                  <h6 className="fw-bold text-dark mb-1">
                    <i className="bi bi-award-fill text-warning me-2"></i>
                    Best Paper Recognition
                  </h6>

                  <div
                    className="fw-semibold mb-2"
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                      color: "#800000",
                      fontSize: "15px"
                    }}
                  >
                    सर्वोत्कृष्ट संशोधन लेख पुरस्कार
                  </div>

                  <p className="small text-muted mb-2">
                    Awards will be presented to outstanding research papers from each
                    technical track.
                  </p>

                  <p
                    className="small mb-0"
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                      lineHeight: "1.8",
                      textAlign: "justify"
                    }}
                  >
                    प्रत्येक तांत्रिक विभागातील उत्कृष्ट संशोधन कार्यासाठी निवडलेल्या
                    संशोधन लेखांना 'सर्वोत्कृष्ट संशोधन लेख पुरस्कार' प्रदान करण्यात येईल.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-start border-4 border-success shadow-sm rounded-4">
                <div className="card-body">

                  <h6 className="fw-bold text-dark mb-1">
                    <i className="bi bi-people-fill text-success me-2"></i>
                    Who Can Participate
                  </h6>

                  <div
                    className="fw-semibold mb-2"
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                      color: "#800000",
                      fontSize: "15px"
                    }}
                  >
                    कोण सहभागी होऊ शकतात?
                  </div>

                  <p
                    className="small text-muted mb-2"
                    style={{
                      lineHeight: "1.7"
                    }}
                  >
                    Faculty members of AICTE-approved institutions, Research Scholars,
                    M.Tech/PG Scholars, Research Fellows, and working professionals
                    from industry.
                  </p>

                  <p
                    className="small mb-0"
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                      lineHeight: "1.8",
                      textAlign: "justify"
                    }}
                  >
                    AICTE मान्यताप्राप्त संस्थांमधील प्राध्यापक, संशोधक,
                    M.Tech/PG विद्यार्थी, संशोधन फेलो तसेच उद्योग क्षेत्रातील
                    कार्यरत व्यावसायिक या परिषदेत सहभागी होऊ शकतात.
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="col-lg-5">

          <div className="card border-0 shadow rounded-4 p-4 bg-vjti-navy text-white h-100">

            <div className="card-body">

              <h4 className="fw-bold text-vjti-gold mb-4">
                <i className="bi bi-info-circle me-2"></i>
                Quick Facts
              </h4>

              <ul className="list-unstyled mb-0">

                <li className="border-bottom border-secondary pb-3 mb-3">
                  <strong>Host Institution</strong><br />
                  <span>VJTI Mumbai</span><br />
                  <small
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    यजमान संस्था : वीरमाता जिजाबाई तंत्रज्ञान संस्था, मुंबई
                  </small>
                </li>

                <li className="border-bottom border-secondary pb-3 mb-3">
                  <strong>Dates</strong><br />
                  <span className="text-vjti-gold">8-9 January 2027</span><br />
                  <small
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    दिनांक : ८-९ जानेवारी २०२७
                  </small>
                </li>

                <li className="border-bottom border-secondary pb-3 mb-3">
                  <strong>Format</strong><br />
                  <span>Offline Conference</span><br />
                  <small
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    स्वरूप : प्रत्यक्ष
                  </small>
                </li>

                <li className="border-bottom border-secondary pb-3 mb-3">
                  <strong>Submission Deadline</strong><br />
                  <span>30 September 2026</span><br />
                  <small
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    अंतिम दिनांक : ३० सप्टेंबर २०२६
                  </small>
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

      <div className="card border-0 shadow rounded-4 p-5 mb-5 bg-white">

        <div className="card-body">

          <div className="text-center mb-5">

            <h2
              className="fw-bold"
              style={{
                color: "#800000",
                fontSize: "42px"
              }}
            >
              Program Objectives
            </h2>

            <div
              style={{
                width: "90px",
                height: "4px",
                background: "#FFD700",
                margin: "15px auto",
                borderRadius: "20px"
              }}
            ></div>

            <h4
              style={{
                fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                color: "#800000",
                fontWeight: "700"
              }}
            >
              उद्दिष्टे
            </h4>

          </div>

          <div className="row g-4">

            {objectives.map((item, index) => (

              <div className="col-lg-6" key={index}>

                <div
                  className="card border-0 shadow rounded-4 h-100"
                  style={{
                    borderLeft: "6px solid #800000",
                    transition: "all .3s ease",
                    background: "#fff"
                  }}
                >

                  <div className="card-body d-flex align-items-start p-4">

                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center me-4"
                      style={{
                        width: "70px",
                        height: "70px",
                        minWidth: "70px",
                        background: "#800000",
                        color: "#FFD700"
                      }}
                    >
                      <i className={`bi ${item.icon} fs-2`}></i>
                    </div>

                    <div>

                      <span
                        className="badge mb-2"
                        style={{
                          background: "#FFD700",
                          color: "#800000",
                          fontSize: "13px"
                        }}
                      >
                        Objective {index + 1}
                      </span>

                      <h6
                        className="fw-bold mb-2"
                        style={{
                          color: "#1f2937",
                          lineHeight: "1.6",
                          fontSize: "17px"
                        }}
                      >
                        {item.english}
                      </h6>

                      <p
                        className="mb-0"
                        style={{
                          fontFamily:
                            "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                          color: "#555",
                          lineHeight: "1.9",
                          fontSize: "16px",
                          textAlign: "justify"
                        }}
                      >
                        {item.marathi}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      <div className="bg-vjti-navy text-white rounded-4 p-5 text-center shadow-sm">

        <h3 className="fw-bold font-heading text-white mb-3">
          Participate in SAQC 2027
        </h3>

        <h5
          className="fw-bold text-vjti-gold mb-3"
          style={{
            fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
            lineHeight: "1.8"
          }}
        >
          SAQC २०२७ मध्ये सहभागी व्हा
        </h5>

        <p className="text-white-50 max-w-2xl mx-auto mb-2 fs-6">
          Submit your original research paper or register as a conference delegate.
        </p>

        <p
          className="text-white-50 max-w-2xl mx-auto mb-4 fs-6"
          style={{
            fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
            lineHeight: "1.9"
          }}
        >
          आपला मौलिक संशोधन लेख सादर करा किंवा परिषद प्रतिनिधी म्हणून नोंदणी करा.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">

          <Link
            to="/submission"
            className="btn btn-vjti-gold fw-bold px-4"
          >
            <span>Submit Paper</span>
            <span
              className="ms-2"
              style={{
                fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
              }}
            >
              संशोधन लेख सादर करा
            </span>
          </Link>

          <Link
            to="/registration"
            className="btn btn-outline-light fw-semibold px-4"
          >
            <span>Registration Fees</span>
            <span
              className="ms-2"
              style={{
                fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
              }}
            >
              नोंदणी शुल्क
            </span>
          </Link>

        </div>
      </div>

    </MainLayout>
  );
};

export default AboutConferencePage;