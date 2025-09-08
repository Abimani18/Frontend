import React from 'react';
import './SubProSerLanding.css';

const Landing = (LandingContent) => {
  const {
    title,
    paragraph,
    buttonText,
    demoLink,
    minititle,
  } = LandingContent.Landing;
 
  return (
    <div className="SubProSer_landing-row-fluid">
      <div className="SubProSer_landing-container">
        <div className="SubProSer_landing-text-col">
          <p className="SubProSer_landing-praragraph SubProSer-landing-text">{minititle}</p>
          <h1 className="SubProSer-landing-text">{title}</h1>
          <p className="SubProSer_landing-praragraph SubProSer-landing-text">{paragraph}</p>
          <div className="SubProSerlanding-buttons-row">
            {buttonText && (
              <a className="button-SubProSer_landingpage section-link SubProSer-landing-text" href={demoLink}>
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
