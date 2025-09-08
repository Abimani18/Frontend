// ProductPage.js

import React from "react";
import Landing from "../../components/Topic/Landing";
import Details from "../../components/Topic/Details";
import ContactBar from "../../components/Home/ContactBar";
import ProductPageData from "../../../../data/productData/productData";

function MobileProductPage() {
    const landingContent = ProductPageData.landingContent;
    const detailsContent = {
      DetailsIntro: ProductPageData.DetailsIntro,
      DetailsContent: ProductPageData.DetailsContent,
    };
  
    return (
      <div>
        <Landing landingContent={landingContent} />
        <Details detailsContent={detailsContent} />
        <ContactBar />
      </div>
    );
  }
  
  export default MobileProductPage;