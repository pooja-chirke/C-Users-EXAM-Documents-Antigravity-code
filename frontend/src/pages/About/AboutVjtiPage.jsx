/**
 * VJTI HOC 2027 - About VJTI Institute Page
 *
 * @file VJTI-HOC-Conference/frontend/src/pages/About/AboutVjtiPage.jsx
 */

import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

export const AboutVjtiPage = () => {
  return (
    <MainLayout
      title="About VJTI Institute"
      subtitle="Veermata Jijabai Technological Institute, Mumbai"
      badge="ABOUT VJTI"

      marathiTitle="VJTI संस्थेविषयी"
      marathiSubtitle="वीरमाता जिजाबाई तंत्रज्ञान संस्था, मुंबई"
      marathiBadge="VJTI विषयी"
    >

      {/* About VJTI */}
      <div className="row g-4 align-items-center mb-5">

        <div className="col-lg-7">

          <h3 className="fw-bold font-heading text-vjti-maroon mb-3">
            Legacy of Academic & Technological Excellence
          </h3>

          <h5
            className="fw-bold mb-3"
            style={{
              fontFamily:
                "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              color: "#800000"
            }}
          >
            शैक्षणिक व तांत्रिक उत्कृष्टतेची गौरवशाली परंपरा
          </h5>

          <p
            className="text-muted mb-3"
            style={{
              lineHeight: "1.9",
              textAlign: "left",
              fontSize: "17px"
            }}
          >
            <strong>
              Veermata Jijabai Technological Institute (VJTI)
            </strong>,
            located in Matunga, Mumbai, is one of India's oldest and most
            prestigious engineering institutions. Established in 1887 as
            Victoria Jubilee Technical Institute, VJTI has pioneered
            engineering education and industrial innovation for over 135 years.
          </p>

          <p
            className="text-muted mb-4"
            style={{
              fontFamily:
                "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              lineHeight: "2",
              textAlign: "left",
              fontSize: "17px"
            }}
          >
            वीरमाता जिजाबाई तंत्रज्ञान संस्था (VJTI), माटुंगा, मुंबई येथे
            स्थित असून, भारतातील सर्वात जुन्या आणि प्रतिष्ठित अभियांत्रिकी
            संस्थांपैकी एक आहे. सन १८८७ मध्ये व्हिक्टोरिया जुबिली टेक्निकल
            इन्स्टिट्यूट म्हणून स्थापन झालेल्या VJTI संस्थेने गेल्या १३५ हून
            अधिक वर्षांपासून अभियांत्रिकी शिक्षण आणि औद्योगिक नवोपक्रमाच्या
            क्षेत्रात महत्त्वपूर्ण योगदान दिले आहे.
          </p>

          <p
            className="text-muted mb-3"
            style={{
              lineHeight: "1.9",
              textAlign: "left",
              fontSize: "17px"
            }}
          >
            Autonomous since 2004, VJTI offers undergraduate, postgraduate,
            and doctoral research programs across Computer Engineering,
            High Performance Computing, Information Technology, Electrical
            Engineering, and Artificial Intelligence.
          </p>

          <p
            className="text-muted"
            style={{
              fontFamily:
                "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              lineHeight: "2",
              textAlign: "left",
              fontSize: "17px"
            }}
          >
            सन २००४ पासून स्वायत्त असलेल्या VJTI संस्थेमध्ये संगणक अभियांत्रिकी,
            उच्च कार्यक्षमता संगणन, माहिती तंत्रज्ञान, विद्युत अभियांत्रिकी
            आणि कृत्रिम बुद्धिमत्ता या क्षेत्रांमध्ये पदवी, पदव्युत्तर तसेच
            डॉक्टरेट संशोधन कार्यक्रम उपलब्ध आहेत.
          </p>

        </div>


        {/* Quick Facts */}
        <div className="col-lg-5">

          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white">

            <div className="card-body">

              <h4 className="fw-bold font-heading text-vjti-maroon mb-2">
                <i className="bi bi-building-check me-2"></i>
                VJTI At A Glance
              </h4>

              <h6
                className="fw-bold mb-3"
                style={{
                  fontFamily:
                    "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                  color: "#800000"
                }}
              >
                VJTI ची थोडक्यात माहिती
              </h6>

              <ul className="list-unstyled small text-muted mb-0">

                <li className="border-bottom pb-3 mb-3">
                  <strong>Year Established:</strong>
                  <br />
                  <span className="text-dark font-monospace">1887</span>
                  <br />
                  <span
                    style={{
                      fontFamily:
                        "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif"
                    }}
                  >
                    स्थापना वर्ष : १८८७
                  </span>
                </li>

                <li className="border-bottom pb-3 mb-3">
                  <strong>Status:</strong>
                  <br />
                  <span className="text-vjti-maroon">
                    Autonomous Institute
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily:
                        "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif"
                    }}
                  >
                    दर्जा : स्वायत्त संस्था
                  </span>
                </li>

                <li className="border-bottom pb-3 mb-3">
                  <strong>Location:</strong>
                  <br />
                  <span className="text-dark">
                    Matunga, Mumbai - 400019
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily:
                        "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif"
                    }}
                  >
                    ठिकाण : माटुंगा, मुंबई - ४०००१९
                  </span>
                </li>

                <li className="border-bottom pb-3 mb-3">
                  <strong>Host Department:</strong>
                  <br />
                  <span className="text-dark">
                    Computer Engineering & IT
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily:
                        "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif"
                    }}
                  >
                    यजमान विभाग : संगणक अभियांत्रिकी व माहिती तंत्रज्ञान
                  </span>
                </li>

                <li>
                  <strong>Official Website:</strong>
                  <br />

                  <a
                    href="https://vjti.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-vjti-maroon fw-semibold"
                  >
                    vjti.ac.in{" "}
                    <i className="bi bi-box-arrow-up-right small"></i>
                  </a>

                  <br />

                  <span
                    style={{
                      fontFamily:
                        "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif"
                    }}
                  >
                    अधिकृत संकेतस्थळ
                  </span>
                </li>

              </ul>

            </div>
          </div>

        </div>

      </div>


      {/* Host Department & Research Facilities */}
      <div className="row g-4 mb-5">

        {/* Computer Engineering */}
        <div className="col-md-6">

          <div className="card h-100 border-0 shadow-sm rounded-4 p-4 card-hoc bg-light">

            <div className="card-body">

              <div className="bg-vjti-maroon text-vjti-gold p-3 rounded-3 d-inline-flex mb-3 shadow-sm">
                <i className="bi bi-cpu-fill fs-3"></i>
              </div>

              <h4 className="fw-bold font-heading text-dark mb-2">
                Department of Computer Engineering
              </h4>

              <h6
                className="fw-bold mb-3"
                style={{
                  fontFamily:
                    "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                  color: "#800000"
                }}
              >
                संगणक अभियांत्रिकी विभाग
              </h6>

              <p className="text-muted small mb-2" style={{ lineHeight: "1.8" }}>
                The Department of Computer Engineering at VJTI is a center
                of excellence in High Performance Computing, Machine Learning,
                Data Science, and Cybersecurity.
              </p>

              <p
                className="text-muted small mb-0"
                style={{
                  fontFamily:
                    "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                  lineHeight: "2"
                }}
              >
                VJTI मधील संगणक अभियांत्रिकी विभाग हा उच्च कार्यक्षमता संगणन,
                मशीन लर्निंग, डेटा सायन्स आणि सायबर सुरक्षा या क्षेत्रांमध्ये
                उत्कृष्टतेचे केंद्र आहे.
              </p>

            </div>
          </div>

        </div>


        {/* Campus */}
        <div className="col-md-6">

          <div className="card h-100 border-0 shadow-sm rounded-4 p-4 card-hoc bg-light">

            <div className="card-body">

              <div className="bg-vjti-navy text-vjti-gold p-3 rounded-3 d-inline-flex mb-3 shadow-sm">
                <i className="bi bi-globe-americas fs-3"></i>
              </div>

              <h4 className="fw-bold font-heading text-dark mb-2">
                Campus & Connectivity
              </h4>

              <h6
                className="fw-bold mb-3"
                style={{
                  fontFamily:
                    "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                  color: "#800000"
                }}
              >
                परिसर व दळणवळण सुविधा
              </h6>

              <p className="text-muted small mb-2" style={{ lineHeight: "1.8" }}>
                VJTI’s Matunga campus features historic architecture alongside
                modern research auditoriums, digital seminar halls, and
                high-speed internet infrastructure.
              </p>

              <p
                className="text-muted small mb-0"
                style={{
                  fontFamily:
                    "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                  lineHeight: "2"
                }}
              >
                VJTI च्या माटुंगा परिसरामध्ये ऐतिहासिक वास्तुकलेसोबत आधुनिक
                संशोधन सभागृहे, डिजिटल सेमिनार हॉल आणि उच्च-गती इंटरनेट
                सुविधा उपलब्ध आहेत.
              </p>

            </div>
          </div>

        </div>

      </div>


      {/* CTA */}
      <div className="bg-vjti-navy text-white rounded-4 p-5 text-center shadow-sm">

        <h3 className="fw-bold font-heading text-white mb-3">
          Welcome to VJTI Mumbai for HOC 2027
        </h3>

        <h5
          className="fw-bold text-vjti-gold mb-3"
          style={{
            fontFamily:
              "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif"
          }}
        >
          HOC 2027 साठी VJTI मुंबईमध्ये आपले स्वागत आहे
        </h5>

        <p className="text-white-50 mb-2">
          We look forward to hosting international researchers and authors
          on our campus in Matunga, Mumbai.
        </p>

        <p
          className="text-white-50 mb-4"
          style={{
            fontFamily:
              "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
            lineHeight: "1.9"
          }}
        >
          माटुंगा, मुंबई येथील आमच्या परिसरात आंतरराष्ट्रीय संशोधक आणि
          लेखकांचे स्वागत करण्यास आम्हाला आनंद होईल.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">

          <Link
            to="/submission"
            className="btn btn-vjti-gold fw-bold px-4"
          >
            Submit Paper
            <span
              className="ms-2"
              style={{
                fontFamily:
                  "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif"
              }}
            >
              संशोधन लेख सादर करा
            </span>
          </Link>

          <Link
            to="/contact"
            className="btn btn-outline-light fw-semibold px-4"
          >
            Contact Secretariat
            <span
              className="ms-2"
              style={{
                fontFamily:
                  "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif"
              }}
            >
              सचिवालयाशी संपर्क साधा
            </span>
          </Link>

        </div>

      </div>

    </MainLayout>
  );
};

export default AboutVjtiPage;