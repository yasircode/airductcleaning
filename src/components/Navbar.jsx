import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeAll = () => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div className="nav-fixed-wrapper">
      {/* 1. Top Blue Bar */}
      <div className="top-black-bar text-center">
        <div className="top-bar-inner justify-center">
          <span>Professional Cleaning Services in Killeen & Central Texas</span>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <nav className="main-nav-white">
        
        {/* Mobile Hamburger */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileOpen ? '✕' : '☰'}
        </div>

        {/* Logo Section */}
        <div className="nav-logo-container">
          <Link to="/" onClick={closeAll}>
            <img src="/logom.jpeg" alt="Killeen Air Duct Cleaning" className="site-logo" />
          </Link>
        </div>

        {/* Mobile Call Icon */}
        <div className="phone-icon-mobile">
          <a href="tel:+12549983484">📞</a>
        </div>

        {/* Navigation Menu */}
        <div className={`nav-center ${isMobileOpen ? 'nav-center-mobile' : ''}`}>
          <ul className="nav-menu-list">
            <li><Link to="/" className="nav-link-item" onClick={closeAll}>Home</Link></li>

            {/* SERVICES DROPDOWN - App.js ke mutabiq */}
            <li className={`dropdown ${openDropdown === 'service' ? 'open' : ''}`}>
              <div className="nav-link-item" onClick={() => toggleDropdown('service')}>
                Services <span>{openDropdown === 'service' ? '▲' : '▼'}</span>
              </div>
              <ul className="dropdown-menu">
                <li className="menu-category">
                  <span className="category-title">Air Duct & HVAC</span>
                  <ul>
                    <li><Link to="/airductcleaning" onClick={closeAll}>Air Duct Cleaning</Link></li>
                    <li><Link to="/ductservice" onClick={closeAll}>HVAC Duct Service</Link></li>
                    <li><Link to="/commercialcleaning" onClick={closeAll}>Commercial Cleaning</Link></li>
                    <li><Link to="/atticinsulation" onClick={closeAll}>Attic Insulation</Link></li>
                    <li><Link to="/uvlightinstallation" onClick={closeAll}>UV Light Install</Link></li>
                  </ul>
                </li>
                <li className="menu-category">
                  <span className="category-title">Dryer & Chimney</span>
                  <ul>
                    <li><Link to="/dryerventcleaning" onClick={closeAll}>Dryer Vent Cleaning</Link></li>
                    <li><Link to="/dryerventinspection" onClick={closeAll}>Vent Inspection</Link></li>
                    <li><Link to="/dryerventrepair" onClick={closeAll}>Vent Repair</Link></li>
                    <li><Link to="/chimneycleaning" onClick={closeAll}>Chimney Cleaning</Link></li>
                    <li><Link to="/chimneysweep" onClick={closeAll}>Chimney Sweep</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* LOCATIONS DROPDOWN - App.js ke mutabiq */}
            <li className={`dropdown ${openDropdown === 'location' ? 'open' : ''}`}>
              <div className="nav-link-item" onClick={() => toggleDropdown('location')}>
                Locations <span>{openDropdown === 'location' ? '▲' : '▼'}</span>
              </div>
              <ul className="dropdown-menu overflow-y-auto" style={{maxHeight: '400px'}}>
                <li><Link to="/location/killeen" onClick={closeAll}>Killeen</Link></li>
                <li><Link to="/location/temple" onClick={closeAll}>Temple</Link></li>
                <li><Link to="/location/belton" onClick={closeAll}>Belton</Link></li>
                <li><Link to="/location/harker-heights" onClick={closeAll}>Harker Heights</Link></li>
                <li><Link to="/location/waco" onClick={closeAll}>Waco</Link></li>
                <li><Link to="/location/georgetown" onClick={closeAll}>Georgetown</Link></li>
                <li><Link to="/location/copperas-cove" onClick={closeAll}>Copperas Cove</Link></li>
                <li><Link to="/location/jarrell" onClick={closeAll}>Jarrell</Link></li>
              </ul>
            </li>

            {/* Main Pages - Routes match App.js */}
            <li><Link to="/about" className="nav-link-item" onClick={closeAll}>About</Link></li>
            <li><Link to="/service" className="nav-link-item" onClick={closeAll}>Service Page</Link></li>
            <li><Link to="/contact" className="nav-link-item" onClick={closeAll}>Contact</Link></li>
          </ul>
        </div>

        {/* Desktop Call Button */}
        <div className="desktop-only-call">
          <a href="tel:+12549983484" className="call-now-btn">CALL (254) 998-3484</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;