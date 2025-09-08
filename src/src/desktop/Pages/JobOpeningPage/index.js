import React from "react";

import CareerGallery from "../../components/Careers/CareerGallery";
import Landing from "../../components/subTopic/Landing";
import JobOpeningContent from "../../../../data/careers/JobOpeningData/jobOpeningData";
import { jobOpeningDetails } from "../../../../data/careers/JobOpeningData/jobGalleryData";
import ContactBar from "../../components/Home1/ContactBar";

function JobOpeningPage() {
  return (
    <div>
      <Landing Landing={JobOpeningContent.LandingContent} />
      <CareerGallery jobDetails={jobOpeningDetails} type="job" />
      <ContactBar />
    </div>
  );
}

export default JobOpeningPage;
