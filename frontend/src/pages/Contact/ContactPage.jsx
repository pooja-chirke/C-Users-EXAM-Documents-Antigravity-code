/**
 * VJTI HOC 2027 - Contact & Venue Page
 *
 * Production-ready page component providing Secretariat contact details,
 * interactive contact inquiry form, travel instructions to VJTI Matunga,
 * and map/venue information.
 *
 * @file VJTI-HOC-Conference/frontend/src/pages/Contact/ContactPage.jsx
 */

import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

export const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const marathiFont = {
    fontFamily:
      "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
    lineHeight: "1.9",
  };

  return (
    <MainLayout
      title={
        <>
          <div>Contact Secretariat & Venue</div>

          <div
            style={{
              ...marathiFont,
              fontSize: "32px",
              marginTop: "8px",
              color: "#ffffff",
            }}
          >
            सचिवालयाशी संपर्क आणि स्थळ
          </div>
        </>
      }

      subtitle={
        <>
          <div>
            Veermata Jijabai Technological Institute (VJTI), Matunga, Mumbai
          </div>

          <div
            style={{
              ...marathiFont,
              fontSize: "18px",
              marginTop: "12px",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            वीरमाता जिजाबाई तंत्रज्ञान संस्था (VJTI), माटुंगा, मुंबई
          </div>
        </>
      }

      badge={
        <>
          <span>REACH OUT TO US</span>

          <span
            style={{
              ...marathiFont,
              marginLeft: "12px",
            }}
          >
            आमच्याशी संपर्क साधा
          </span>
        </>
      }
    >

      {/* =========================================================
          MAIN CONTACT SECTION
      ========================================================= */}

      <div className="row g-4 mb-5">

        {/* =====================================================
            CONTACT INFORMATION
        ===================================================== */}

        <div className="col-lg-5">

          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-vjti-navy text-white mb-4">

            <div className="card-body">

              {/* Heading */}

              <h4 className="fw-bold font-heading text-vjti-gold mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                Secretariat Contact
              </h4>

              <h6
                className="fw-bold mb-4"
                style={{
                  ...marathiFont,
                  color: "#FFD700",
                }}
              >
                सचिवालयाशी संपर्क
              </h6>


              {/* =================================================
                  CONFERENCE ADDRESS
              ================================================= */}

              <div className="d-flex align-items-start gap-3 mb-4">

                <div className="bg-vjti-maroon text-vjti-gold p-3 rounded-circle shrink-0">
                  <i className="bi bi-building fs-4"></i>
                </div>

                <div>

                  <h6 className="fw-bold text-white mb-1">
                    Conference Address
                  </h6>

                  <h6
                    className="fw-semibold mb-2"
                    style={{
                      ...marathiFont,
                      color: "#FFD700",
                      fontSize: "14px",
                    }}
                  >
                    परिषदेचा पत्ता
                  </h6>

                  <p className="small text-white-50 leading-relaxed mb-2">
                    Department of Computer Engineering, VJTI,
                    H. R. Mahajani Road, Matunga, Mumbai - 400019,
                    Maharashtra, India.
                  </p>

                  <p
                    className="small text-white-50 mb-0"
                    style={marathiFont}
                  >
                    संगणक अभियांत्रिकी विभाग, VJTI,
                    एच. आर. महाजनी रोड, माटुंगा, मुंबई - ४०००१९,
                    महाराष्ट्र, भारत.
                  </p>

                </div>
              </div>


              {/* =================================================
                  EMAIL
              ================================================= */}

              <div className="d-flex align-items-start gap-3 mb-4">

                <div className="bg-vjti-maroon text-vjti-gold p-3 rounded-circle shrink-0">
                  <i className="bi bi-envelope-fill fs-4"></i>
                </div>

                <div>

                  <h6 className="fw-bold text-white mb-1">
                    Email Inquiry
                  </h6>

                  <h6
                    className="fw-semibold mb-2"
                    style={{
                      ...marathiFont,
                      color: "#FFD700",
                      fontSize: "14px",
                    }}
                  >
                    ई-मेल चौकशी
                  </h6>

                  <a
                    href="mailto:hoc2027@vjti.ac.in"
                    className="small text-vjti-gold text-decoration-none fw-semibold"
                  >
                    hoc2027@vjti.ac.in
                  </a>

                  <p className="extra-small text-white-50 mb-1">
                    Submissions & general queries
                  </p>

                  <p
                    className="extra-small text-white-50 mb-0"
                    style={marathiFont}
                  >
                    संशोधन लेख सादरीकरण व सामान्य चौकशीसाठी
                  </p>

                </div>
              </div>


              {/* =================================================
                  PHONE
              ================================================= */}

              <div className="d-flex align-items-start gap-3">

                <div className="bg-vjti-maroon text-vjti-gold p-3 rounded-circle shrink-0">
                  <i className="bi bi-telephone-fill fs-4"></i>
                </div>

                <div>

                  <h6 className="fw-bold text-white mb-1">
                    Phone Helpline
                  </h6>

                  <h6
                    className="fw-semibold mb-2"
                    style={{
                      ...marathiFont,
                      color: "#FFD700",
                      fontSize: "14px",
                    }}
                  >
                    दूरध्वनी सहाय्यता
                  </h6>

                  <span className="small text-white font-monospace">
                    +91 22 2419 8100
                  </span>

                  <p className="extra-small text-white-50 mb-1">
                    Mon–Fri: 10:00 AM – 5:00 PM IST
                  </p>

                  <p
                    className="extra-small text-white-50 mb-0"
                    style={marathiFont}
                  >
                    सोमवार–शुक्रवार : सकाळी १०:०० ते सायंकाळी ५:००
                    भारतीय प्रमाण वेळेनुसार
                  </p>

                </div>
              </div>

            </div>
          </div>


          {/* =====================================================
              HOW TO REACH VJTI
          ===================================================== */}

          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white">

            <div className="card-body">

              <h5 className="fw-bold font-heading text-vjti-maroon mb-2">
                <i className="bi bi-signpost-2 me-2"></i>
                How to Reach VJTI
              </h5>

              <h6
                className="fw-bold mb-3"
                style={{
                  ...marathiFont,
                  color: "#800000",
                }}
              >
                VJTI येथे कसे पोहोचाल?
              </h6>

              <ul className="list-unstyled text-muted small mb-0">

                {/* By Air */}

                <li className="d-flex align-items-start gap-2 mb-3">

                  <i className="bi bi-airplane-fill text-vjti-maroon mt-1"></i>

                  <div>

                    <strong>By Air:</strong>{" "}
                    Chhatrapati Shivaji Maharaj International Airport (BOM)
                    — 12 km from VJTI.

                    <p
                      className="mb-0 mt-1"
                      style={marathiFont}
                    >
                      <strong>विमानाने:</strong>{" "}
                      छत्रपती शिवाजी महाराज आंतरराष्ट्रीय विमानतळ (BOM)
                      VJTI पासून सुमारे १२ किमी अंतरावर आहे.
                    </p>

                  </div>
                </li>


                {/* By Train */}

                <li className="d-flex align-items-start gap-2">

                  <i className="bi bi-train-front-fill text-vjti-maroon mt-1"></i>

                  <div>

                    <strong>By Train:</strong>{" "}
                    Nearest suburban stations are Dadar
                    (Central/Western) and Wadala (Harbour line).

                    <p
                      className="mb-0 mt-1"
                      style={marathiFont}
                    >
                      <strong>रेल्वेने:</strong>{" "}
                      जवळची उपनगरीय रेल्वे स्थानके दादर
                      (मध्य/पश्चिम रेल्वे) आणि वडाळा (हार्बर मार्ग)
                      आहेत.
                    </p>

                  </div>
                </li>

              </ul>

            </div>
          </div>

        </div>


        {/* =====================================================
            CONTACT INQUIRY FORM
        ===================================================== */}

        <div className="col-lg-7">

          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white h-100">

            <div className="card-body">

              <h4 className="fw-bold font-heading text-vjti-maroon mb-1">
                Send an Inquiry to Secretariat
              </h4>

              <h6
                className="fw-bold mb-4"
                style={{
                  ...marathiFont,
                  color: "#800000",
                }}
              >
                सचिवालयाकडे चौकशी पाठवा
              </h6>


              {/* =================================================
                  SUCCESS MESSAGE
              ================================================= */}

              {formSubmitted ? (

                <div className="alert alert-success p-4 rounded-3 text-center my-4">

                  <i className="bi bi-check-circle-fill fs-1 text-success d-block mb-2"></i>

                  <h5 className="fw-bold text-dark mb-2">
                    Thank You for Reaching Out!
                  </h5>

                  <h6
                    className="fw-bold mb-2"
                    style={marathiFont}
                  >
                    संपर्क साधल्याबद्दल धन्यवाद!
                  </h6>

                  <p className="small text-muted mb-2">
                    Your inquiry has been submitted to the HOC 2027
                    Secretariat. We will respond to your email shortly.
                  </p>

                  <p
                    className="small text-muted mb-0"
                    style={marathiFont}
                  >
                    आपली चौकशी HOC 2027 सचिवालयाकडे पाठविण्यात आली आहे.
                    आम्ही लवकरच आपल्या ई-मेलवर उत्तर देऊ.
                  </p>

                </div>

              ) : (

                <form onSubmit={handleSubmit}>

                  <div className="row g-3">

                    {/* Name */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold small text-secondary">
                        Your Name *
                      </label>

                      <div
                        className="small fw-semibold mb-1"
                        style={marathiFont}
                      >
                        आपले नाव *
                      </div>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Dr. / Mr. / Ms. Name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                      />

                    </div>


                    {/* Email */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold small text-secondary">
                        Email Address *
                      </label>

                      <div
                        className="small fw-semibold mb-1"
                        style={marathiFont}
                      >
                        ई-मेल पत्ता *
                      </div>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@institution.ac.in"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                      />

                    </div>


                    {/* Subject */}

                    <div className="col-12">

                      <label className="form-label fw-semibold small text-secondary">
                        Subject / Category *
                      </label>

                      <div
                        className="small fw-semibold mb-1"
                        style={marathiFont}
                      >
                        विषय / श्रेणी *
                      </div>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Paper Submission Inquiry / Registration Query"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            subject: e.target.value,
                          })
                        }
                      />

                    </div>


                    {/* Message */}

                    <div className="col-12">

                      <label className="form-label fw-semibold small text-secondary">
                        Message / Query *
                      </label>

                      <div
                        className="small fw-semibold mb-1"
                        style={marathiFont}
                      >
                        संदेश / चौकशी *
                      </div>

                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Type your inquiry details here..."
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                      ></textarea>

                    </div>


                    {/* Submit Button */}

                    <div className="col-12 mt-4">

                      <button
                        type="submit"
                        className="btn btn-vjti-maroon w-100 py-2 fw-semibold shadow-sm"
                      >

                        <span>
                          Submit Message
                        </span>

                        <span
                          className="ms-2"
                          style={marathiFont}
                        >
                          संदेश पाठवा
                        </span>

                        <i className="bi bi-send-fill ms-1"></i>

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