import React from "react";
import CareerGallery from "../../components/Careers/CareerGallery"; // Corrected import statement
import ContactBar from "../../components/Home/ContactBar";
import Landing from "../../components/subTopic/Landing";
import JobOpeningContent from "../../../../data/careers/JobOpeningData/jobOpeningData";
import { jobOpeningDetails } from "../../../../data/careers/JobOpeningData/jobGalleryData";
function MobileJobopeningPage() {
  return (
    <div>
    <Landing Landing={JobOpeningContent.LandingContent} />
    <CareerGallery jobDetails={jobOpeningDetails} type="job" />
    <ContactBar />
  </div>
  );
} 

export default MobileJobopeningPage;
