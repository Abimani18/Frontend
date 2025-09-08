// CareerGallery.js

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./CareerGallery.css";

const JobCard = ({ jobDetails, pathname }) => {
  const { routeID, mode, type, Role, location, About } = jobDetails;

  const linkTo = pathname.includes("job-openings")
    ? `/careers/job-openings/jobdescription/${routeID}`
    : `/careers/internship/jobdescription/${routeID}`;

  return (
    <div className="career-gallery-careerCard">
      <div className="career-gallery-mode-container">{mode}</div>

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
      <Link to={linkTo}>
        <button>Know More</button>
      </Link>
    </div>
  );
};

const CareerGallery = ({ jobDetails }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const location = useLocation();

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

  return (
    <div className="career-gallery-main">
      <div className="career-gallery-search-bar">
        <input
          type="text"
          placeholder="Search by job title..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className="career-gallery-jobcard-container">
        {filteredJobs.map((jobDetails, index) => (
          <JobCard
            key={index}
            jobDetails={jobDetails}
            pathname={location.pathname}
          />
        ))}
      </div>
    </div>
  );
};

export default CareerGallery;
