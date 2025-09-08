// ServicePage.js

import React from "react";
import Landing from "../../components/Topic/Landing";
import Details from "../../components/Topic/Details";
import ContactBar from "../../components/Home/ContactBar";
import ServicePageData from "../../../../data/serviceData/serviceData";

function MobileServicePage() {
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
  
  export default MobileServicePage;