import React from 'react';
import Landing from '../../components/subTopic/Landing'
import Details from '../../components/subTopic/Details'
import ContactBar from '../../components/Home/ContactBar'
import aboutUsContent from '../../../../data/aboutData/aboutPageData';


function MobileAboutus() {


  return (
    <div>
     <Landing Landing={aboutUsContent.LandingContent} />
     <Details Details={aboutUsContent.DetailsContent}/>
     <ContactBar />
     
    </div>
  );
}

export default MobileAboutus;
