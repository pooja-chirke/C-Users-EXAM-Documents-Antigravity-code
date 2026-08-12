import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/Hero";
import DateCard from "../../components/DateCard";
import CommitteeAccordion from "../../components/CommitteeAccordion";

import dtLogo from "../../assets/logos/dt-logo.png";
import aicteLogo from "../../assets/logos/aicte-logo.png";

import "./HomePage.module.css";

const importantDates = [
  {
    event: "Paper Submission Deadline",
    marathiEvent: "संशोधन लेख सादरीकरणाची अंतिम तारीख",
    date: "September 30, 2026",
    marathiDate: "३० सप्टेंबर २०२६",
    badge: "Upcoming",
    marathiBadge: "आगामी",
    statusClass: "bg-primary",
  },
  {
    event: "Notification of Acceptance",
    marathiEvent: "स्वीकृतीची सूचना",
    date: "November 15, 2026",
    marathiDate: "१५ नोव्हेंबर २०२६",
    badge: "Schedule",
    marathiBadge: "वेळापत्रक",
    statusClass: "bg-info text-dark",
  },
  {
    event: "Camera-Ready Paper Due",
    marathiEvent: "अंतिम संशोधन लेख सादरीकरणाची तारीख",
    date: "November 30, 2026",
    marathiDate: "३० नोव्हेंबर २०२६",
    badge: "Schedule",
    marathiBadge: "वेळापत्रक",
    statusClass: "bg-warning text-dark",
  },
  {
    event: "Conference Dates",
    marathiEvent: "परिषदेच्या तारखा",
    date: "8 January 2027 - 9 January 2027",
    marathiDate: "८ जानेवारी २०२७ - ९ जानेवारी २०२७",
    badge: "Event",
    marathiBadge: "कार्यक्रम",
    statusClass: "bg-success",
  },
];

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />

      <section
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
          padding: "28px 20px",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "55px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "180px",
              }}
            >
              <img
                src={dtLogo}
                alt="Department of Technical Education Maharashtra"
                style={{
                  maxWidth: "180px",
                  maxHeight: "85px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>

            <div
              style={{
                width: "1px",
                height: "70px",
                background: "#d6d6d6",
              }}
            />

            <div
              style={{
                textAlign: "center",
                minWidth: "220px",
                padding: "5px 20px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#777",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                Associated With
              </div>

              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  color: "#6b3fa0",
                  letterSpacing: "0.5px",
                  marginBottom: "4px",
                }}
              >
                VAANI
              </div>

              <div
                style={{
                  fontFamily: "Mangal, Noto Sans Devanagari, sans-serif",
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#777",
                }}
              >
                वाणीशी संलग्न
              </div>
            </div>

            <div
              style={{
                width: "1px",
                height: "70px",
                background: "#d6d6d6",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "180px",
              }}
            >
              <img
                src={aicteLogo}
                alt="AICTE Logo"
                style={{
                  maxWidth: "180px",
                  maxHeight: "85px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <section className="border-top border-bottom py-5">
          <h2 className="display-6 fw-bold font-heading text-vjti-maroon mb-5">
            Important Dates
            <div
              style={{
                fontFamily: "Mangal, Noto Sans Devanagari, sans-serif",
                fontSize: "22px",
                marginTop: "8px",
                color: "#6b3fa0",
                fontWeight: "600",
              }}
            >
              महत्त्वाच्या तारखा
            </div>
          </h2>

          <div className="row g-4 justify-content-center">
            {importantDates.map((item, idx) => (
              <DateCard
                key={idx}
                event={item.event}
                date={item.date}
                badge={item.badge}
                marathiEvent={item.marathiEvent}
                marathiDate={item.marathiDate}
                marathiBadge={item.marathiBadge}
                statusClass={item.statusClass}
              />
            ))}
          </div>
        </section>

        <section className="py-5">
          <h2 className="display-6 fw-bold font-heading text-vjti-maroon mb-2">
            Conference Leadership
          </h2>

          <div
            style={{
              fontFamily: "Mangal, Noto Sans Devanagari, sans-serif",
              fontSize: "22px",
              color: "#6b3fa0",
              fontWeight: "600",
              marginBottom: "30px",
            }}
          >
            परिषदेचे नेतृत्व
          </div>

          <CommitteeAccordion />
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;