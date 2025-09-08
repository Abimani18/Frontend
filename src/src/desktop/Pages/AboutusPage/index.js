import React from 'react';
import Landing from '../../components/subTopic/Landing'
import Details from '../../components/subTopic/Details'
import aboutUsContent from '../../../../data/aboutData/aboutPageData';
import ContactBar from '../../components/Home1/ContactBar';


function Aboutus() {


  return (
    <div>
     <Landing Landing={aboutUsContent.LandingContent} />
     <Details Details={aboutUsContent.DetailsContent}/>
     <ContactBar />
     
    </div>
  );
}

export default Aboutus;
