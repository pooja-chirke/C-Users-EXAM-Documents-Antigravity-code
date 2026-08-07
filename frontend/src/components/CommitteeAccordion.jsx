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
            <li><strong>Shri.B.Venugopal Reddy</strong> (IAS - Maharashtra - 1994, Hon'ble Addl.Chief Secretary) </li>
            <li><strong>Dr.Pramod Naik</strong>  (Hon'ble Minister for Technical & Higher Education, Maharashtra State)</li>
            <li><strong>Dr. Sudhir Mehta</strong>  (Chairperson, BoG, VJTI)</li>
            <li><strong>Dr. S. D. Kore</strong> (Director, VJTI)</li>
            <li><strong>Dr. Sunil Luthra</strong> (Director of AICTE ,Delhi )</li>

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
          <p><strong>Dr. S. T. Shingade</strong><br />Assistant Professor<br />Department of Computer Engineering &amp; IT<br />Email: <a href="mailto:stshingade@ce.vjti.ac.in">stshingade@ce.vjti.ac.in</a><br />Phone: +91-8793707873 <br />(Coordinator, SAQC - VJTI 2027) </p>
          <p><strong>Dr. V.B.Nikam</strong><br />Associate Professor<br />Department of Computer Engineering &amp; IT<br />Email: <a href="mailto:vbnikam@it.vjti.ac.in">vbnikam@it.vjti.ac.in</a><br />(Co-cordinator, SAQC - VJTI 2027)</p>
        </div>
      </div>
    </div>

    {/* Organizing Committee */}

  </div>

);

export default CommitteeAccordion;
