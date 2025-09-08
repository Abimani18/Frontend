// MobileTopicDetails.js

import React from "react";
import "./MobileTopicDetails.css";

const Details = ({ detailsContent }) => {
  const { DetailsIntro, DetailsContent } = detailsContent;

  return (
    <div className="mob-topicDetails-main">
      <div className="mob-topicDetailsContentIntro-container">
        <h1 className="mob-topicDetailsContentIntro-heading">
          {DetailsIntro.heading}
        </h1>
        <p className="mob-topicDetailsContentIntro-paragraph mob-topic-details-text">
          {DetailsIntro.paragraph}
        </p>
      </div>
      {DetailsContent.map((content, index) => (
        <div className="mob-topic-details-row-fluid" key={index}>
          <div className="mob-topic-details-col">
            <div className="mob-topic-details-image-col">
              <img src={content.imageUrl} alt={content.imageAlt} />
            </div>
          </div>
          <div className="mob-topic-details-col">
            <div className="mob-topic-details-text-col">
              <p className="mob-topic-details-paragraph mob-topic-details-text">
                {content.title}
              </p>
              <h1 className="mob-topic-details-text">{content.heading}</h1>
              <p className="mob-topic-details-paragraph mob-topic-details-text">
                {content.paragraph}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
