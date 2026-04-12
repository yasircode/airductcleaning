import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => {
    setIsMobile(false);
    setShowService(false);
    setShowLocation(false);
    setActiveCategory(null);
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-[3000] bg-white shadow-lg">
      <!-- Top Blue Bar -->
      <div className="bg-[#0d47a1] text-white px-5 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto text-center">
          📍 Serving Killeen, TX &amp; Surrounding Areas
        </div>
      </div>

      <!-- Main Nav -->
      <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md h-[70px] md:h-[80px]">
        <!-- Hamburger -->
        <div 
          className="md:hidden text-3xl cursor-pointer z-20" 
          onClick={() => setIsMobile(!isMobile)}
          aria-label="Menu toggle"
        >
          {isMobile ? '✖' : '☰'}
        </div>

        <!-- Logo -->
        <Link 
          to="/" 
          onClick={closeMenu}
          className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mx-auto"
        >
          <img 
            src="/logom.jpeg" 
            alt="Killeen Air Duct Cleaning - Central Texas HVAC Experts" 
            className="h-16 w-16 rounded-lg border-4 border-[#0d47a1] object-contain shadow-lg hover:shadow-xl transition-all" 
          />
        </Link>

        <!-- Mobile Phone -->
        <div className="md:hidden text-2xl z-20">
          <a href="tel:+12549983484" className="text-gray-800 hover:text-[#0d47a1] transition-all">📞</a>
        </div>

        <!-- Navigation Menu -->
        <div className={`
          ${isMobile 
            ? 'fixed inset-0 bg-white z-10 shadow-2xl transform translate-x-0 transition-transform duration-300 ease-in-out' 
            : 'hidden md:flex items-center gap-6 ml-auto'
          }
        `}>
          <ul className="flex flex-col md:flex-row w-full md:w-auto gap-0 md:gap-4 p-4 md:p-0 uppercase font-bold text-lg md:text-sm tracking-wide">
            <li className="md:border-b md:border-transparent hover:md:border-[#0d47a1] transition-all">
              <Link to="/" onClick={closeMenu} className="block py-4 px-6 md:py-2 md:px-4 text-gray-800 hover:text-[#0d47a1] transition-colors">
                Home
              </Link>
            </li>
            
            <!-- Services Dropdown -->
            <li>
              <div 
                className="py-4 px-6 md:py-2 md:px-4 text-gray-800 hover:text-[#0d47a1] cursor-pointer flex items-center justify-between border-b md:border-none"
                onClick={() => setShowService(!showService)}
              >
                Services 
                <span className="transition-transform">{showService ? '▲' : '▼'}</span>
              </div>
              {showService &amp;&amp; (
                <div className="bg-gray-50 border-t border-[#0d47a1] p-4 md:absolute md:top-full md:bg-white md:shadow-xl md:w-80 md:left-0 md:border-t-4 md:border-l-0 md:rounded-lg md:mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <h4 className="font-bold text-[#0d47a1] uppercase mb-2">Air Duct</h4>
                      <ul className="space-y-1">
                        <li><Link to="/ductservice" onClick={closeMenu} className="block hover:text-[#0d47a1] transition-colors">HVAC Cleaning</Link></li>
                        <li><Link to="/airductcleaning" onClick={closeMenu} className="block hover:text-[#0d47a1] transition-colors">Duct Cleaning</Link></li>
                        <li><Link to="/commerciacleaning" onClick={closeMenu} className="block hover:text-[#0d47a1] transition-colors">Repair</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0d47a1] uppercase mb-2">Dryer Vent</h4>
                      <ul className="space-y-1">
                        <li><Link to="/dryerventcleaning" onClick={closeMenu} className="block hover:text-[#0d47a1] transition-colors">Cleaning</Link></li>
                        <li><Link to="/dryerventinspection" onClick={closeMenu} className="block hover:text-[#0d47a1] transition-colors">Inspection</Link></li>
                        <li><Link to="/dryerventrepair" onClick={closeMenu} className="block hover:text-[#0d47a1] transition-colors">Repair</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <!-- Locations -->
            <li>
              <div 
                className="py-4 px-6 md:py-2 md:px-4 text-gray-800 hover:text-[#0d47a1] cursor-pointer flex items-center justify-between border-b md:border-none"
                onClick={() => setShowLocation(!showLocation)}
              >
                Locations 
                <span className="transition-transform">{showLocation ? '▲' : '▼'}</span>
              </div>
              {showLocation &amp;&amp; (
                <div className="bg-gray-50 border-t border-[#0d47a1] max-h-64 overflow-y-auto p-4">
                  <ul className="space-y-1 text-sm">
                    <li><Link to="/location/killeen" onClick={closeMenu} className="block py-1 hover:text-[#0d47a1] transition-colors">Killeen</Link></li>
                    <li><Link to="/location/harkerheights" onClick={closeMenu} className="block py-1 hover:text-[#0d47a1] transition-colors">Harker Heights</Link></li>
                    <li><Link to="/location/copperascove" onClick={closeMenu} className="block py-1 hover:text-[#0d47a1] transition-colors">Copperas Cove</Link></li>
                    <li><Link to="/location/fortcavazos" onClick={closeMenu} className="block py-1 hover:text-[#0d47a1] transition-colors">Fort Cavazos</Link></li>
                    <li><Link to="/location/temple" onClick={closeMenu} className="block py-1 hover:text-[#0d47a1] transition-colors">Temple</Link></li>
                    <li><Link to="/location/waco" onClick={closeMenu} className="block py-1 hover:text-[#0d47a1] transition-colors">Waco</Link></li>
                  </ul>
                </div>
              )}
            </li>
            
            <li className="border-b md:border-none"><Link to="/About" onClick={closeMenu} className="block py-4 px-6 md:py-2 md:px-4 text-gray-800 hover:text-[#0d47a1] transition-colors">About</Link></li>
            <li><Link to="/Contact" onClick={closeMenu} className="block py-4 px-6 md:py-2 md:px-4 text-gray-800 hover:text-[#0d47a1] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <!-- Desktop CTA -->
        <div className="hidden md:flex ml-4">
          <a 
            href="tel:+12549983484" 
            className="bg-[#0d47a1] text-white px-6 py-3 rounded-full font-black uppercase shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            aria-label="Call now"
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
