import React, { useEffect } from 'react';
import './LogoLoading.css';
import imaggarPic from './logo.svg'; // Import the image

const LogoLoading = () => {
  useEffect(() => {
    // Add any necessary initialization logic here
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <div className='logoloader-main'>
      <div className="logoLoader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="logoLoader-lightning"></div>
     
      {/* Use the imported image */}
      <img src={imaggarPic} className='logoloader-image' alt="loading-imaggarLogo" />
    </div>
  );
};

export default LogoLoading;
