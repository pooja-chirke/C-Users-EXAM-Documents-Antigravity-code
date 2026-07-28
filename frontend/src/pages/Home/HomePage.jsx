import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Hero from '../../components/Hero';
import DateCard from '../../components/DateCard';
import CommitteeAccordion from '../../components/CommitteeAccordion';

import './HomePage.module.css';

const importantDates = [
  { event: 'Paper Submission Deadline', date: 'October 31, 2026', badge: 'Upcoming', statusClass: 'bg-primary' },
  { event: 'Notification of Acceptance', date: 'November 30, 2026', badge: 'Schedule', statusClass: 'bg-info text-dark' },
  { event: 'Camera-Ready Paper Due', date: 'December 15, 2026', badge: 'Schedule', statusClass: 'bg-warning text-dark' },
  { event: 'Conference Dates', date: '8 January 2027 - 9 January 2027', badge: 'Event', statusClass: 'bg-success' },
];

const HomePage = () => (
  <MainLayout>

    <Hero />
    {/* Important Dates Section */}
    <section className="py-5 bg-light border-top border-bottom">
      <div className="container py-4">
        <h2 className="display-6 fw-bold font-heading text-vjti-maroon mb-4">Important Dates</h2>
        <div className="row g-3 justify-content-center">
          {importantDates.map((item, idx) => (
            <DateCard
              key={idx}
              event={item.event}
              date={item.date}
              badge={item.badge}
              statusClass={item.statusClass}
            />
          ))}
        </div>
      </div>
    </section>
    {/* Organizing Committee Section */}
    <section className="py-5 bg-light">
      <div className="container py-4">
        <h2 className="display-6 fw-bold font-heading text-vjti-maroon mb-4">Organizing Committee</h2>
        <CommitteeAccordion />
      </div>
    </section>
  </MainLayout>
);

export default HomePage;
