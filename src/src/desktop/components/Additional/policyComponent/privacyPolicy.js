// PrivacyPolicy.js

import React from 'react';
import './privacyPolicy.css';
import PrivacyPolicyData from '../../../../../data/additionPagesData/policy';
const PrivacyPolicy = () => {
  const { title, introText, sections } = PrivacyPolicyData;
  const prefix = 'privacy-policy';

  return (
    <div className={`${prefix}-container`}>
      <h2 className={`${prefix}-heading`}>{title}</h2>

      <p className={`${prefix}-paragraph`}>{introText}</p>

      {sections.map((section, index) => (
        <div key={index}>
          <h3 className={`${prefix}-subheading`}>{section.heading}</h3>
          <p className={`${prefix}-paragraph`}>{section.content}</p>
          {section.list && (
            <ul className={`${prefix}-list`}>
              {section.list.map((item, idx) => (
                <li key={idx} className={`${prefix}-list-item`}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* ... Other sections such as Security, Cookies, Third-Party Links, Changes to This Policy, and Contact Information with updated class names ... */}
    </div>
  );
};

export default PrivacyPolicy;
