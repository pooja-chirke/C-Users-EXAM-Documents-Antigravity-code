import React from "react";
import "./CommitteeAccordion.css";

// =========================================================
// COMMITTEE PHOTOS
// =========================================================

import venugopalReddy from "../assets/committee/b-venugopal-reddy.jpg";
import pramodNaik from "../assets/committee/pramod-naik.jpg";
import sudhirMehta from "../assets/committee/sudhir-mehta.jpg";
import sdKore from "../assets/committee/sd-kore.jpg";
import sunilLuthra from "../assets/committee/Sunil-luthra.jpg";
import stShingade from "../assets/committee/st-shingade.jpg";
import vbNikam from "../assets/committee/vb-nikam.jpg";

// =========================================================
// CHIEF PATRONS
// =========================================================

const chiefPatrons = [
  {
    name: "Dr. Sudhir Mehta",
    marathiName: "डॉ. सुधीर मेहता",
    title: "Chairperson, Board of Governors, VJTI",
    marathiTitle: "अध्यक्ष, प्रशासकीय मंडळ, VJTI",
    role: "Chief Patron",
    marathiRole: "मुख्य संरक्षक",
    image: sudhirMehta,
  },

  {
    name: "Shri. B. Venugopal Reddy",
    marathiName: "श्री. बी. वेणुगोपाल रेड्डी",
    title: "Hon’ble Addl. Chief Secretary",
    marathiTitle: "माननीय अतिरिक्त मुख्य सचिव",
    role: "Chief Patron",
    marathiRole: "मुख्य संरक्षक",
    image: venugopalReddy,
  },

  {
    name: "Dr. Pramod Naik",
    marathiName: "डॉ. प्रमोद नाईक",
    title: "Hon’ble Minister for Technical & Higher Education",
    marathiTitle: "माननीय तंत्रशिक्षण व उच्च शिक्षण मंत्री",
    role: "Chief Patron",
    marathiRole: "मुख्य संरक्षक",
    image: pramodNaik,
  },

  {
    name: "Dr. Sachin D. Kore",
    marathiName: "डॉ. सचिन डी. कोरे",
    title: "Director, VJTI",
    marathiTitle: "संचालक, VJTI",
    role: "Chief Patron",
    marathiRole: "मुख्य संरक्षक",
    image: sdKore,
  },

  {
    name: 'Dr. Sunil Luthra',
    marathiName: 'डॉ. सुनील लुथरा',
    title: 'Director @ All India Council for Technical Education | Research and Training',
    marathiTitle: 'संचालक, अखिल भारतीय तंत्रशिक्षण परिषद | संशोधन आणि प्रशिक्षण',
    role: 'Chief Patron',
    marathiRole: 'मुख्य संरक्षक',
    image: sunilLuthra
  }

];

// =========================================================
// CONVENERS
// =========================================================

const conveners = [
  {
    name: "Dr. Sandip T. Shingade",
    marathiName: "डॉ. संदीप टी. शिंगाडे",

    designation: "Assistant Professor",
    marathiDesignation: "सहाय्यक प्राध्यापक",

    department: "Department of Computer Engineering & IT",
    marathiDepartment:
      "संगणक अभियांत्रिकी व माहिती तंत्रज्ञान विभाग",

    email: "stshingade@it.vjti.ac.in",

    phone: "+91-8793707873",

    role: "Coordinator, SAQC - VJTI 2027",
    marathiRole: "समन्वयक, SAQC - VJTI २०२७",

    image: stShingade,
  },

  {
    name: "Dr. Valmik B. Nikam",
    marathiName: "डॉ. वाल्मिक बी. निकम",

    designation: "Associate Professor",
    marathiDesignation: "सहयोगी प्राध्यापक",

    department:
      "Head of the Department of Computer Engineering & Information Technology",
    marathiDepartment:
      "संगणक अभियांत्रिकी व माहिती तंत्रज्ञान विभागाचे विभागप्रमुख",

    email: "vbnikam@it.vjti.ac.in",

    role: "Co-coordinator, SAQC - VJTI 2027",
    marathiRole: "सह-समन्वयक, SAQC - VJTI २०२७",

    image: vbNikam,
  },
];

// =========================================================
// COMPONENT
// =========================================================

const CommitteeAccordion = () => {
  return (
    <div className="committee-wrapper">

      {/* ================================================= */}
      {/* CHIEF PATRONS */}
      {/* ================================================= */}

      <section className="committee-section">

        <div className="committee-section-title">
          <div>
            <div className="committee-title-en">
              Chief Patrons
            </div>

            <div className="committee-title-mr">
              मुख्य संरक्षक
            </div>
          </div>
        </div>

        <div className="row g-4">

          {chiefPatrons.map((person, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
            >

              <div className="committee-mini-card">

                {/* PHOTO */}
                <div className="committee-mini-photo">

                  <img
                    src={person.image}
                    alt={person.name}
                  />

                </div>

                {/* INFORMATION */}
                <div className="committee-mini-content">

                  {/* English Name */}
                  <h5>
                    {person.name}
                  </h5>

                  {/* Marathi Name */}
                  <div className="committee-marathi-name">
                    {person.marathiName}
                  </div>

                  {/* English Designation */}
                  <p className="committee-mini-designation">
                    {person.title}
                  </p>

                  {/* Marathi Designation */}
                  <p className="committee-mini-marathi">
                    {person.marathiTitle}
                  </p>

                  {/* English Role */}
                  <p className="committee-mini-role">
                    {person.role}
                  </p>

                  {/* Marathi Role */}
                  <p className="committee-mini-marathi-role">
                    {person.marathiRole}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================================================= */}
      {/* CONVENERS */}
      {/* ================================================= */}

      <section className="committee-section mt-5">

        <div className="committee-section-title">

          <div>

            <div className="committee-title-en">
              Convener
            </div>

            <div className="committee-title-mr">
              समन्वयक
            </div>

          </div>

        </div>


        <div className="row g-4">

          {conveners.map((person, index) => (

            <div
              className="col-lg-6 col-md-6"
              key={index}
            >

              <div className="committee-mini-card convener-mini-card">

                {/* PHOTO */}
                <div className="committee-mini-photo convener-photo">

                  <img
                    src={person.image}
                    alt={person.name}
                  />

                </div>


                {/* INFORMATION */}
                <div className="committee-mini-content">

                  {/* English Name */}
                  <h5>
                    {person.name}
                  </h5>

                  {/* Marathi Name */}
                  <div className="committee-marathi-name">
                    {person.marathiName}
                  </div>


                  {/* English Designation */}
                  <p className="committee-mini-designation">
                    {person.designation}
                  </p>

                  {/* Marathi Designation */}
                  <p className="committee-mini-marathi">
                    {person.marathiDesignation}
                  </p>


                  {/* English Department */}
                  <p className="committee-mini-department">
                    {person.department}
                  </p>

                  {/* Marathi Department */}
                  <p className="committee-mini-marathi">
                    {person.marathiDepartment}
                  </p>


                  {/* Email */}
                  <p className="committee-mini-contact">

                    <strong>Email:</strong>{" "}

                    <a href={`mailto:${person.email}`}>
                      {person.email}
                    </a>

                  </p>


                  {/* Phone */}
                  {person.phone && (
                    <p className="committee-mini-contact">

                      <strong>Phone:</strong>{" "}

                      {person.phone}

                    </p>
                  )}


                  {/* English Role */}
                  <p className="committee-mini-role">
                    {person.role}
                  </p>

                  {/* Marathi Role */}
                  <p className="committee-mini-marathi-role">
                    {person.marathiRole}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default CommitteeAccordion;