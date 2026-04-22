import React, { useState } from 'react';
import './DuctLandingPage.css';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';

const DuctLandingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  const faqData = [
    {
      question: "Why Is Professional Air Duct Cleaning Important?",
      answer: "Professional air duct cleaning removes dust, allergens, and other pollutants from your HVAC system, improving indoor air quality. It can also enhance system efficiency, leading to lower energy costs."
    },
    { question: "How Often Should Air Ducts Be Cleaned?", answer: "Typically every 3 to 5 years depending on household needs." },
    { question: "What Is The Process Of Air Duct Cleaning?", answer: "Our process includes inspection, vacuuming, and sanitization of the ductwork." },
    { question: "What Techniques And Tools Does America Air Duct Cleaning Use?", answer: "We use high-powered HEPA vacuums and specialized rotary brushes." },
    { question: "How Can I Schedule A Service With America Air Duct Cleaning?", answer: "Call us at (210) 777-0616 or visit our local office." }
  ];

  return (
    <div className="main-wrapper">
      {/* CTA SECTION */}
      <section className="cta-section" style={{ padding: '20px 10px', minHeight: 'auto' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Expert Air Duct Cleaning Services in Killeen, TX</h2>
        <div className="cta-text">
          <p>Enhance your indoor air quality and HVAC system performance with our certified air duct cleaning professionals.</p>
          <Button as={Link} to="/contact#estimate" className="cta-button" style={{ marginTop: '10px' }}>
            Request a Free Estimate
          </Button>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews-container">
          <div className="review-item">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Killeen Air Duct Cleaners did an excellent job cleaning our ducts. The team was professional, punctual, and the air quality in our home has noticeably improved."</p>
            <p className="review-author">- Sarah M., Killeen, TX</p>
          </div>
          <div className="review-item">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Outstanding service! They explained the process clearly and were very thorough. Our HVAC system is running more efficiently now."</p>
            <p className="review-author">- John D., Temple, TX</p>
          </div>
          <div className="review-item">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Professional and reliable. The technicians were knowledgeable and cleaned everything to perfection. Great value for the price."</p>
            <p className="review-author">- Emily R., Belton, TX</p>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="footer-area">
        <div className="footer-top">
          <div className="footer-col contact-col">
            <h3 className="yellow-text">Killeen Air Duct Cleaners</h3>
            <h4 className="yellow-text"><a href="tel:2549983484" style={{color: 'inherit', textDecoration: 'none'}}>(254) 998-3484</a></h4>
            <h3>Killeen, TX,</h3>
            <h3><a href="mailto:killeenair@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>killeenair@gmail.com</a></h3>
            
            <div className="payment-icons">
              <div className="card-visa">VISA</div>
              <div className="card-mc">MC</div>
              <div className="card-disc">DISC</div>
              <div className="card-amex">AMEX</div>
            </div>
          </div>

          <div className="footer-col social-col">
            <div className="policy-links">
              <span>Privacy Policy</span> |{' '}
              <button
                type="button"
                className="terms-trigger"
                onClick={() => setShowTerms(true)}
                style={{ cursor: 'pointer', background: 'transparent', border: 'none', padding: 0, color: 'inherit' }}
              >
                Terms and Conditions
              </button>
            </div>
            
            <div className="social-row">
              <a 
                href="https://www.facebook.com/share/17DuWb7eAK/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <div className="s-icon fb">F</div>
              </a>

              <a href="mailto:killeenair@gmail.com" className="social-link">
                <div className="s-icon tw">M</div>
              </a>

              <a href="https://www.youtube.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <div className="s-icon yt">Y</div>
              </a>
            </div>
          </div>

          <div className="footer-col map-col">
            {/* Map Wrapper with 100% width and clickable Overlay */}
            <div className="map-wrapper" style={{ overflow: 'hidden', borderRadius: '8px', position: 'relative', height: '180px' }}>
              <iframe 
                src="https://share.google/BMfj0RfUDFbUyYZxN" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Killeen Air Duct Cleaners Map"
              ></iframe>
              {/* This link covers the map so it opens Google Maps on click */}
              <a 
                href="https://www.google.com/maps/search/Killeen+Air+Duct+Cleaners+Killeen+TX"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 10,
                  cursor: 'pointer'
                }}
                aria-label="View on Google Maps"
              ></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © 2026 <strong>Killeen Air Duct Cleaners - All Rights Reserved.</strong></p>
        </div>
      </footer>

      {/* TERMS MODAL */}
      <Modal open={showTerms} onClose={() => setShowTerms(false)} title="Terms and Conditions">
        <div className="modal-body">
          <p>These terms and conditions govern your use of KILLEEN Air Duct Cleaning Services...</p>
          <ul>
            <li style={{ fontWeight: 'bold' }}>Introduction</li>
            <li>Welcome to our website. By accessing and using this website, you agree to adhere to the following Terms and Conditions.</li>
            <br />
            <li>Service estimates are subject to on-site inspection.</li>
            <li>Appointments must be cancelled 24 hours in advance.</li>
            <li>All services are performed by licensed professionals.</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default DuctLandingPage;