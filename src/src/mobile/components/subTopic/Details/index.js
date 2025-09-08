import React from "react";
import "./MobileSubTopicDetails.css";

const MobileDetails = (DetailsContent) => {
  const data = DetailsContent.Details;

  return (
    <div className="mob-subtopic-details-main">
      <div className="mob-subtopic-detailsContentIntro-container">
        <h1 className="mob-subtopic-detailsContentIntro-heading">
          {data.heading}
        </h1>
        <p className="mob-subtopic-detailsContentIntro-paragraph mob-subtopic-details-text">
          {data.paragraph}
        </p>
      </div>
      {data.features.map((content, index) => (
        <div className="mob-subtopic-details-row-fluid" key={index}>
          <div className="mob-subtopic-details-col">
            <div className="mob-subtopic-details-image-col">
              <img src={content.imageUrl} alt={content.imageAlt} />
            </div>
          </div>
          <div className="mob-subtopic-details-col">
            <div className="mob-subtopic-details-text-col">
              <p className="mob-subtopic-details-paragraph mob-subtopic-details-text">
                {content.title}
              </p>
              <h1 className="mob-subtopic-details-text">{content.heading}</h1>
              <p className="mob-subtopic-details-paragraph mob-subtopic-details-text">
                {content.paragraph}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileDetails;
