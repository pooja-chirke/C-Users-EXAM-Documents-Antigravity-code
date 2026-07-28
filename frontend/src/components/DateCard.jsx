import React from 'react';
import './DateCard.css';

const DateCard = ({ event, date, badge, statusClass }) => (
  <div className="col-lg-3 col-sm-6">
    <div className="card border-0 shadow-sm rounded-4 p-3 card-hoc bg-white text-center h-100">
      <div className="card-body">
        <span className={`badge ${statusClass} px-3 py-1 mb-2 font-monospace`}>{badge}</span>
        <h6 className="fw-bold text-dark mb-2">{event}</h6>
        <h5 className="fw-bold font-monospace text-vjti-maroon mb-0">{date}</h5>
      </div>
    </div>
  </div>
);

export default DateCard;
