/**
 * VJTI HOC 2027 - Registration Fees & Guidelines Page
 *
 * Registration categories, fee structure,
 * fee inclusions and payment proof verification instructions.
 *
 * @file VJTI-HOC-Conference/frontend/src/pages/Registration/RegistrationFeesPage.jsx
 */

import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

export const RegistrationFeesPage = () => {
  const feeCategories = [
    {
      category: "AICTE approved Institutes Faculty/Research Scholars",
      marathiCategory:
        "AICTE मान्यताप्राप्त संस्थांमधील प्राध्यापक / संशोधक विद्यार्थी",
      indianINR: "₹ 8,000",
      foreignUSD: "$165",
    },
    {
      category: "Industry Participation",
      marathiCategory: "औद्योगिक सहभाग",
      indianINR: "₹ 10,000",
      foreignUSD: "$165",
    },
    {
      category: "AICTE approved Institutes PG Students",
      marathiCategory:
        "AICTE मान्यताप्राप्त संस्थांमधील पदव्युत्तर विद्यार्थी",
      indianINR: "₹ 6,000",
      foreignUSD: "$125",
    },
  ];

  return (
    <MainLayout
      title={
        <>
          <div>Registration Fees & Guidelines</div>

          <div
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              fontSize: "32px",
              lineHeight: "1.6",
              marginTop: "8px",
              color: "#ffffff",
            }}
          >
            नोंदणी शुल्क आणि मार्गदर्शक सूचना
          </div>
        </>
      }
      subtitle={
        <>
          <div>
            Registration categories, fee structure and payment guidelines
          </div>

          <div
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              fontSize: "18px",
              lineHeight: "1.9",
              marginTop: "12px",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            नोंदणीचे प्रकार, शुल्क संरचना आणि पेमेंटसंबंधी मार्गदर्शक सूचना
          </div>
        </>
      }
      badge={
        <>
          <span>REGISTRATION 2027</span>

          <span
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              marginLeft: "12px",
            }}
          >
            नोंदणी २०२७
          </span>
        </>
      }
    >
      {/* =========================================================
          1. REGISTRATION FEE TABLE
          ========================================================= */}

      <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white mb-5">
        <div className="card-body">
          <h3 className="fw-bold font-heading text-vjti-maroon mb-2">
            Registration Fee Structure
          </h3>

          <h5
            className="fw-bold mb-3"
            style={{
              fontFamily:
                "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              color: "#800000",
            }}
          >
            नोंदणी शुल्क संरचना
          </h5>

          <p
            className="text-muted mb-2"
            style={{
              lineHeight: "1.8",
              textAlign: "left",
            }}
          >
            Registration fees are inclusive of 18% GST.
          </p>

          <p
            className="text-muted mb-2"
            style={{
              fontFamily:
                "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              lineHeight: "1.9",
              textAlign: "left",
            }}
          >
            नोंदणी शुल्कामध्ये १८% GST समाविष्ट आहे.
          </p>

          <p
            className="text-muted mb-2"
            style={{
              lineHeight: "1.8",
              textAlign: "left",
            }}
          >
            At least one author of each accepted paper must register at the
            Author Rate before the deadline.
          </p>

          <p
            className="text-muted mb-3"
            style={{
              fontFamily:
                "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              lineHeight: "1.9",
              textAlign: "left",
            }}
          >
            प्रत्येक स्वीकृत संशोधन लेखासाठी किमान एका लेखकाने अंतिम मुदतीपूर्वी
            लेखक म्हणून नोंदणी करणे आवश्यक आहे.
          </p>

          {/* Important Free Submission / Registration Note */}

          <div className="alert alert-warning border-start border-4 border-warning rounded-3 mb-4">
            <p className="fw-semibold mb-2">
              Paper submission and registration are free. Upon acceptance,
              conference proceedings charges will apply.
            </p>

            <p
              className="mb-0"
              style={{
                fontFamily:
                  "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                lineHeight: "1.9",
              }}
            >
              पेपर सादरीकरण व नोंदणी विनामूल्य आहे. पेपर स्वीकृत झाल्यानंतर
              कॉन्फरन्स प्रोसीडिंगसाठी शुल्क लागू होईल.
            </p>
          </div>

          {/* Fee Table */}

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-dark bg-vjti-navy text-white">
                <tr>
                  <th>
                    Delegate Category
                    <br />
                    <small
                      style={{
                        fontFamily:
                          "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                      }}
                    >
                      प्रतिनिधी वर्ग
                    </small>
                  </th>

                  <th>
                    Indian Delegates (INR)
                    <br />
                    <small
                      style={{
                        fontFamily:
                          "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                      }}
                    >
                      भारतीय प्रतिनिधी
                    </small>
                  </th>

                  <th>
                    Foreign Delegates (USD)
                    <br />
                    <small
                      style={{
                        fontFamily:
                          "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                      }}
                    >
                      परदेशी प्रतिनिधी
                    </small>
                  </th>
                </tr>
              </thead>

              <tbody>
                {feeCategories.map((cat, idx) => (
                  <tr key={idx}>
                    <td className="fw-semibold text-dark">
                      <div>{cat.category}</div>

                      <div
                        className="mt-1"
                        style={{
                          fontFamily:
                            "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                          color: "#800000",
                          fontSize: "15px",
                          lineHeight: "1.8",
                        }}
                      >
                        {cat.marathiCategory}
                      </div>
                    </td>

                    <td className="fw-semibold text-vjti-maroon">
                      {cat.indianINR}
                    </td>

                    <td className="fw-semibold text-primary">
                      {cat.foreignUSD}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =========================================================
          2. REGISTRATION FEE INCLUSIONS
          Bank Details section REMOVED
          ========================================================= */}

      <div className="row g-4 mb-5">
        <div className="col-12">
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-light">
            <div className="card-body">
              <h4 className="fw-bold font-heading text-vjti-maroon mb-2">
                <i className="bi bi-box-seam me-2"></i>
                Registration Fee Inclusions
              </h4>

              <h6
                className="fw-bold mb-3"
                style={{
                  fontFamily:
                    "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                  color: "#800000",
                }}
              >
                नोंदणी शुल्कामध्ये समाविष्ट बाबी
              </h6>

              <ul className="text-muted small mb-4">
                {/* 1 */}

                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Access to all Keynote Addresses, Technical Paper Sessions &
                  Workshops.
                  <br />

                  <span
                    style={{
                      fontFamily:
                        "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                    }}
                  >
                    सर्व प्रमुख व्याख्याने, तांत्रिक संशोधन सत्रे आणि
                    कार्यशाळांमध्ये प्रवेश.
                  </span>
                </li>

                {/* 2 */}

                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Official Conference Kit, Souvenir, and Electronic Proceedings
                  Access.
                  <br />

                  <span
                    style={{
                      fontFamily:
                        "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                    }}
                  >
                    अधिकृत परिषद किट, स्मरणिका आणि इलेक्ट्रॉनिक परिषद
                    कार्यवाहीमध्ये प्रवेश.
                  </span>
                </li>

                {/* 3 */}

                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Lunch, High-Tea, and Official Banquet Dinner at VJTI Campus.
                  <br />

                  <span
                    style={{
                      fontFamily:
                        "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                    }}
                  >
                    VJTI परिसरात दुपारचे भोजन, हाय-टी आणि अधिकृत स्नेहभोजन.
                  </span>
                </li>

                {/* 4 */}

                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Paper Presentation Certificate & Official Attendance
                  Certificate.
                  <br />

                  <span
                    style={{
                      fontFamily:
                        "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                    }}
                  >
                    संशोधन लेख सादरीकरण प्रमाणपत्र आणि अधिकृत उपस्थिती
                    प्रमाणपत्र.
                  </span>
                </li>
              </ul>

              {/* =====================================================
                  PAYMENT PROOF
                  ===================================================== */}

              <div className="p-3 bg-white rounded-3 border">
                <h6 className="fw-bold text-dark mb-2">
                  Upload Payment Proof
                </h6>

                <h6
                  className="fw-bold mb-2"
                  style={{
                    fontFamily:
                      "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                    color: "#800000",
                  }}
                >
                  पेमेंटचा पुरावा अपलोड करा
                </h6>

                <p className="extra-small text-muted mb-2">
                  After paying, log in to your account and upload your payment
                  transaction proof for verification.
                </p>

                <p
                  className="extra-small text-muted mb-3"
                  style={{
                    fontFamily:
                      "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                    lineHeight: "1.8",
                  }}
                >
                  शुल्क भरल्यानंतर आपल्या खात्यात लॉगिन करून पडताळणीसाठी
                  पेमेंट व्यवहाराचा पुरावा अपलोड करा.
                </p>

                <Link
                  to="/register"
                  className="btn btn-vjti-maroon btn-sm fw-semibold w-100"
                >
                  Register Account to Proceed

                  <span
                    className="ms-2"
                    style={{
                      fontFamily:
                        "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                    }}
                  >
                    पुढे जाण्यासाठी नोंदणी करा
                  </span>
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