import React from "react";
import { Route, Routes as RouterRoutes, Navigate, useParams, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet and HelmetProvider
import Home from "./Pages/HomePage";
import Header from "./components/General/Header";
import Footer from "./components/General/Footer";
import SubscribePopup from "./components/General/SubscribePopup";
import ContactPage from "./Pages/ContactPage";
import AboutUs from "./Pages/AboutusPage";
import JobOpening from "./Pages/JobOpeningPage";
import SubTopicPage from "./Pages/subTopicPage";
import JobDescription from "./Pages/jobDescriptionPage";
import MCQComponent from './Pages/preliminaryRound';
import Legal from "./Pages/AdditionPages/legalPage";
import Login from './Pages/AuthPage/LoginPage';
import routeData from "../../data/routeData";
import RegisterPage from "./Pages/AuthPage/RegisterPage";
import ForgotPage from "./Pages/AuthPage/ForgotPage";
import Intership from "./Pages/InternshipPage";
import ServicePage from "./Pages/ServicePage";
import GetstartedPage from "./Pages/GetstartedPage";
import ProfilePage from "./Pages/ProfilePage";

import helmetData from '../../data/HelmetData.json'; 
import Crm from "./productPages/Crm";
import Clockfolio from "./productPages/Clockfolio";
import Recruit from "./productPages/Recruit";
import Hrms from "./productPages/Hrms";
import Cms from "./productPages/Cms";
import Shield from "./productPages/Shield";
import WebsiteBuilder from "./productPages/WebsiteBuilder";
import TicketTracking from "./productPages/TicketTracking";
import CommunicationSystem from "./productPages/CommunicationSystem";
import ChatbotIntegrator from "./productPages/ChatbotIntegrator";
// Import the dynamic Helmet data from a JSON file


// Helper function to get Helmet data based on the current URL
const getHelmetData = (pathname) => {
  const data = helmetData[pathname] || { title: "Default Title", description: "Default description" };
  return data;
};

const DynamicHelmet = () => {
  const location = useLocation();
  const { title, description } = getHelmetData(location.pathname); // Get the title and description based on the URL

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

const DesktopRoutes = () => {
  return (
    <HelmetProvider> {/* Wrap your routes in HelmetProvider */}
       <Header />
       
      <RouterRoutes>
        <Route path="/cms" element={<Cms />}/>
        <Route path="/clock" element={<Clockfolio />}/>
        <Route path="/recruit" element={<Recruit />}/>
        <Route path="/hrms" element={<Hrms />}/>
        <Route path="/crm" element={<Crm />}/>
        <Route path="/shield" element={<Shield />}/>
        <Route path="/websiteBuilder" element={<WebsiteBuilder />}/>
        <Route path="/ticketTracking" element={<TicketTracking />}/>
        <Route path="/communicationSystem" element={<CommunicationSystem />}/>
        <Route path="/chatbot" element={<ChatbotIntegrator />}/>
       
        <Route
          exact
          path="/"
          element={
            <>
              <DynamicHelmet />
           
              <Home />
              <SubscribePopup />
           
            </>
          }
        />
        <Route
          path="/careers"
          element={
            <>
              <DynamicHelmet />
              
              <JobOpening />
           
            </>
          }
        />
        <Route
          path="/test"
          element={
            <>
              <DynamicHelmet />
              
              <MCQComponent />
           
            </>
          }
        />
        <Route
          path="/careers/internship"
          element={
            <>
              <DynamicHelmet />
              
              <Intership />
           
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <DynamicHelmet />
              
              <div style={{ height: '100vh' }}>
                <Login />
              </div>
           
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <DynamicHelmet />
              
              <RegisterPage />
           
            </>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <>
              <DynamicHelmet />
              
              <ForgotPage />
           
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <DynamicHelmet />
              
              <AboutUs />
           
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <DynamicHelmet />
              
              <ContactPage />
           
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <DynamicHelmet />
              
              <ServicePage />
           
            </>
          }
        />
        <Route
          path="/get-started"
          element={
            <>
              <DynamicHelmet />
              
              <GetstartedPage />
           
            </>
          }
        />
        <Route
          path="/careers/job-openings/jobdescription/:routeID"
          element={<JobDescriptionRoute />}
        />
        <Route
          path="/profile"
          element={
            <>
              <DynamicHelmet />
              
              <ProfilePage />
           
            </>
          }
        />
        <Route
          path="/legal"
          element={
            <>
              <DynamicHelmet />
              
              <Legal />
           
            </>
          }
        />
        
        {routeData.map(({ url, Data }) => (
          <Route
            key={url}
            path={url}
            element={
              <>
                <DynamicHelmet />
                
                <SubTopicPage Data={Data} />
             
              </>
            }
          />
        ))}
        
        <Route path="*" element={<Navigate to="/" />} />
        
      </RouterRoutes>
      
      <Footer />
      
    </HelmetProvider>
  );
};

const JobDescriptionRoute = () => {
  const { routeID } = useParams();

  return (
    <>
      <Helmet>
        <title>Job Description</title>
        <meta name="description" content={`Details for job ${routeID}`} />
      </Helmet>
      
      <JobDescription routeID={routeID} />
   
    </>
  );
};

export default DesktopRoutes;
