// mob-topicLanding.js

import React from "react";
import "./MobileTopicLanding.css";

const MobileTopicLanding = ({ landingContent }) => {
  const {
    title,
    paragraph,
    buttonText,
    imageUrl,
    imageAlt,
    demoLink,
    minititle,
  } = landingContent;

  return (
    <div className="mob-topic_landing-main">
      <div className="mob-topic_landing-container">
        <div className="mob-topic_landing-col">
          <div className="mob-topic_landing-text-col">
            <p className="mob-topic_landing-praragraph mob-topic-landing-text">
              {minititle}
            </p>
            <h1 className="mob-topic-landing-text">{title}</h1>
            <p className="mob-topic_landing-praragraph mob-topic-landing-text">
              {paragraph}
            </p>
            <div className="mob-topiclanding-buttons-row">
              <a
                className="button-mob-topic_landingpage section-link mob-topic-landing-text"
                href={demoLink}
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
        <div className="mob-topic_landing-col">
          <div className="mob-topic_landing-image-col">
            <img src={imageUrl} alt={imageAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTopicLanding;
