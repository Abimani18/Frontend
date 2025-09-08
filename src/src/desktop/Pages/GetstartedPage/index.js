// GetstartedPage.js

import React from "react";
import Landing from "../../components/Topic/Landing";
import Details from "../../components/Topic/Details";
import GetstartedPageData from "../../../../data/getstartedData/getstartedData";
import ContactBar from "../../components/Home1/ContactBar";

function GetstartedPage() {
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
  
  export default GetstartedPage;