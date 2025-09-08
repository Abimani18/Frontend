// InternshipPage.js

import React from 'react';
import CareerGallery from "../../components/Careers/CareerGallery";
import Landing from '../../components/subTopic/Landing';
import InternshipContent from '../../../../data/careers/internshipData/InternshipLandingData';
import { internshipDetails } from "../../../../data/careers/internshipData/internshipData";

function InternshipPage() {
  return (
    <div>
      <Landing Landing={InternshipContent.LandingContent} />
      <CareerGallery jobDetails={internshipDetails} type="internship" /> {/* Corrected prop name to match CareerGallery component */}
    </div>
  );
}

export default InternshipPage;
