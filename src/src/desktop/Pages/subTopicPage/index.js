import React from 'react';
import Landing from '../../components/subTopic/Landing'
import Details from '../../components/subTopic/Details'
import ContactBar from '../../components/Home1/ContactBar';

function SubTopic({Data}) {
 

  return (
    <div>
     <Landing Landing={Data.LandingContent} />
     <Details Details={Data.DetailsContent}/>
     <ContactBar />
     
    </div>
  );
}

export default SubTopic;
