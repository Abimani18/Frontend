// ContactBar.js

import React from 'react';
import './contactBar.css';
import contactBarData from '../../../../../data/homeData/contactBarData'; // Adjust the path accordingly

const ContactBar = () => {
  const { message, buttonLink, buttonText } = contactBarData;

  return (
    <div className='contactBar-container' data-aos="fade-up" data-duration="2000">
      <div className="contact-bar">
        <div className="contactBar-sub-div contactBar-message">
          <p>{message}</p>
        </div>
        <div className="contactBar-sub-div contactBar-button-container">
          <a href={buttonLink}>
            <button className='getademo-button'>{buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
