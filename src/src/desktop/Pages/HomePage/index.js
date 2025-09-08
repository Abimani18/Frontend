import React from "react";
import Landing from "../../components/Home/homeLanding";
import Trusted from "../../components/Home/trusted";
import Service from "../../components/Home/service";
import Counter from "../../components/Home/counter";
// import Testimonials from '../../components/Home/testimonials'
// import ContactBar from "../../components/Home1/ContactBar";
import VoiceFirstPage from "../../components/voice-page";
// import Testimonials from "../../components/testimonial";
import Card from "../../components/cards/Card";
import LandingPage from "../../components/Home1/LandingPage/LandingPage";
import GenerationPage from "../../components/Home1/Generation/GenerationPage";
import Futures from "../../components/Home1/Futures/Futures";
import AiServices from "../../components/Home1/AiServices/AiServices";
import LogoSlider from "../../components/Home1/LogoSlider/LogoSlider";
import Testimonials from "../../components/Home1/Testimonials/Testimonials";
import ServiceSection from "../../components/Home1/ServiceSection/ServiceSection";
import ContactBar from "../../components/Home1/ContactBar";
import Gallary from "../../components/Home1/Gallary/Gallary";
import EfficiencyPage from "../../components/Home1/EfficiencyPage/EfficiencyPage";
import Pricing from "../../components/Home1/Pricing/Pricing";
function Home() {
  return (
    <div>
      <LandingPage />
      <GenerationPage/>
      <Futures/>
      <AiServices/>
      <LogoSlider />
      <Testimonials/>
      <ServiceSection/>
      <ContactBar />
      <Gallary/>
      <EfficiencyPage />
      <Pricing />
      {/* <Card />
      <Landing />
      <Trusted />
      <Service /> */}
      {/* <Counter /> */}

      {/* <VoiceFirstPage />
      <Testimonials /> */}
      
    </div>
  );
}

export default Home;
