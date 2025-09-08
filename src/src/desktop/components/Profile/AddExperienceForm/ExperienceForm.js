// ExperienceForm.js
import React, { useState, useEffect } from "react";
import './ExperienceForm.css';

const ExperienceForm = ({
  experienceFormData,
  handleExperienceChange,
  saveExperience,
  closeExperienceForm,
}) => {
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

  useEffect(() => {
    // Check if all required fields are filled
    const areAllFieldsFilled =
      experienceFormData.companyName &&
      experienceFormData.role &&
      experienceFormData.yearOfExperience &&
      experienceFormData.workModel !== "";

    // Enable the button only if all required fields are filled
    setIsSaveButtonDisabled(!areAllFieldsFilled);
  }, [experienceFormData]);

  const handleCancel = () => {
    // Add any additional logic you need before closing the form
    closeExperienceForm();
  };

  const handleSaveExperience = () => {
    if (!isSaveButtonDisabled) {
      // Only save experience if the button is enabled
      saveExperience();
    }
  };

  return (
    <div className="experience-adding-form-popup">
      <div className="experience-adding-form-container">
        <div className="experience-adding-form-group">
          <div className="experience-adding-field-name">Company Name</div>
          <input
            type="text"
            className="experience-adding-field-value"
            placeholder="Enter company name"
            value={experienceFormData.companyName}
            onChange={(e) =>
              handleExperienceChange("companyName", e.target.value)
            }
          />
        </div>
        <div className="experience-adding-form-group">
          <div className="experience-adding-field-name">Role</div>
          <input
            type="text"
            className="experience-adding-field-value"
            placeholder="Enter your role"
            value={experienceFormData.role}
            onChange={(e) => handleExperienceChange("role", e.target.value)}
          />
        </div>
        <div className="experience-adding-form-group">
          <div className="experience-adding-field-name">Year of Experience</div>
          <input
            type="text"
            className="experience-adding-field-value"
            placeholder="Enter years of experience"
            value={experienceFormData.yearOfExperience}
            onChange={(e) =>
              handleExperienceChange("yearOfExperience", e.target.value)
            }
          />
        </div>
        <div className="experience-adding-form-group">
          <div className="experience-adding-field-name">Work Model</div>
          <select
            className="experience-adding-field-value"
            value={experienceFormData.workModel}
            onChange={(e) =>
              handleExperienceChange("workModel", e.target.value)
            }
          >
            <option value="">Select Work Model</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
        <div className="experience-adding-form-group checkbox-group">
          <div className="experience-adding-field-name">
            Are you currently working now?
          </div>
          <div className="experience-adding-checkbox-container">
            <input
              type="checkbox"
              className="experience-adding-field-value"
              checked={experienceFormData.currentlyWorking}
              onChange={(e) =>
                handleExperienceChange(
                  "currentlyWorking",
                  e.target.checked
                )
              }
            />
            <label className="experience-adding-checkbox-label">
              {experienceFormData.currentlyWorking ? "Yes" : "No"}
            </label>
          </div>
        </div>
        <div className="experience-adding-button-row">
          <button
            type="button"
            className="experience-adding-save-button"
            onClick={handleSaveExperience}
            disabled={isSaveButtonDisabled}
          >
            Add Experience
          </button>
          <button
            type="button"
            className="experience-adding-close-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;
