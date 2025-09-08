// Landing.js
import React from 'react';
import './Landing.css';

const Landing = ({ title, paragraph, buttonText, demoLink }) => {
  return (
    <div className="Landing-row-fluid">
      <div className="Landing-container">
        <div className="Landing-col">
          <div className="Landing-text-col">
            <h1 className="Landing-heading">{title}</h1>
            <p className="Landing-paragraph">{paragraph}</p>
            <div className="Landing-buttons-row">
              <a className="Landing-button section-link" href={demoLink}>
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
