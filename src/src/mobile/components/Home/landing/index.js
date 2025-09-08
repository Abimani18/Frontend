// MobileLanding.js
import React from 'react';
import HomeLandingData from '../../../../../data/homeData/homeLandingData';
import "./MobileLanding.css";

const MobileLanding = () => {
  const { title, spanText, paragraph, buttonText, imageUrl, imageAlt, demoLink, technologies } = HomeLandingData;

  return (
    <div className="mobile-landing-container">

       <div className="mobile-col">
          <div className="mobile-image-col">
            <img src={imageUrl} alt={imageAlt} />
          </div>
        </div>
      <div className="mobile-row">
        <div className="mobile-col">
          <div className="mobile-text-col">
            <h1>{title} <span>{spanText}</span></h1>
            <p className='mobile-landing-paragraph'>{paragraph}</p>
            <div className='Button-container'>
            <div className="mobile-buttons-row">
              <a className="mobile-button-landingpage section-link" href={demoLink}>
                {buttonText}
              </a>
            </div>
            </div>
          </div>
        </div>

       
      </div>

      <div className="mobile-second-row">
        {technologies.map((tech, index) => (
          <div key={index} className="mobile-card">
            <h2>{tech.techTitle}</h2>
            <p>{tech.techDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileLanding;
