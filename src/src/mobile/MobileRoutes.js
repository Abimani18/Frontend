// route.js
import React from "react";
import { Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
import Home from "./Pages/HomePage";
import Header from "./components/General/Header";
import Footer from "./components/General/Footer";
import Careers from "./Pages/CarrersPage";
import ContactPage from "./Pages/ContactPage";
import AboutUs from "./Pages/AboutusPage";
import JobOpening from "./Pages/JobOpeningPage";
import SubTopicPage from "./Pages/subTopicPage";


import Legal from "./Pages/AdditionPages/legalPage";

import routeData from "../../data/routeData";

import Intership from "./Pages/InternshipPage";

import ProductPage from "./Pages/ProductsPages";
import ServicePage from "./Pages/ServicePage";
import GetstartedPage from "./Pages/GetstartedPage";

const MobileRoutes = () => {
  return (
    <RouterRoutes>
      <Route
        exact
        path="/"
        element={
          <>
           
            <Header />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        path="/careers"
        element={
          <>
            <Header />
            <Careers />
            <Footer />
          </>
        }
      />
      <Route
        path="/careers/job-openings"
        element={
          <>
            <Header />
            <JobOpening />
            <Footer />
          </>
        }
      />
      <Route
        path="/careers/internship"
        element={
          <>
            <Header />
            <Intership />
            <Footer />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Header />
            <AboutUs />
            <Footer />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Header />
            <ContactPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/products"
        element={
          <>
            <Header />
            <ProductPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/services"
        element={
          <>
            <Header />
            <ServicePage />
            <Footer />
          </>
        }
      />
      <Route
        path="/get-started"
        element={
          <>
            <Header />
            <GetstartedPage />
            <Footer />
          </>
        }
      />


      <Route
        path="/legal"
        element={
          <>
            <Header />
            <Legal />
            <Footer />
          </>
        }
      />
      

      {console.log(routeData)}
      {routeData.map(({ url, Data }) => (
        <Route
          key={url}
          path={url}
          element={
            <>
              <Header />
              <SubTopicPage Data={Data} />
              <Footer />
            </>
          }
        />
      ))}

      <Route path="*" element={<Navigate to="/" />} />
    </RouterRoutes>
  );
};

export default MobileRoutes;
