// CareerGallery.js

import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./CareerGallery.css";

const JobCard = ({ jobDetails, applyForJob }) => {
  const { mode, icon, type, Role, location, About } = jobDetails;

  return (
    <div className="career-gallery-careerCard">
      <div className="career-gallery-mode-container">{mode}</div>
      <div className="career-gallery-titleicon-container">{icon}</div>
      <div className="career-gallery-type-container">
        <p>{type}</p>
      </div>
      <h3>{Role}</h3>
      <div className="career-gallery-location-container">
        <FaMapMarkerAlt size={20} />
        <p>{location}</p>
      </div>
      <div className="career-gallery-aboutjob-container">
        <p>{About}</p>
      </div>
      <button onClick={() => applyForJob(jobDetails)}>
        Apply for this job
      </button>
    </div>
  );
};

const CareerGallery = ({ jobDetails, type }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const debouncedSearch = setTimeout(() => {
      const filtered = jobDetails.filter((job) => {
        const matchesSearch = job.Role.toLowerCase().includes(
          searchQuery.toLowerCase()
        );
        return matchesSearch;
      });
      setFilteredJobs(filtered);
    }, 300);

    return () => clearTimeout(debouncedSearch);
  }, [searchQuery, jobDetails]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const applyForJob = (jobDetails) => {
    const emailSubject = `Application for ${jobDetails.Role}`;
    const emailAddress = "careers@imaggar.com";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(
      emailAddress
    )}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
      `   /// write an appropriate cover and letter and don't forget to attach the CV / Resume with this email /// }`
    )}`;
    window.open(gmailLink);
  };

  // Dynamic placeholder based on the type prop
  const placeholderText =
    type === "job" ? "Search by job title..." : "Search by internship title...";

  return (
    <div className="career-gallery-main">
      <div className="career-gallery-search-bar">
        <input
          type="text"
          placeholder={placeholderText}
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className="career-gallery-jobcard-container">
        {filteredJobs.map((jobDetails, index) => (
          <JobCard key={index} jobDetails={jobDetails} applyForJob={applyForJob} />
        ))}
      </div>
    </div>
  );
};

export default CareerGallery;
