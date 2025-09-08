import React from "react";
import {
  FaPaperPlane,
  FaGraduationCap,
  FaBriefcase,
  FaLanguage,
  FaTasks,
  FaBuilding,
  FaBalanceScale,
  FaInfoCircle,
  FaHeart,
} from "react-icons/fa";
import "./JobDescription.css";

import logo from "./logoMobile.png";

const JobDescription = ({ jobDetails }) => {
  const {
    type,
    mode,
    location,
    Role,
    education,
    experience,
    language,
    responsibilities,
    CompanyDescription,
    EqualOpportunity,
    About,
    Perks,
  } = jobDetails;

  return (
    <div className="jd-landing">
      <div className="jd-main">
        <div className="jd-box-container">
          <div className="jd-box-content"></div>
        </div>
        <div className="jd-bg-roundwhite">
          <img src={logo} alt="Company-Logo" className="jd-rounded-image" />
        </div>
        <div className="jd-header">
          <div className="jd-details">
            <h3>{Role}</h3>
            <p className="jd-type">- {type}</p>
            <p className="jd-mode">- {mode}</p>
            <p className="jd-location">- {location}</p>
          </div>
        </div>

        <div className="jd-section">
          <h3>
            <FaGraduationCap className="jd-icon" /> Education
          </h3>
          <p>
            -{" "}
            {education.BachelorDegree
              ? "Bachelor's Degree in " + education.DegreeField.join(", ")
              : "No specific education requirements"}
          </p>
        </div>

        <div className="jd-section">
          <h3>
            <FaBriefcase className="jd-icon" /> Experience
          </h3>
          <p>
            - Level: {experience.level}, Years of Experience:{" "}
            {experience.Years_of_Experience}
          </p>
        </div>
        <div className="jd-section">
          <h3>
            <FaBriefcase className="jd-icon" /> Skills
          </h3>

          <ul className="jd-skills">
            {experience.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <p className="jd-additionaSkills">
            - Additional Skills: {experience.additionalSkills.join(", ")}
          </p>
        </div>

        <div className="jd-section">
          <h3>
            <FaLanguage className="jd-icon" /> Language
          </h3>
          <p>- {language}</p>
        </div>

        <div className="jd-section">
          <h3>
            <FaTasks className="jd-icon" /> Responsibilities
          </h3>
          <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>- {responsibility}</li>
            ))}
          </ul>
        </div>

        <div className="jd-section">
          <h3>
            <FaBuilding className="jd-icon" /> Company Description
          </h3>
          <p>- {CompanyDescription}</p>
        </div>

        <div className="jd-section">
          <h3>
            <FaBalanceScale className="jd-icon" /> Equal Opportunity
          </h3>
          <p>
            -{" "}
            {EqualOpportunity
              ? "This is an equal opportunity position."
              : "Not specified."}
          </p>
        </div>

        <div className="jd-section">
          <h3>
            <FaInfoCircle className="jd-icon" /> About the Job
          </h3>
          <p>- {About}</p>
        </div>

        <div className="jd-section">
          <h3>
            <FaHeart className="jd-icon" /> Perks
          </h3>
          <ul>
            {Perks.map((perk, index) => (
              <li key={index}>- {perk}</li>
            ))}
          </ul>
        </div>

        <div className="jd-section jd-apply-section">
          <button className="jd-apply-button">
            Apply Now <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
