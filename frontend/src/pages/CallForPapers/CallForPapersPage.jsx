/**
 * VJTI HOC 2027 - Call for Papers Page
 * 
 * Production-ready Call for Papers page component detailing submission guidelines,
 * page limits, double-blind review policies, IEEE/ACM template downloads, and deadlines.
 * 
 * @file VJTI-HOC-Conference/frontend/src/pages/CallForPapers/CallForPapersPage.jsx
 */

import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

export const CallForPapersPage = () => {
  return (
    <MainLayout
      title={
        <>
          <div>Call for Papers (CFP)</div>

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
            संशोधन लेख सादरीकरणासाठी आवाहन
          </div>
        </>
      }

      subtitle={
        <>
          <div>
            Submissions SAQC invited for Advanced Computing
            (Supercomputing, Artificial Intelligence & Quantum Computing)
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
            SAQC साठी प्रगत संगणन
            (महासंगणन, कृत्रिम बुद्धिमत्ता आणि क्वांटम संगणन)
            या विषयांवरील संशोधन लेख सादर करण्यासाठी आवाहन करण्यात येत आहे.
          </div>
        </>
      }

      badge={
        <>
          <span>CALL FOR PAPERS 2027</span>

          <span
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              marginLeft: "12px"
            }}
          >
            संशोधन लेख सादरीकरणासाठी आवाहन २०२७
          </span>
        </>
      }
    >
      <div className="row g-4 mb-5">

        {/* Main Content Area */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white mb-4">
            <div className="card-body">
              <h3 className="fw-bold font-heading text-vjti-maroon mb-3">
                Submission Guidelines & Formatting
              </h3>
              <p className="text-muted leading-relaxed mb-2">
                Authors are invited to submit original, unpublished research papers
                demonstrating significant contributions in Application for High Performance computing,
                Artificial Intelligent Systems & applications,Quantum Computing Systems & Applications,
                Optimization techniques & intelligent computing, and Sustainable development for Advance
                Computing.
              </p>

              <p
                className="mb-4"
                style={{
                  fontFamily: "'Noto Sans', 'Segoe UI', sans-serif",
                  color: "#555",
                  lineHeight: "1.9",
                  textAlign: "left",
                  fontSize: "17px",
                  wordSpacing: "normal",
                  letterSpacing: "normal"
                }}
              >
                Authors are encouraged to contribute high-quality research papers that
                promote innovation, interdisciplinary collaboration, and the advancement
                of computing technologies across academia and industry.
              </p>

              <p
                className="mb-4"
                style={{
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                  color: "#555",
                  lineHeight: "2",
                  textAlign: "justify"
                }}
              >
                लेखकांना उच्च कार्यक्षमता संगणनातील अनुप्रयोग, कृत्रिम बुद्धिमत्ता प्रणाली व त्यांचे अनुप्रयोग, क्वांटम संगणन प्रणाली व त्यांचे अनुप्रयोग, अनुकूलन तंत्रे व बुद्धिमान संगणन तसेच प्रगत संगणनातील शाश्वत विकास या क्षेत्रांमध्ये महत्त्वपूर्ण योगदान देणारे मौलिक व अप्रकाशित संशोधन लेख सादर करण्यासाठी आमंत्रित करण्यात येत आहे.
              </p>
              <p
                className="mb-4"
                style={{
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                  color: "#555",
                  lineHeight: "2",
                  textAlign: "justify"
                }}
              >
                लेखकांनी नाविन्यपूर्ण संशोधनाला प्रोत्साहन देणारे, आंतरशाखीय सहकार्याला
                चालना देणारे तसेच शैक्षणिक व औद्योगिक क्षेत्रातील संगणन तंत्रज्ञानाच्या
                प्रगतीस हातभार लावणारे उच्च दर्जाचे संशोधन लेख सादर करण्यास प्रोत्साहित
                केले जाते.
              </p>

              {/* Important Note */}

              <div className="alert alert-warning border-start border-5 border-warning rounded-4 shadow-sm mt-4">

                <h5 className="fw-bold mb-3 text-dark">
                  📢 Important Note / महत्त्वाची सूचना
                </h5>

                {/* English */}

                <p
                  className="mb-3 text-dark"
                  style={{
                    lineHeight: "1.8",
                    textAlign: "justify"
                  }}
                >
                  Research papers may be submitted and presented in
                  <strong> Marathi</strong>.
                  Research papers written in
                  <strong> English</strong> are also accepted.
                  <strong>
                    {" "}
                    However, every research paper submitted in English must also be
                    accompanied by its corresponding Marathi version (translated
                    research paper) during submission.
                  </strong>
                  This initiative aims to promote technical knowledge dissemination,
                  scientific communication, and research publication in the Marathi
                  language while maintaining international academic standards.
                </p>

                {/* Marathi */}

                <p
                  className="mb-0"
                  style={{
                    fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                    lineHeight: "2",
                    textAlign: "justify",
                    color: "#444"
                  }}
                >
                  संशोधन निबंध
                  <strong> मराठी भाषेत लिहून तसेच सादर करता येतील.</strong>
                  <strong> इंग्रजी भाषेतील संशोधन निबंध देखील स्वीकारले जातील.</strong>
                  मात्र,
                  <strong>
                    {" "}
                    इंग्रजी भाषेत सादर केलेल्या प्रत्येक संशोधन निबंधासोबत त्याची
                    मराठी भाषेतील समतुल्य प्रत (अनुवादित संशोधन निबंध) सादर करणे
                    अनिवार्य राहील.
                  </strong>
                  या उपक्रमाचा उद्देश मराठी भाषेत तांत्रिक ज्ञानाचा प्रसार,
                  संशोधनाला चालना आणि प्रादेशिक भाषेमध्ये वैज्ञानिक संवाद
                  वाढविणे हा आहे.
                </p>

              </div>
              <h5 className="fw-bold text-dark mt-4 mb-2">
                Paper Length & Format
              </h5>

              <h6
                className="mb-3"
                style={{
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                  color: "#800000",
                  fontWeight: "600"
                }}
              >
                शोधसंशोधन लेखांची लांबी व स्वरूप
              </h6>

              <ul className="text-muted mb-4" style={{ lineHeight: "1.8" }}>

                <li className="mb-3">
                  <strong>Full Papers:</strong> 6 to 8 pages including figures, tables,
                  and references.
                  <br />
                  <span
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    <strong>पूर्ण संशोधन लेख:</strong> आकृत्या, तक्ते व संदर्भांसह ६ ते ८ पाने.
                  </span>
                </li>



                <li className="mb-3">
                  <strong>Formatting Standard:</strong> Submissions must follow the
                  standard double-column conference template.
                  <br />
                  <span
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    <strong>स्वरूप:</strong> Double-Column Conference Template चे पालन करणे आवश्यक आहे.
                  </span>
                </li>

                <li>
                  <strong>File Format:</strong> Only PDF file uploads are accepted via the
                  online paper submission portal.
                  <br />
                  <span
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    <strong>फाईल स्वरूप:</strong> ऑनलाइन पोर्टलद्वारे फक्त PDF स्वरूपातील संशोधन लेख स्वीकारले जातील.
                  </span>
                </li>

              </ul>

              <hr className="my-4" />

              <h5 className="fw-bold text-dark mt-4 mb-2">
                Double-Blind Peer Review Policy
              </h5>

              <h6
                className="mb-3"
                style={{
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                  color: "#800000",
                  fontWeight: "600"
                }}
              >
                दुहेरी-अंध समकक्ष पुनरावलोकन धोरण
              </h6>

              <p className="text-muted leading-relaxed mb-2">
                SAQC 2027 follows a strict Double-Blind Peer Review process. Authors'
                names, affiliations, acknowledgements, and all self-identifying
                references must be removed from the initial manuscript before
                submission.
              </p>

              <p
                className="mb-4"
                style={{
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                  lineHeight: "2",
                  color: "#555",
                  textAlign: "justify"
                }}
              >
                SAQC 2027 परिषदेमध्ये दुहेरी-अंध समकक्ष पुनरावलोकन (Double-Blind Peer
                Review) प्रक्रिया अवलंबली जाईल. प्रारंभिक शोधनिबंधामधून लेखकांची
                नावे, संस्था, आभार प्रदर्शन तसेच लेखकाची ओळख पटवणारे सर्व संदर्भ
                काढून टाकणे अनिवार्य राहील.
              </p>

              <hr className="my-4" />

              <h5 className="fw-bold text-dark mt-4 mb-2">
                Plagiarism Policy & Ethics
              </h5>

              <h6
                className="mb-3"
                style={{
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                  color: "#800000",
                  fontWeight: "600"
                }}
              >
                साहित्यचौर्य (Plagiarism) धोरण व संशोधन नैतिकता
              </h6>

              <p className="text-muted leading-relaxed mb-2">
                All submitted papers will undergo automated similarity checking using
                Turnitin / iThenticate. Manuscripts should have less than
                <strong> 10% similarity index </strong>
                and 10 % AI generated content.

              </p>

              <p
                className="mb-0"
                style={{
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                  lineHeight: "2",
                  color: "#555",
                  textAlign: "justify"
                }}
              >
                सादर केलेल्या सर्व संशोधन लेखांची (Research Papers) Turnitin / iThenticate या सॉफ्टवेअरद्वारे स्वयंचलित समानता (Similarity) तपासणी केली जाईल.

                सादर केलेल्या संशोधन लेखाचा समानता निर्देशांक (Similarity Index) १०% पेक्षा कमी असावा तसेच कृत्रिम बुद्धिमत्तेच्या (AI) साहाय्याने तयार केलेल्या मजकुराचे प्रमाण १०% पेक्षा कमी असणे आवश्यक आहे..
              </p>
            </div>
          </div>

          {/* Template Downloads Card */}
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-light">
            <div className="card-body">
              <h4 className="fw-bold font-heading text-vjti-maroon mb-3">
                <i className="bi bi-download me-2"></i>Paper Format Templates
              </h4>
              <h6
                className="mb-3"
                style={{
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                  color: "#800000",
                  fontWeight: "600"
                }}
              >
                संशोधन लेखांचे नमुना स्वरूप
              </h6>
              <p className="text-muted small mb-4">
                Please download and use the official conference templates before converting your final manuscript to PDF format.
              </p>
              <p
                className="small mb-4"
                style={{
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                  color: "#555",
                  lineHeight: "1.9",
                  textAlign: "justify"
                }}
              >
                अंतिम संशोधन लेख PDF स्वरूपात रूपांतरित करण्यापूर्वी
                कृपया परिषदेने दिलेल्या अधिकृत नमुना स्वरूपाचा (Template)
                वापर करावा.
              </p>
              <div className="d-flex flex-wrap gap-3">
                {/* Word Template */}
                <a href="#word-template" className="btn btn-outline-primary d-inline-flex align-items-center gap-2 font-semibold">
                  <i className="bi bi-file-earmark-word fs-5"></i>
                  <span>MS Word Template (.docx)</span>
                </a>
                {/* Marathi Word Template */}
                <a
                  href="#word-template-marathi"
                  className="btn btn-outline-success d-inline-flex align-items-center gap-2 font-semibold"
                >
                  <i className="bi bi-file-earmark-word fs-5"></i>

                  <span>मराठी वर्ड नमुना (.docx)</span>
                </a>
                <a href="#latex-template" className="btn btn-outline-dark d-inline-flex align-items-center gap-2 font-semibold">
                  <i className="bi bi-file-earmark-code fs-5"></i>
                  <div className="text-start">
                    <div>LaTeX Template (.zip)</div>

                    <small
                      style={{
                        fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                      }}
                    >
                      लॅटेक्स नमुना
                    </small>
                  </div>
                  <div className="alert alert-info mt-4 mb-0">

                    <strong>
                      <i className="bi bi-info-circle-fill me-2"></i>
                      Template Information / नमुना स्वरूपाविषयी सूचना
                    </strong>

                    <p className="mt-2 mb-2">
                      Authors should prepare their research paper using the official conference template before submission.
                    </p>

                    <p
                      className="mb-0"
                      style={{
                        fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                        lineHeight: "1.8"
                      }}
                    >
                      संशोधन लेख सादर करण्यापूर्वी परिषदेने दिलेल्या अधिकृत
                      नमुना स्वरूपाचा (Template) वापर करणे आवश्यक आहे.
                    </p>

                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info Area */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-vjti-navy text-white mb-4">
            <div className="card-body">
              <h4 className="fw-bold font-heading text-vjti-gold mb-3">
                <i className="bi bi-calendar-event me-2"></i>Key Deadlines
              </h4>
              <h6
                className="mb-3"
                style={{
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                  color: "#FFD700",
                  fontWeight: "600"
                }}
              >
                महत्त्वाच्या तारखा
              </h6>
              <ul className="list-unstyled space-y-3 small text-white-50 mb-4">

                <li className="border-bottom border-secondary pb-3 mb-3">
                  <strong>Paper Submission</strong><br />
                  <span className="text-vjti-gold">30 September 2026</span><br />
                  <small
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    संशोधन लेख सादर करण्याची अंतिम तारीख : ३० सप्टेंबर २०२६
                  </small>
                </li>

                <li className="border-bottom border-secondary pb-3 mb-3">
                  <strong>Acceptance Notification</strong><br />
                  <span>15 November 2026</span><br />
                  <small
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    स्वीकृतीची सूचना : १५ नोव्हेंबर २०२६
                  </small>
                </li>

                <li className="border-bottom border-secondary pb-3 mb-3">
                  <strong>Camera Ready Submission</strong><br />
                  <span>30 November 2026</span><br />
                  <small
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    अंतिम संशोधन लेख सादर करण्याची तारीख : ३० नोव्हेंबर २०२६
                  </small>
                </li>

                <li>
                  <strong>Conference Dates</strong><br />
                  <span className="text-vjti-gold">08-09 January 2027</span><br />
                  <small
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    परिषदेचा कालावधी : ०८ ते ०९ जानेवारी २०२७
                  </small>
                </li>

              </ul>

              <Link
                to="/submission"
                className="btn btn-vjti-gold w-100 fw-bold py-2 shadow-sm"
              >
                <div className="text-center">
                  <div>Submit Paper Portal</div>
                  <small
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    संशोधन लेख सादर करा
                  </small>
                </div>
              </Link>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-white">
            <div className="card-body">
              <h5 className="fw-bold font-heading text-vjti-maroon mb-2">Need Assistance?</h5>
              <h6
                className="mb-3"
                style={{
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                  color: "#800000"
                }}
              >
                मदत हवी आहे?
              </h6>
              <p className="small text-muted mb-3">
                For questions regarding submission guidelines or paper formatting, contact the Technical Program Committee.
              </p>
              <p
                className="small mb-3"
                style={{
                  fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif",
                  color: "#555",
                  lineHeight: "1.8"
                }}
              >
                संशोधन लेख सादरीकरण, नमुना स्वरूप किंवा परिषदेबाबत
                कोणतीही माहिती हवी असल्यास तांत्रिक कार्यक्रम समितीशी
                संपर्क साधावा.
              </p>
              <a
                href="mailto: stshingade@it.vjti.ac.in"
                className="text-vjti-maroon fw-semibold text-decoration-none"
              >
                <i className="bi bi-envelope-fill me-2"></i>

                <div>
                  <div>stshingade@it.vjti.ac.in</div>

                  <small
                    style={{
                      fontFamily: "'Noto Sans Devanagari','Mukta','Hind',sans-serif"
                    }}
                  >
                    तांत्रिक कार्यक्रम समिती
                  </small>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default CallForPapersPage;
