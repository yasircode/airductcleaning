import React from 'react';
import './Unique.css';

const Unique = () => {
  return (
    <section className="unique-container">
      <div className="unique-wrapper">
        
        {/* Images Section */}
        <div className="unique-image-grid">
          <div className="unique-card">
            <img 
              src="/profile3.jpeg" 
              alt="Air Duct Service" 
              className="unique-img"
            />
          </div>
          <div className="unique-card">
            <img 
              src="/hero-vans.jpeg" 
              alt="Technician at work" 
              className="unique-img"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="unique-content">
          <h2 className="unique-title">
            Smart Solutions for Peak HVAC Performance
          </h2>
          
          <p className="unique-description">
          Killeen Air Duct Cleaners, your trusted partner in creating cleaner, healthier homes  As a Family Owned and Certified Air Duct Cleaning Company, we proudly serve the Killeen, Texas, and Copperas Cove, TX community with a commitment to excellence and customer satisfaction.Our team of skilled professionals uses state of the art Air Quality equipment to effectively remove dirt, dust, mold, allergens, and other contaminants from your air ducts. By improving indoor air quality, we help ensure a healthier, more comfortable living environment for you and your family, At Killeen Air Duct Cleaners, we believe in delivering results that exceed expectations. Trust us to provide the care and attention your home deserves.  
          </p>
<br></br>
          <h3> Our Process</h3>
          <p>

           
We use the latest technology and equipment to ensure that your air ducts are free of dust, dirt, and other contaminants. Our process includes a thorough inspection, cleaning using high-powered vacuums and brushes, and a final test to ensure optimal air flow.
          </p>
<br></br>
              <h3>Our Guarantee</h3>
          <p className="unique-thanks">
        
We stand behind our work and guarantee customer satisfaction. If you're not completely satisfied with our services, we will make it right. We also offer a warranty on our work to give you peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Unique;