// Careers.js
import React from "react";
import Landing from "../../components/Careers/Landing";
import Details from "../../components/Topic/Details";
import CareersPageData from "../../../../data/careers/CareersData";

function Careers() {
  const landingContent = CareersPageData.landingContent; // Assuming the landing content is in CareersPageData
  const detailsContent = {
    DetailsIntro: CareersPageData.DetailsIntro,
    DetailsContent: CareersPageData.DetailsContent,
  };

  return (
    <div>
      <Landing {...landingContent} />
      <Details detailsContent={detailsContent} />
    </div>
  );
}

export default Careers;
