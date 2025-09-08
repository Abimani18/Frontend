// EducationForm.js
import React, { useState, useEffect } from "react";
import './EducationForm.css';

const EducationForm = ({
  educationFormData,
  handleEducationChange,
  saveEducation,
  closeEducationForm,
}) => {
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

  useEffect(() => {
    // Check if all required fields are filled (except "Year of Passed Out")
    const areAllFieldsFilled =
      educationFormData.institution &&
      educationFormData.qualification &&
      educationFormData.yearOfStudy &&
      educationFormData.country &&
      educationFormData.state &&
      educationFormData.district;

    // Enable the button only if all required fields are filled
    setIsSaveButtonDisabled(!areAllFieldsFilled);
  }, [educationFormData]);

  const handleCancel = () => {
    // Add any additional logic you need before closing the form
    closeEducationForm();
  };

  const handleSaveEducation = () => {
    if (!isSaveButtonDisabled) {
      // Only save education if the button is enabled
      saveEducation();
    }
  };

  return (
    <div className="eduadding-education-form-popup">
      <div className="eduadding-education-form-container">
        <div className="eduadding-profile-form-group">
          <div className="eduadding-profile-field-name">Institution Name</div>
          <input
            type="text"
            className="eduadding-profile-field-value"
            placeholder="Enter institution name"
            value={educationFormData.institution}
            onChange={(e) =>
              handleEducationChange("institution", e.target.value)
            }
          />
        </div>
        <div className="eduadding-profile-form-group">
          <div className="eduadding-profile-field-name">Qualification</div>
          <select
            className="eduadding-profile-field-value"
            value={educationFormData.qualification}
            onChange={(e) =>
              handleEducationChange("qualification", e.target.value)
            }
          >
            <option value="">Select Qualification</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
            <option value="PHD">PHD</option>
            <option value="Diploma">Diploma</option>
          </select>
        </div>
        {["UG", "PG", "PHD", "Diploma"].includes(
          educationFormData.qualification
        ) && (
          <div className="eduadding-profile-form-group">
            <div className="eduadding-profile-field-name">Course Name</div>
            <input
              type="text"
              className="eduadding-profile-field-value"
              placeholder="Enter course name"
              value={educationFormData.courseName}
              onChange={(e) =>
                handleEducationChange("courseName", e.target.value)
              }
            />
          </div>
        )}
        <div className="eduadding-profile-form-group">
          <div className="eduadding-profile-field-name">Year of Study</div>
          <select
            className="eduadding-profile-field-value"
            value={educationFormData.yearOfStudy}
            onChange={(e) =>
              handleEducationChange("yearOfStudy", e.target.value)
            }
          >
            <option value="">Select Year of Study</option>
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Final Year">Final Year</option>
            <option value="Passed Out">Passed Out</option>
          </select>
        </div>
        {educationFormData.yearOfStudy === "Passed Out" && (
          <div className="eduadding-profile-form-group">
            <div className="eduadding-profile-field-name">Year of Passed Out</div>
            <input
              type="text"
              className="eduadding-profile-field-value"
              placeholder="Enter year of passed out"
              value={educationFormData.passedOutYear}
              onChange={(e) =>
                handleEducationChange("passedOutYear", e.target.value)
              }
            />
          </div>
        )}
        <div className="eduadding-profile-form-group">
          <div className="eduadding-profile-field-name">Country</div>
          <input
            type="text"
            className="eduadding-profile-field-value"
            placeholder="Enter country"
            value={educationFormData.country}
            onChange={(e) => handleEducationChange("country", e.target.value)}
          />
        </div>
        <div className="eduadding-profile-form-group">
          <div className="eduadding-profile-field-name">State</div>
          <input
            type="text"
            className="eduadding-profile-field-value"
            placeholder="Enter state"
            value={educationFormData.state}
            onChange={(e) => handleEducationChange("state", e.target.value)}
          />
        </div>
        <div className="eduadding-profile-form-group">
          <div className="eduadding-profile-field-name">District</div>
          <input
            type="text"
            className="eduadding-profile-field-value"
            placeholder="Enter district"
            value={educationFormData.district}
            onChange={(e) =>
              handleEducationChange("district", e.target.value)
            }
          />
        </div>
        {/* Additional educational details input fields */}
        <div className="eduadding-button-row">
          <button
            type="button"
            className="eduadding-save-profile-education-button"
            onClick={handleSaveEducation}
            disabled={isSaveButtonDisabled}
          >
            Add Education
          </button>
          <button
            type="button"
            className="eduadding-close-education-form-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
