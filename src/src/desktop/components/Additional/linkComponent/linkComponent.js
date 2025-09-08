import React from 'react';
import legalData from '../../../../../data/additionPagesData/legalData';
import './linkComponent.css';

const LinkComponent = () => {
  return (
    <div className='linkComponent-main'>
      {Object.keys(legalData.headings).map((category, index) => (
        
        <section key={index} className='linkComponent-section'>
          <h2 className='linkComponent-heading'>{legalData.headings[category]}</h2>
          
          <ul>
            {legalData[category].map((Link, LinkIndex) => (
              <li key={LinkIndex} className='linkComponent-links'>
                <a href="/link">{Link}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default LinkComponent;
