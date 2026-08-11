import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/Hero";
import DateCard from "../../components/DateCard";
import CommitteeAccordion from "../../components/CommitteeAccordion";

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

      {/* Hero Banner */}
      <Hero />

      {/* Page Content */}
      <div className="container py-5">

        {/* Important Dates */}
        <section className="border-top border-bottom py-5">

          {/* English + Marathi Heading */}
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

                // English
                event={item.event}
                date={item.date}
                badge={item.badge}

                // Marathi
                marathiEvent={item.marathiEvent}
                marathiDate={item.marathiDate}
                marathiBadge={item.marathiBadge}

                // Bootstrap badge class
                statusClass={item.statusClass}
              />
            ))}

          </div>

        </section>

        {/* Organizing Committee */}
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