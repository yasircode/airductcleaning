import React from 'react';
import './Newadd.css';

const Newadd = () => {
  const address = "KILLEEN, TX";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const signs = [
    "Achieve Clear Ducts and Peak Performance with Killeen’s leading commercial ventilation experts. We understand that professional duct cleaning in Killeen, TX is the backbone of a healthy business environment. By employing cutting-edge tools like skipper balls and air whips alongside industrial-grade HEPA-filtration, we eliminate hidden pollutants and microbial threats from your vents. This deep-cleaning process doesn't just improve your indoor air quality—it optimizes your entire HVAC system, slashing energy bills and creating a cleaner, more productive environment for your team and clients alike."
  ];

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="text-section">
          <h2 className="title">Professional Duct Cleaning Services Killeen</h2>
          <p className="intro-text">
            Here are some key signs which indicates that you should call a professional to clean your air ducts:
          </p>
          <ul className="signs-list">
            {signs.map((sign, index) => (
              <li key={index} className="sign-item">{sign}</li>
            ))}
          </ul>
        </div>

        <div className="image-section">
          <img 
            src="/myman.jpeg" 
            alt="Inside of a dirty air duct" 
            className="duct-image"
          />
        </div>
      </div>

      
    </div>
  );
};

export default Newadd;