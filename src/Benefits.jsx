import React, { useState } from 'react';
import './Benefits.css';

const Benefits = () => {
  const [showProcess, setShowProcess] = useState(false);

  const cardData = [
    {
      id: 1,
      img: "/o11.jpeg", // Replace with your image paths
      alt: "Air duct cleaning helps remove dust and allergens",
      text: "Air duct cleaning removes contaminants like dust mites, pet dander, mold spores, and pollen from your home's air circulation, leading to cleaner, healthier air."
    },
    {
      id: 2,
      img: "/040.jpeg",
      alt: "Cleaner indoor air can reduce allergy symptoms",
      text: "By eliminating harmful pollutants, air duct cleaning can help prevent allergies, respiratory problems, and other health issues caused by poor indoor air quality."
    },
    {
      id: 3,
      img: "/025.jpeg",
      alt: "Clean air ducts improve HVAC airflow and comfort",
      text: "Clean air ducts allow your HVAC system to operate more efficiently, ensuring better airflow and temperature control throughout your home."
    },
    {
      id: 4,
      img: "/030.jpeg",
      alt: "Efficient HVAC systems can lower energy bills",
      text: "An efficient HVAC system uses less energy, which can lead to lower utility bills and reduced environmental impact."
    },
    {
      id: 5,
      img: "/022.jpeg",
      alt: "Regular duct cleaning helps extend HVAC system life",
      text: "Regular air duct cleaning in San Antonio helps prevent the buildup of debris that can strain your HVAC system, avoiding costly repairs and extending the system's lifespan."
    }
  ];

  return (
    <section className="benefits-section">
      <h2 className="benefits-main-title">
        Benefits Of Air Duct Cleaning <span className="text-blue">In KILLEEN</span>
      </h2>

      <div className="benefits-grid">
        {cardData.map((card) => (
          <div key={card.id} className="benefit-card">
            <div className="benefit-img-container">
              <img src={card.img} alt={card.alt} />
            </div>
            <div className="benefit-text-container">
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="process-btn" onClick={() => setShowProcess(true)}>
        Our Air Duct Cleaning Process
      </button>

      {/* Detail View / Modal */}
      {showProcess && (
        <div className="process-overlay">
          <div className="process-modal">
            <button className="close-modal" onClick={() => setShowProcess(false)}>&times;</button>
            <h3>Our 7-Step Cleaning Process</h3>
            <ul>
              <li><strong>Step 1:</strong> System Inspection</li>
              <li><strong>Step 2:</strong> Negative Pressure Setup</li>
              <li><strong>Step 3:</strong> Agitation Tools & Brushing</li>
              <li><strong>Step 4:</strong> High-Powered Vacuuming</li>
              <li><strong>Step 5:</strong> Component Cleaning (Blower/Coils)</li>
              <li><strong>Step 6:</strong> Sanitization (Optional)</li>
              <li><strong>Step 7:</strong> Final Testing</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Benefits;