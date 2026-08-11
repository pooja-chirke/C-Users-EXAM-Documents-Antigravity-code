/**
 * VJTI HOC 2027 - Frequently Asked Questions (FAQ) Page
 *
 * Production-ready FAQ page with Bootstrap 5 accordion UI.
 * English and Marathi questions/answers are displayed together.
 *
 * @file VJTI-HOC-Conference/frontend/src/pages/Faq/FaqPage.jsx
 */

import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

export const FaqPage = () => {

  const faqs = [
    {
      id: "faq-1",

      question: "What is the page limit and formatting standard for paper submissions?",

      marathiQuestion:
        "संशोधन लेख सादर करण्यासाठी पृष्ठ मर्यादा आणि स्वरूपाचे मानक काय आहे?",

      answer:
        "Full research papers should be between 6 and 8 pages in length including references, figures, and tables. All manuscripts must strictly follow the Standard double-column conference template and be uploaded in PDF format.",

      marathiAnswer:
        "संदर्भ, आकृत्या आणि तक्त्यांसह संपूर्ण संशोधन लेखाची लांबी ६ ते ८ पानांदरम्यान असावी. सर्व संशोधन लेखांनी परिषदेने निर्धारित केलेल्या मानक दोन-स्तंभी (Double-Column) नमुना स्वरूपाचे काटेकोरपणे पालन करणे आवश्यक आहे आणि लेख PDF स्वरूपात सादर करावा."
    },

    {
      id: "faq-2",

      question: "How is the double-blind review process enforced?",

      marathiQuestion:
        "दुहेरी-अंध समकक्ष पुनरावलोकन प्रक्रिया कशी राबविली जाते?",

      answer:
        "Author names, affiliations, email addresses, funding acknowledgments, and self-identifying citations must be removed from the initial paper PDF. Manuscripts showing author identity will be desk-rejected.",

      marathiAnswer:
        "प्रारंभिक संशोधन लेखाच्या PDF मधून लेखकांची नावे, संस्थेची माहिती, ई-मेल पत्ते, निधीविषयक आभार प्रदर्शन आणि लेखकाची ओळख पटविणारे संदर्भ काढून टाकणे आवश्यक आहे. लेखकाची ओळख स्पष्ट करणारे संशोधन लेख प्राथमिक स्तरावरच नाकारले जातील."
    },

    {
      id: "faq-3",

      question: "Will accepted papers be published in indexed proceedings?",

      marathiQuestion:
        "स्वीकृत संशोधन लेख अनुक्रमित परिषद कार्यवाहीमध्ये प्रकाशित केले जातील का?",

      answer:
        "Yes. All accepted and presented English version of research papers will be published in official proceedings in major scientific indexing databases. Marathi version of research paper will be published on the VJTI website.",

      marathiAnswer:
        "होय. स्वीकृत आणि परिषदेमध्ये सादर केलेल्या संशोधन लेखांच्या इंग्रजी आवृत्त्या प्रमुख वैज्ञानिक अनुक्रमणिका डेटाबेसमध्ये अधिकृत परिषद कार्यवाहीमध्ये प्रकाशित केल्या जातील. संशोधन लेखाची मराठी आवृत्ती VJTI च्या संकेतस्थळावर प्रकाशित केली जाईल."
    },

    {
      id: "faq-4",

      question: "Can I present my research paper online if I cannot travel to Mumbai?",

      marathiQuestion:
        "मुंबईला प्रवास करणे शक्य नसल्यास मी माझा संशोधन लेख ऑनलाइन सादर करू शकतो का?",

      answer:
        "No. The Conference will be offline and conducted in person. Authors will have to travel to VJTI, Matunga, to present their accepted paper in person only. No travel reimbursements will be provided.",

      marathiAnswer:
        "नाही. ही परिषद प्रत्यक्ष स्वरूपात (Offline) आयोजित करण्यात येईल. स्वीकृत संशोधन लेख सादर करण्यासाठी लेखकांना VJTI, माटुंगा येथे प्रत्यक्ष उपस्थित राहणे आवश्यक आहे. प्रवास खर्चाची कोणतीही प्रतिपूर्ती केली जाणार नाही."
    },

    {
      id: "faq-5",

      question: "Is at least one author registration mandatory for publication?",

      marathiQuestion:
        "संशोधन लेखाच्या प्रकाशनासाठी किमान एका लेखकाची नोंदणी अनिवार्य आहे का?",

      answer:
        "Yes. At least one author of each accepted paper must complete author registration by the Camera-ready deadline for the paper to be included in the proceedings program.",

      marathiAnswer:
        "होय. प्रत्येक स्वीकृत संशोधन लेखासाठी किमान एका लेखकाने Camera-ready Submission च्या अंतिम मुदतीपूर्वी लेखक म्हणून नोंदणी पूर्ण करणे अनिवार्य आहे. त्यानंतरच संबंधित संशोधन लेखाचा परिषद कार्यवाहीच्या कार्यक्रमात समावेश केला जाईल."
    }
  ];

  return (
    <MainLayout
      title={
        <>
          <div>Frequently Asked Questions</div>

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
            वारंवार विचारले जाणारे प्रश्न
          </div>
        </>
      }

      subtitle={
        <>
          <div>
            Important information regarding paper submission, review, publication
            and conference participation
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
            संशोधन लेख सादरीकरण, पुनरावलोकन, प्रकाशन आणि परिषद सहभागासंबंधी
            महत्त्वाची माहिती
          </div>
        </>
      }

      badge={
        <>
          <span>FAQ 2027</span>

          <span
            style={{
              fontFamily:
                "'Mangal', 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
              marginLeft: "12px"
            }}
          >
            वारंवार विचारले जाणारे प्रश्न २०२७
          </span>
        </>
      }
    >

      <div className="row g-4 mb-5">

        <div className="col-lg-10 mx-auto">

          {/* FAQ Accordion */}
          <div
            className="accordion shadow-sm rounded-4 border-0 card-hoc overflow-hidden"
            id="hocFaqAccordion"
          >

            {faqs.map((faq, idx) => (

              <div
                className="accordion-item border-bottom"
                key={faq.id}
              >

                {/* Question */}
                <h2
                  className="accordion-header"
                  id={`heading-${faq.id}`}
                >

                  <button
                    className={`accordion-button font-heading fw-bold text-dark py-3 ${idx !== 0 ? "collapsed" : ""
                      }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${faq.id}`}
                    aria-expanded={idx === 0 ? "true" : "false"}
                    aria-controls={`collapse-${faq.id}`}
                  >

                    <i className="bi bi-question-circle text-vjti-maroon me-2 fs-5"></i>

                    <div>

                      {/* English Question */}
                      <div className="fw-bold">
                        {faq.question}
                      </div>

                      {/* Marathi Question */}
                      <div
                        className="mt-1"
                        style={{
                          fontFamily:
                            "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                          color: "#800000",
                          lineHeight: "1.8",
                          fontSize: "15px"
                        }}
                      >
                        {faq.marathiQuestion}
                      </div>

                    </div>

                  </button>

                </h2>


                {/* Answer */}
                <div
                  id={`collapse-${faq.id}`}
                  className={`accordion-collapse collapse ${idx === 0 ? "show" : ""
                    }`}
                  aria-labelledby={`heading-${faq.id}`}
                  data-bs-parent="#hocFaqAccordion"
                >

                  <div
                    className="accordion-body bg-light text-muted p-4"
                    style={{
                      lineHeight: "1.8"
                    }}
                  >

                    {/* English Answer */}
                    <p
                      className="mb-3"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        color: "#555"
                      }}
                    >
                      <strong className="text-dark">
                        Answer:
                      </strong>
                      <br />

                      {faq.answer}
                    </p>


                    {/* Marathi Answer */}
                    <p
                      className="mb-0"
                      style={{
                        fontFamily:
                          "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                        fontSize: "16px",
                        lineHeight: "2",
                        textAlign: "left",
                        color: "#555"
                      }}
                    >
                      <strong
                        style={{
                          color: "#800000"
                        }}
                      >
                        उत्तर:
                      </strong>
                      <br />

                      {faq.marathiAnswer}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* Still Need Help Box */}
          <div
            className="card border-0 shadow-sm rounded-4 p-4 card-hoc bg-vjti-navy text-white text-center mt-5"
          >

            <div className="card-body">

              <h4 className="fw-bold font-heading text-white mb-2">
                Still Have Questions?
              </h4>

              <h5
                className="fw-bold text-vjti-gold mb-3"
                style={{
                  fontFamily:
                    "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                  lineHeight: "1.8"
                }}
              >
                अजून काही प्रश्न आहेत का?
              </h5>

              <p className="text-white-50 small max-w-2xl mx-auto mb-2">
                If you could not find the answer to your query, please feel free
                to reach out to our conference team.
              </p>

              <p
                className="text-white-50 small max-w-2xl mx-auto mb-3"
                style={{
                  fontFamily:
                    "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif",
                  lineHeight: "1.9"
                }}
              >
                आपल्या प्रश्नाचे उत्तर येथे मिळाले नसल्यास, कृपया आमच्या
                परिषद समितीशी संपर्क साधा.
              </p>

              <Link
                to="/contact"
                className="btn btn-vjti-gold fw-bold px-4"
              >
                Contact
                <span
                  className="ms-2"
                  style={{
                    fontFamily:
                      "Mangal, 'Noto Sans Devanagari', 'Mukta', 'Hind', sans-serif"
                  }}
                >
                  संपर्क करा
                </span>

                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default FaqPage;