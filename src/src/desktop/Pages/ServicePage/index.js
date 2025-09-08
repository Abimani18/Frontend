// ServicePage.js

import React from "react";
import Landing from "../../components/Topic/Landing";
import Details from "../../components/Topic/Details";
import ServicePageData from "../../../../data/serviceData/serviceData";
import ContactBar from "../../components/Home1/ContactBar";

function ServicePage() {
    const landingContent = ServicePageData.landingContent;
    const detailsContent = {
      DetailsIntro: ServicePageData.DetailsIntro,
      DetailsContent: ServicePageData.DetailsContent,
    };
  
    return (
      <div>
        <Landing landingContent={landingContent} />
        <Details detailsContent={detailsContent} />
        <ContactBar />
      </div>
    );
  }
  
  export default ServicePage;