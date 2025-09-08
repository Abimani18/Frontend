// MobileCarrerLanding.js
import React from 'react';

import './MobileCarrerLanding.css';

const MobileCarrerLanding = ({ title, paragraph, buttonText, demoLink }) => {
  return (
    <div className="mob-carrer-landing-main">
      <div className="mob-carrer-landing-container">
        <div className="mob-carrer-landing-col">
          <div className="mob-carrer-landing-text-col">
            <h1 className="mob-carrer-landing-heading">{title}</h1>
            <p className="mob-carrer-landing-paragraph">{paragraph}</p>
            <div className="mob-carrer-landing-buttons-row">
              <a className="mob-carrer-landing-button section-link" href={demoLink}>
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCarrerLanding;
