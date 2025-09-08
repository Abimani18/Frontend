import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./CareersSuggestionCard.css";

const JobCard = ({ jobDetails, pathname }) => {
  const { mode, type, Role, location, About, routeID } = jobDetails;

  const linkTo = pathname.includes("job-openings")
    ? `/careers/job-openings/jobdescription/${routeID}`
    : `/careers/internship/jobdescription/${routeID}`;

  return (
    <div className="career-suggestion-careerCard">
      <div className="career-suggestion-mode-container">{mode}</div>

      <div className="career-suggestion-type-container">
        <p>{type}</p>
      </div>
      <h3>{Role}</h3>
      <div className="career-suggestion-location-container">
        <FaMapMarkerAlt size={20} />
        <p>{location}</p>
      </div>
      <div className="career-suggestion-aboutjob-container">
        <p>{About}</p>
      </div>
      <Link to={linkTo}>
        <button>Apply for this Role</button>
      </Link>
    </div>
  );
};

const CareersSuggestionCard = ({ jobDetails }) => {
  const location = useLocation();

  return (
    <div className="career-suggestion-main">
      
      <div className="career-suggestion-jobcard-container">
        <JobCard jobDetails={jobDetails} pathname={location.pathname} />
      </div>
    </div>
  );
};

export default CareersSuggestionCard;
