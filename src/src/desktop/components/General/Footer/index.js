import React, { useState } from 'react';
import './Footer.css';
import { footerData } from '../../../../../data/commonData/footerData/footerData';
import { subscribe } from '../../../../../axios/services/api';
import CopyrightFooter from '../copyrightFooter';
import SocialMediaFooter from '../socialMediaFooter';

const Footer = () => {
  const [subscriptionEmail, setSubscriptionEmail] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await subscribe(subscriptionEmail); // Call the subscribe function from the API service
      setSubscriptionMessage(response.message); // Assuming the response contains a message property
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubscriptionMessage('An error occurred. Please try again later.');
    }
  };

  const renderLinks = (links) => {
    return links.map((link, index) => (
      <li key={index}>
        <a href={link.url}>{link.label}</a>
      </li>
    ));
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container footer-row">
          {footerData.map((section, index) => (
            <div className="footer-col margin-footer" key={index}>
              <h4>{section.title}</h4>
              <ul>{renderLinks(section.links)}</ul>
            </div>
          ))}
          
          <div className="footer-col-2">
            <div className="form-sect-tem2 margin-footer">
              <div className="">
                <h4>Subscribe</h4>
                <div className="subscribe">
                  <input
                    type='email'
                    placeholder="Subscribe"
                    value={subscriptionEmail}
                    onChange={(e) => setSubscriptionEmail(e.target.value)}
                  />
                  <button onClick={handleSubscribe}>Subscribe</button>
                </div>
                <div className="subscription-message">
                  {subscriptionMessage && <p>{subscriptionMessage}</p>}
                </div>
                <div className="footerdes">
                  <p>Reshape the Epoch of Customer Service through Imaggar's Pioneering  AI .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <SocialMediaFooter />
      <CopyrightFooter />
    </>
  );
};

export default Footer;
