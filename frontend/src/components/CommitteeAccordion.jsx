import React from 'react';

const CommitteeAccordion = () => (
  <div className="accordion" id="committeeAccordion">
    {/* Chief Patrons */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingPatrons">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePatrons" aria-expanded="true" aria-controls="collapsePatrons">
          Chief Patrons
        </button>
      </h2>
      <div id="collapsePatrons" className="accordion-collapse collapse show" aria-labelledby="headingPatrons" data-bs-parent="#committeeAccordion">
        <div className="accordion-body">
          <ul className="list-unstyled">
            <li><strong>Dr. Sudhir Mehta</strong> – Chairperson, BoG, VJTI</li>
            <li><strong>Dr. S. D. Kore</strong> – Director, VJTI</li>
          </ul>
        </div>
      </div>
    </div>
    {/* Conference Chair */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingChair">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseChair" aria-expanded="false" aria-controls="collapseChair">
          Conference Chair
        </button>
      </h2>
      <div id="collapseChair" className="accordion-collapse collapse" aria-labelledby="headingChair" data-bs-parent="#committeeAccordion">
        <div className="accordion-body">
          <ul className="list-unstyled">
            <li>Dr. K. K. Sarode (Dean Academics)</li>
            <li>Dr. S. P. Borkar (Dean Admin)</li>
            <li>Dr. V. B. Nikam (HoD)</li>
            <li>Dr. M. R. Shirsole (ICT Infrastructure)</li>
            <li>Dr. M. M. Chavan (Coordinator GIAN)</li>
          </ul>
        </div>
      </div>
    </div>
    {/* Convener */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingConvener">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConvener" aria-expanded="false" aria-controls="collapseConvener">
          Convener
        </button>
      </h2>
      <div id="collapseConvener" className="accordion-collapse collapse" aria-labelledby="headingConvener" data-bs-parent="#committeeAccordion">
        <div className="accordion-body">
          <p><strong>Dr. S. T. Shingade</strong><br />Assistant Professor<br />Department of Computer Engineering &amp; IT<br />Email: <a href="mailto:stshingade@ce.vjti.ac.in">stshingade@ce.vjti.ac.in</a><br />Phone: +91-8793707873</p>
          <p><strong>Dr. S. S. Survekar</strong><br />Assistant Professor<br />Department of Computer Engineering &amp; IT<br />Email: <a href="mailto:sssurvekar@ce.vjti.ac.in">sssurvekar@ce.vjti.ac.in</a><br />Phone: +91-8698510161</p>
        </div>
      </div>
    </div>
    {/* Organizing Secretary */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingSecretary">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSecretary" aria-expanded="false" aria-controls="collapseSecretary">
          Organizing Secretary
        </button>
      </h2>
      <div id="collapseSecretary" className="accordion-collapse collapse" aria-labelledby="headingSecretary" data-bs-parent="#committeeAccordion">
        <div className="accordion-body">
          <p><strong>Prof. S. S. Lachure</strong><br />Assistant Professor<br />Department of CE &amp; IT<br />Phone: +91-8888602003</p>
        </div>
      </div>
    </div>
    {/* Organizing Committee */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingCommittee">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCommittee" aria-expanded="false" aria-controls="collapseCommittee">
          Organizing Committee
        </button>
      </h2>
      <div id="collapseCommittee" className="accordion-collapse collapse" aria-labelledby="headingCommittee" data-bs-parent="#committeeAccordion">
        <div className="accordion-body">
          <ul className="list-unstyled">
            <li>Prof. P. M. Chavan</li>
            <li>Prof. S. C. Shrawne</li>
            <li>Dr. V. K. Sambale</li>
            <li>Dr. S. S. Kudale</li>
            <li>Prof. M. U. Kulkarni</li>
            <li>Prof. K. K. Joshi</li>
            <li>Dr. V. Deshmukh</li>
            <li>Prof. V. D. Dhore</li>
            <li>Dr. Noshin Sabawala</li>
            <li>Prof. Pratik Desai</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default CommitteeAccordion;
