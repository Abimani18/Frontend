// UserProfile.js

import React, { useState } from "react";
import "./UserProfile.css";
import profileImage from "./person.png";
import { BsPencilSquare } from "react-icons/bs";
import userProfileData from "./userProfileData";
import EducationForm from "./AddEducationForm/EducationForm";
import ExperienceForm from "./AddExperienceForm/ExperienceForm";
import ConfirmationModal from "./ConfirmationPopup/ConfirmationModal";
import UserProfileDetails from "./UserPrimaryProfileDetails/UserPrimaryProfileDetails";
import AddSocialMediaForm from "./AddSocialMediaForm/AddSocialMediaForm";
import { MdAddCircleOutline } from "react-icons/md";

const UserProfile = () => {
  // Initial user data
  const initialUserData = userProfileData.userData || {};
  const {
    userName: initialUserName,
    email: initialEmail,
    dob: initialDob,
    phoneNumber: initialPhoneNumber,
    doorNumber: initialDoorNumber,
    street: initialStreet,
    district: initialDistrict,
    state: initialState,
    country: initialCountry,
    pincode: initialPincode,
  } = initialUserData;

  // States
  const [userName, setUserName] = useState(initialUserName || "");
  const [email, setEmail] = useState(initialEmail || "");
  const [dob, setDob] = useState(initialDob || "");
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber || "");
  const [doorNumber, setDoorNumber] = useState(initialDoorNumber || "");
  const [street, setStreet] = useState(initialStreet || "");
  const [district, setDistrict] = useState(initialDistrict || "");
  const [state, setState] = useState(initialState || "");
  const [country, setCountry] = useState(initialCountry || "");
  const [pincode, setPincode] = useState(initialPincode || "");
  const [resumeFileName, setResumeFileName] = useState("");
  const [profilePicture, setProfilePicture] = useState(profileImage);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [isAddingEducation, setIsAddingEducation] = useState(false);
  const [educationalDetails, setEducationalDetails] = useState(
    userProfileData.educationalDetails || []
  );
  const [workExperienceDetails, setWorkExperienceDetails] = useState(
    userProfileData.workExperienceDetails || []
  );
  const [educationFormData, setEducationFormData] = useState({
    institution: "",
    qualification: "",
    courseName: "",
    yearOfStudy: "",
    passedOutYear: "",
    country: "",
    state: "",
    district: "",
  });
  const [isAddingExperience, setIsAddingExperience] = useState(false);
  const [experienceFormData, setExperienceFormData] = useState({
    companyName: "",
    role: "",
    yearOfExperience: "",
    workModel: "",
    currentlyWorking: false,
  });
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [deleteType, setDeleteType] = useState(null);

  // States for social media
  const [socialMediaLinks, setSocialMediaLinks] = useState(
    userProfileData.socialMediaDetails || []
  );
  const [isAddingSocialMedia, setIsAddingSocialMedia] = useState(false);
  const [socialMediaFormData, setSocialMediaFormData] = useState({
    platform: "",
    link: "",
  });

  // Functions
  const openDeleteConfirmation = (index, type) => {
    setDeleteIndex(index);
    setDeleteType(type);
    setShowDeleteConfirmation(true);
  };

  const closeDeleteConfirmation = () => {
    setShowDeleteConfirmation(false);
    setDeleteIndex(null);
    setDeleteType(null);
  };

  const confirmDelete = () => {
    if (deleteType === "education") {
      deleteEducation(deleteIndex);
    } else if (deleteType === "experience") {
      handleDeleteExperience(deleteIndex);
    } else if (deleteType === "socialMedia") {
      handleDeleteSocialMedia(deleteIndex);
    }
    closeDeleteConfirmation();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Check file type and size
      if (file.type !== "application/pdf") {
        alert("Only PDF files are allowed for the resume.");
        return;
      }

      if (file.size > 1000000) {
        alert("Resume file size should be within 1MB.");
        return;
      }

      // Store the file in local storage
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const pdfData = e.target.result;
        localStorage.setItem("resume", pdfData);
      };
      fileReader.readAsDataURL(file);

      setResumeFileName(file.name);
      setResumeUploaded(true);
    }
  };

  const openResume = () => {
    const storedResume = localStorage.getItem("resume");

    if (storedResume) {
      // Open the stored resume in a new tab
      window.open(storedResume, "_blank");
    } else {
      alert("No resume file selected.");
    }
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Check file type and size
      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed for the profile picture.");
        return;
      }

      if (file.size > 1024000) {
        alert("Profile picture file size should be within 1MB.");
        return;
      }

      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleEducationChange = (field, value) => {
    setEducationFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const saveEducation = () => {
    setEducationalDetails((prevDetails) => [
      ...prevDetails,
      { ...educationFormData },
    ]);

    setEducationFormData({
      institution: "",
      qualification: "",
      courseName: "",
      yearOfStudy: "",
      passedOutYear: "",
      country: "",
      state: "",
      district: "",
    });

    setIsAddingEducation(false);
  };

  const handleExperienceChange = (field, value) => {
    setExperienceFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const addExperience = () => {
    setIsAddingExperience(true);
  };

  const saveExperience = () => {
    setWorkExperienceDetails((prevDetails) => [
      ...prevDetails,
      { ...experienceFormData },
    ]);

    setExperienceFormData({
      companyName: "",
      role: "",
      yearOfExperience: "",
      workModel: "",
      currentlyWorking: false,
    });

    setIsAddingExperience(false);
  };

  const handleDeleteExperience = (index) => {
    setWorkExperienceDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails.splice(index, 1);
      return newDetails;
    });
  };

  const deleteEducation = (index) => {
    setEducationalDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails.splice(index, 1);
      return updatedDetails;
    });
  };

  const openEducationForm = () => {
    setIsAddingEducation(true);
  };

  // Functions for handling social media links
  const handleSocialMediaChange = (field, value) => {
    setSocialMediaFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const saveSocialMediaLink = () => {
    setSocialMediaLinks((prevLinks) => [
      ...prevLinks,
      { ...socialMediaFormData },
    ]);
    setSocialMediaFormData({ platform: "", link: "" });
    setIsAddingSocialMedia(false);
  };

  const openSocialMediaForm = () => {
    setIsAddingSocialMedia(true);
  };

  const handleDeleteSocialMedia = (index) => {
    setSocialMediaLinks((prevLinks) => {
      const newLinks = [...prevLinks];
      newLinks.splice(index, 1);
      return newLinks;
    });
  };

  return (
    <div className="user-profile-container">
      <div className="profile-picture-container">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <label htmlFor="profilePicture" className="edit-profile-label">
          <BsPencilSquare className="edit-icon" />
        </label>
        <input
          type="file"
          id="profilePicture"
          className="profile-file-input"
          accept="image/*"
          onChange={handleProfilePictureChange}
        />
      </div>
      <div className="user-details-container">
        <form className="profileform">
          <UserProfileDetails
            userName={userName}
            email={email}
            dob={dob}
            phoneNumber={phoneNumber}
            doorNumber={doorNumber}
            street={street}
            district={district}
            state={state}
            country={country}
            pincode={pincode}
            setUserName={setUserName}
            setEmail={setEmail}
            setDob={setDob}
            setPhoneNumber={setPhoneNumber}
            setDoorNumber={setDoorNumber}
            setStreet={setStreet}
            setDistrict={setDistrict}
            setState={setState}
            setCountry={setCountry}
            setPincode={setPincode}
          />
          <div className="profile-field-name">Upload Resume</div>
          <div className="profile-form-group profile-profile-file-input-container">
            <input
              type="file"
              id="resume"
              className="profile-file-input"
              onChange={handleFileChange}
            />
            <label htmlFor="resume" className="profile-resume-label">
              Browse Resume
            </label>
            {resumeUploaded && (
              <div className="profileresume-selected-file">
                {resumeFileName}
              </div>
            )}
          </div>
          {resumeUploaded && (
            <button
              type="button"
              className="profile-resume-link"
              onClick={openResume}
            >
              View Resume
            </button>
          )}
          {/* Educational Details Section */}
          <div className="profile-education-section">
            <h2>Educational Details</h2>
            {educationalDetails.map((edu, index) => (
              <div
                key={index}
                className="edulist-profile-education-details entryseparation-line"
              >
                <div className="edulist-profile-details-group">
                  <div className="edulist-profile-detail-label">
                    Institution Name:
                  </div>
                  <div className="edulist-profile-detail-value">
                    {edu.institution}
                  </div>
                </div>
                <div className="edulist-profile-details-group">
                  <div className="edulist-profile-detail-label">
                    Qualification:
                  </div>
                  <div className="edulist-profile-detail-value">
                    {edu.qualification}
                  </div>
                </div>
                {["UG", "PG", "PHD", "Diploma"].includes(edu.qualification) && (
                  <div className="edulist-profile-details-group">
                    <div className="edulist-profile-detail-label">
                      Course Name:
                    </div>
                    <div className="edulist-profile-detail-value">
                      {edu.courseName}
                    </div>
                  </div>
                )}
                <div className="edulist-profile-details-group">
                  <div className="edulist-profile-detail-label">
                    Year of Study:
                  </div>
                  <div className="edulist-profile-detail-value">
                    {edu.yearOfStudy}
                  </div>
                </div>
                {edu.yearOfStudy === "Passed Out" && (
                  <div className="edulist-profile-details-group">
                    <div className="edulist-profile-detail-label">
                      Year of Passed Out:
                    </div>
                    <div className="edulist-profile-detail-value">
                      {edu.passedOutYear}
                    </div>
                  </div>
                )}
                <div className="edulist-profile-details-group">
                  <div className="edulist-profile-detail-label">Country:</div>
                  <div className="edulist-profile-detail-value">
                    {edu.country}
                  </div>
                </div>
                <div className="edulist-profile-details-group">
                  <div className="edulist-profile-detail-label">State:</div>
                  <div className="edulist-profile-detail-value">
                    {edu.state}
                  </div>
                </div>

                <button
                  type="button"
                  className="edulist-delete-profile-education-button"
                  onClick={() => openDeleteConfirmation(index, "education")}
                >
                  Delete
                </button>
              </div>
            ))}

            {isAddingEducation && (
              <EducationForm
                educationFormData={educationFormData}
                handleEducationChange={handleEducationChange}
                saveEducation={() => {
                  saveEducation();
                  setIsAddingEducation(false);
                }}
                closeEducationForm={() => setIsAddingEducation(false)}
              />
            )}

            {!isAddingEducation && (
              <button
                type="button"
                className="add-profile-education-button"
                onClick={openEducationForm}
              >
                <MdAddCircleOutline className="add-icon" />
                Add Education
              </button>
            )}
          </div>
          {/* Work Experience Section */}
          <div className="profile-workexperience-section">
            <h2>Work Experience</h2>
            {workExperienceDetails.map((exp, index) => (
              <div
                key={index}
                className="workexlist-profile-experience-details entryseparation-line"
              >
                <div className="workexlist-profile-details-group">
                  <div className="workexlist-profile-detail-label">
                    Company Name:
                  </div>
                  <div className="workexlist-profile-detail-value">
                    {exp.companyName}
                  </div>
                </div>
                <div className="workexlist-profile-details-group">
                  <div className="workexlist-profile-detail-label">Role:</div>
                  <div className="workexlist-profile-detail-value">
                    {exp.role}
                  </div>
                </div>
                <div className="workexlist-profile-details-group">
                  <div className="workexlist-profile-detail-label">
                    Year of Experience:
                  </div>
                  <div className="workexlist-profile-detail-value">
                    {exp.yearOfExperience}
                  </div>
                </div>
                <div className="workexlist-profile-details-group">
                  <div className="workexlist-profile-detail-label">
                    Work Model:
                  </div>
                  <div className="workexlist-profile-detail-value">
                    {exp.workModel}
                  </div>
                </div>
                {exp.currentlyWorking && (
                  <div className="workexlist-profile-details-group checkbox-group">
                    <div className="workexlist-profile-detail-label">
                      Currently Working:
                    </div>
                    <div className="workexlist-profile-checkbox-container">
                      <input
                        type="checkbox"
                        className="workexlist-profile-detail-value"
                        checked={exp.currentlyWorking}
                        readOnly
                      />
                      <label className="workexlist-profile-checkbox-label">
                        Yes
                      </label>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  className="workexlist-delete-profile-experience-button"
                  onClick={() => openDeleteConfirmation(index, "experience")}
                >
                  Delete
                </button>
              </div>
            ))}

            {isAddingExperience ? (
              <ExperienceForm
                experienceFormData={experienceFormData}
                handleExperienceChange={handleExperienceChange}
                saveExperience={() => {
                  saveExperience();
                  setIsAddingExperience(false);
                }}
                closeExperienceForm={() => setIsAddingExperience(false)}
              />
            ) : (
              <button
                type="button"
                className="add-profile-experience-button"
                onClick={addExperience}
              >
                <MdAddCircleOutline className="add-icon" />
                Add Experience
              </button>
            )}
          </div>
          {/* Social Media Section */}
          <div className="profile-social-media-section">
            <h2>Social Media Links</h2>
            {socialMediaLinks.map((link, index) => (
              <div key={index} className="profile-social-media-link ">
                <div className="profile-social-media-platform">
                  {link.platform}
                </div>
                <div className="profile-social-media-link-url">{link.link}</div>
                <button
                  type="button"
                  className="delete-social-media-button"
                  onClick={() => openDeleteConfirmation(index, "socialMedia")}
                >
                  Delete
                </button>
              </div>
            ))}
            {isAddingSocialMedia ? (
              // Use the new component here
              <AddSocialMediaForm
                socialMediaFormData={socialMediaFormData}
                handleSocialMediaChange={handleSocialMediaChange}
                saveSocialMediaLink={saveSocialMediaLink}
                setIsAddingSocialMedia={setIsAddingSocialMedia}
              />
            ) : (
              <button
                type="button"
                className="add-social-media-button"
                onClick={openSocialMediaForm}
              >
                <MdAddCircleOutline className="add-icon" />
                Add Social Media
              </button>
            )}
          </div>
        </form>
      </div>
      <button
        type="button"
        className="save-profile-button"
        onClick={() => {
          // Add logic here to save the user profile
          alert("Profile saved!");
        }}
      >
        Save Profile
      </button>
      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <ConfirmationModal
          message={`Are you sure you want to delete this ${deleteType}?`}
          onCancel={closeDeleteConfirmation}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default UserProfile;
