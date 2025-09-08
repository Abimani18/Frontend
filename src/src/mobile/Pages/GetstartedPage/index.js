// GetstartedPage.js

import React from "react";
import Landing from "../../components/Topic/Landing";
import Details from "../../components/Topic/Details";
import ContactBar from "../../components/Home/ContactBar";
import GetstartedPageData from "../../../../data/getstartedData/getstartedData";

function MobileGetstartedPage() {
    const landingContent = GetstartedPageData.landingContent;
    const detailsContent = {
      DetailsIntro: GetstartedPageData.DetailsIntro,
      DetailsContent: GetstartedPageData.DetailsContent,
    };
  
    return (
      <div>
        <Landing landingContent={landingContent} />
        <Details detailsContent={detailsContent} />
        <ContactBar />
      </div>
    );
  }
  
  export default MobileGetstartedPage;