import React from 'react';
import './DateCard.css';

const DateCard = ({
  event,
  marathiEvent,
  date,
  marathiDate,
  badge,
  marathiBadge,
  statusClass
}) => (
  <div className="col-lg-3 col-sm-6">
    <div className="card border-0 shadow-sm rounded-4 p-3 card-hoc bg-white text-center h-100">

      <div className="card-body">

        {/* English Badge */}
        <span className={`badge ${statusClass} px-3 py-1 mb-2 font-monospace`}>
          {badge}
        </span>

        {/* Marathi Badge */}
        <div className="marathi-badge">
          {marathiBadge}
        </div>

        {/* English Event */}
        <h6 className="fw-bold text-dark mb-1">
          {event}
        </h6>

        {/* Marathi Event */}
        <div className="marathi-event mb-2">
          {marathiEvent}
        </div>

        {/* English Date */}
        <h5 className="fw-bold font-monospace text-vjti-maroon mb-1">
          {date}
        </h5>

        {/* Marathi Date */}
        <div className="marathi-date">
          {marathiDate}
        </div>

      </div>

    </div>
  </div>
);

export default DateCard;