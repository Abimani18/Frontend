import React, { useState } from "react";
import "./AddSocialMediaForm.css";

const AddSocialMediaForm = ({
  socialMediaFormData,
  handleSocialMediaChange,
  saveSocialMediaLink,
  setIsAddingSocialMedia,
}) => {
  const [isLinkValid, setIsLinkValid] = useState(true);

  const validateLink = (link) => {
    // Regular expressions to match valid GitHub and LinkedIn profile URLs
    const githubRegex =
      /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/;
    const linkedinRegex =
      /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;

    // Check if the link matches either GitHub or LinkedIn pattern
    return githubRegex.test(link) || linkedinRegex.test(link);
  };

  const handleLinkChange = (e) => {
    const link = e.target.value;
    const isValid = validateLink(link);
    setIsLinkValid(isValid);
    handleSocialMediaChange("link", link);
  };

  return (
    <div className="addsmdetails-overlay" onClick={() => setIsAddingSocialMedia(false)}>
      <div className="addsmdetails-form" onClick={(e) => e.stopPropagation()}>
        <label htmlFor="platformSelect" className="addsmdetails-label">
          Select Platform
        </label>
        <select
          id="platformSelect"
          value={socialMediaFormData.platform}
          onChange={(e) => handleSocialMediaChange("platform", e.target.value)}
          className="addsmdetails-input"
        >
          <option value="">Select Platform</option>
          <option value="Github">Github</option>
          <option value="LinkedIn">LinkedIn</option>
          {/* Add more options as needed */}
        </select>
        <label htmlFor="linkInput" className="addsmdetails-label">
          Link
        </label>
        <input
          type="text"
          id="linkInput"
          placeholder="Enter Link"
          value={socialMediaFormData.link}
          onChange={handleLinkChange}
          className={`addsmdetails-input ${!isLinkValid ? "addsmdetails-invalid-link" : ""}`}
        />
        {!isLinkValid && (
          <p className="addsmdetails-invalid-link-message">Please enter a valid link</p>
        )}
        <div className="addsmdetails-button-container">
          <button
            type="button"
            onClick={saveSocialMediaLink}
            className="addsmdetails-button addsmdetails-save-button"
            disabled={!isLinkValid || !socialMediaFormData.platform}
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => setIsAddingSocialMedia(false)}
            className="addsmdetails-button addsmdetails-cancel-button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSocialMediaForm;
