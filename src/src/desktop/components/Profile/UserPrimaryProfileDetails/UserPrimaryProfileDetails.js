// UserProfileDetails.js

import React from "react";
import "./UserPrimaryProfileDetails.css"

const UserPrimaryProfileDetails = ({
  userName,
  email,
  dob,
  phoneNumber,
  doorNumber,
  street,
  district,
  state,
  country,
  pincode,
  setUserName,
  setEmail,
  setDob,
  setPhoneNumber,
  setDoorNumber,
  setStreet,
  setDistrict,
  setState,
  setCountry,
  setPincode,
}) => {
  return (
    <div className="profile-userprimary-details">
      <div className="userprimary-profile-form-group">
        <div className="userprimary-profile-field-name">User Name</div>
        <input
          type="text"
          className="userprimary-profile-field-value"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="userprimary-profile-form-group">
        <div className="userprimary-profile-field-name">Email</div>
        <input
          type="email"
          className="userprimary-profile-field-value"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="userprimary-profile-form-group">
        <div className="userprimary-profile-field-name">Date of Birth</div>
        <input
          type="date"
          className="userprimary-profile-field-value"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <div className="userprimary-profile-form-group">
        <div className="userprimary-profile-field-name">Phone Number</div>
        <input
          type="tel"
          className="userprimary-profile-field-value"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      {/* Address Section */}
      <div className="userprimary-profile-form-group">
        <div className="userprimary-profile-field-name">Door Number</div>
        <input
          type="text"
          className="userprimary-profile-field-value"
          placeholder="Enter door number"
          value={doorNumber}
          onChange={(e) => setDoorNumber(e.target.value)}
        />
      </div>
      <div className="userprimary-profile-form-group">
        <div className="userprimary-profile-field-name">Street</div>
        <input
          type="text"
          className="userprimary-profile-field-value"
          placeholder="Enter street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </div>
      <div className="userprimary-profile-form-group">
        <div className="userprimary-profile-field-name">District</div>
        <input
          type="text"
          className="userprimary-profile-field-value"
          placeholder="Enter district"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>
      <div className="userprimary-profile-form-group">
        <div className="userprimary-profile-field-name">State</div>
        <input
          type="text"
          className="userprimary-profile-field-value"
          placeholder="Enter state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className="userprimary-profile-form-group">
        <div className="userprimary-profile-field-name">Country</div>
        <input
          type="text"
          className="userprimary-profile-field-value"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="userprimary-profile-form-group">
        <div className="userprimary-profile-field-name">Pincode</div>
        <input
          type="text"
          className="userprimary-profile-field-value"
          placeholder="Enter pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserPrimaryProfileDetails;
