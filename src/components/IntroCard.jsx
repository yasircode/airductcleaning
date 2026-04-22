import React from 'react';
import './IntroCard.css';

const IntroCard = () => {
  return (
    <section className="intro-section" id="about">
      <div className="intro-wrap">
        <div className="intro-card">
          <h2 className="intro-title">
            Expert Air Duct Cleaning
            <span className="intro-title-location">
              Killeen, TX
            </span>
          </h2>

          <div className="intro-content">
            <p>
              Restore your indoor air quality with <strong>Air Duct Cleaning Killeen</strong>,
              Central Texas&apos;s trusted HVAC hygiene specialists. We provide <strong>certified source removal</strong>
              to ensure your home remains a healthy, dust-free sanctuary.
            </p>

            <p>
              Using <strong>industrial-grade HEPA filtration</strong> and mechanical agitation, we eliminate
              deep-seated allergens and pollutants, optimizing your system&apos;s airflow and <strong>reducing energy costs</strong>.
            </p>

            <div className="intro-highlight">
              <p className="intro-highlight-title">
                Breathe Cleaner Today.
              </p>
              <p className="intro-highlight-text">
                Experience the visible difference of a professionally sanitized HVAC system.
              </p>
            </div>
          </div>

          <div className="intro-badges">
            <img
              src="/google.png"
              alt="Google Reviews 5-Star Rated"
              className="trust-badge"
            />
            <img
              src="/angni.webp"
              alt="Angi Super Service Award Winner"
              className="trust-badge"
            />
            <img
              src="/yelp.webp"
              alt="Yelp 5-Star Reviews"
              className="trust-badge"
            />
            <img
              src="/logo2.webp"
              alt="Certified Local Business"
              className="trust-badge"
            />
            <img
              src="/BBB.webp"
              alt="BBB Accredited Business A+ Rating"
              className="trust-badge"
            />
            <img
              src="/logo5.png"
              alt="Licensed &amp; Insured Air Duct Cleaning"
              className="trust-badge"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroCard;
