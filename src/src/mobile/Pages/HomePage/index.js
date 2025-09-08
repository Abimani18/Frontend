import React from 'react';
import Landing from '../../components/Home/landing'
import Trusted from '../../components/Home/trusted';
import Service from '../../components/Home/service';
import Counter from '../../components/Home/counter'
import ContactBar from '../../components/Home/ContactBar'
function MobileHome() {
  return (
    <div>
     <Landing />
     {/* <Trusted /> */}
     <Service />
     <Counter />
     <ContactBar />
     
     
    </div>
  );
}

export default MobileHome;
