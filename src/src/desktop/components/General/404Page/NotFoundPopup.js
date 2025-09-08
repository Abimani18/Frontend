import React, { useEffect } from 'react';
import './NotFoundPopup.css';
import NotFoundSvg from './404.svg';

const NotFoundPopup = () => {
 

  return (
    <div className="not-found-popup">
      <div className="not-found-content">
        <h2>404 Error</h2>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <div className="not-found-image">
          {/* Use the imported SVG as an image source */}
          <img src={NotFoundSvg} alt="404" />
        </div>
        <p className="redirect-text">Redirecting to Home Page...</p>
      </div>
    </div>
  );
};

export default NotFoundPopup;
