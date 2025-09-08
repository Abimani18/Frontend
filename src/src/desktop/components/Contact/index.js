// ContactPage.js
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './Contact.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { contactData } from '../../../../data/contactData/contactData';

const API = "http://13.48.9.68:8000/api/contact/apply";

const ContactPage = () => {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [formData, setFormData] = useState({
    admin :'imaggar',
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '', // New field for message
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        if (!response.ok) {
          throw new Error('Failed to fetch country data');
        }

        const data = await response.json();
        const countryData = data.map((country) => ({
          label: `+${country.callingCodes[0]} (${country.name})`,
          value: `+${country.callingCodes[0]}`,
        }));

        setCountryCodes(countryData);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      // Handle success (e.g., show a success message to the user)
      console.log('Form data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="contact-main">
      <div className="contact-container">
        <div className="contact-content">
          <h2>
            <span className="highlight-text">{contactData.mainTitle}</span>
          </h2>

          <h4>{contactData.subheading}</h4>
          <ul className="contact-ul-tag">
            {contactData.listItems.map((item, index) => (
              <li key={index} className="list-item">
                <div className="bullet-point">
                  <AiOutlineCheckCircle className="bullet-icon" />
                </div>
                <div className="list-content">
                  <span className="heading">{item.heading}</span> <br />
                  <span className="description">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-form">
          <h2>{contactData.demoRequestTitle}</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <div className="form-row">
                <input
                  className="Nameinput FirstName"
                  placeholder={contactData.formLabels.firstName}
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={handleInputChange}
                />
                <div className="space-between"></div>
                <input
                  className="Nameinput LastName"
                  placeholder={contactData.formLabels.lastName}
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                className="contact-input"
                placeholder={contactData.formLabels.companyName}
                type="text"
                id="companyName"
                name="companyName"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className="contact-input"
                placeholder={contactData.formLabels.companyName}
                type="text"
                id="companyName"
                name="companyName"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className="contact-input"
                placeholder={contactData.formLabels.email}
                type="email"
                id="email"
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <div className="form-row">
                <Select
                  className="country-select contact-input"
                  options={countryCodes}
                  value={selectedCountry}
                  onChange={(value) => setSelectedCountry(value)}
                  placeholder={contactData.formLabels.selectPlaceholder}
                  menuPlacement="auto"
                />
                <input
                  className="contact-input phone-input"
                  placeholder={contactData.formLabels.phoneNumber}
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="contact-input"
                placeholder="Message"
                id="message"
                name="message"
                onChange={handleInputChange}
              />
            </div>
            <button className="contact-submit-button" type="submit">
              {contactData.formLabels.submitButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
