import React from 'react';
import './MobileSubTopicLanding.css';

const MobileLanding = (LandingContent) => {
  const {
    title,
    paragraph,
    buttonText,
    demoLink,
    minititle,
  } = LandingContent.Landing;

  return (
    <div className="mob-subtopic-landing-main">
      <div className="mob-subtopic-landing-container">
        <div className="mob-subtopic-content-container">
          <p className="mob-subtopic-landing-praragraph mob-subtopic-landing-text">{minititle}</p>
          <h1 className="mob-subtopic-landing-text">{title}</h1>
          <p className="mob-subtopic-landing-praragraph mob-subtopic-landing-text">{paragraph}</p>
          <div className="mob-subtopic-btn-container">
            {buttonText && (
              <a className="mob-subtopic-btn section-link mob-subtopic-landing-text" href={demoLink}>
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLanding;
