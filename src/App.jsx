import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';

// --- ALL COMPONENTS IMPORTS ---
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Navbar from './components/Navbar';

// --- SERVICES IMPORTS ---
import AirDuctCleaning from './components/AirDuctCleaning';
import Commercialcleaning from './components/Commerciacleaning';
import DryerVentCleaning from './components/DryerVentCleaning';
import Ductservice from './components/Ductservice';
import ChimneyCleaning from './components/ChimneyCleaning.jsx';  
import DryerVentInspection from './DryerVentInspection';
import DryerVentRepair from './DryerVentRepair';
import DryerVentInstallation from './components/DryerVentInstallation';
import LintRemoval from './components/LintRemoval';
import ChimneySweepPage from './components/ChimneySweepPage';
import ChimneyServicePage from './components/ChimneyServicePage';
import DryerVentBlockage from './DryerVentBlockage';
import Dryerventflow from './components/Dryerventflow';
import AtticInsulation from './components/AtticInsulation';
import UVLightInstallation from './components/UVLightInstallation';

// --- LOCATION IMPORTS ---
import Killeen from './components/Killeen';
import HarkerHeights from './components/HarkerHeights';
import CopperasCove from './components/CopperasCove';
import Nolanville from './components/Nolanville';
import FortCavazos from './components/FortCavazos';
import Belton from './components/Belton';
import Temple from './components/Temple';
import Salado from './components/Salado';
import Lampasas from './components/Lampasas';
import Georgetown from './components/Georgetown';
import LibertyHill from './components/LibertyHill';
import Waco from './components/Waco';
import Jarrell from './components/Jarrell';

import KilleenServicePage from './KilleenServicePage';

function App() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Killeen Air Duct Cleaning",
    "description": "Professional Air Duct Cleaning, Dryer Vent, and Chimney services in Central Texas.",
    "telephone": "+1-254-998-3484",
    "areaServed": [
      "Killeen", "Temple", "Belton", "Harker Heights", "Waco", "Georgetown", "Jarrell"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Killeen",
      "addressRegion": "TX",
      "addressCountry": "US"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}} />
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
         
          {/* --- SERVICES ROUTES --- */}
          <Route path="/airductcleaning" element={<AirDuctCleaning />} />
          <Route path="/commerciacleaning" element={<Commercialcleaning />} />
          <Route path="/dryerventcleaning" element={<DryerVentCleaning />} />
          <Route path="/ductservice" element={<Ductservice />} />
          <Route path="/Chimneycleaning" element={<ChimneyCleaning/>} />
          <Route path="/dryerventinspection" element={<DryerVentInspection />} />
          <Route path="/dryerventrepair" element={<DryerVentRepair />} />
          <Route path="/dryerventinstallation" element={<DryerVentInstallation />} />
          <Route path="/LintRemoval" element={<LintRemoval/>} />
          <Route path="/dryerventblockage" element={<DryerVentBlockage/>} />
          <Route path="/dryerventflow" element={<Dryerventflow />} />
          <Route path="/ChimneySweepPage" element={<ChimneySweepPage />} />
          <Route path="/ChimneyServicePage" element={<ChimneyServicePage />} />
          <Route path="/atticinsulation" element={<AtticInsulation />} />
          <Route path="/uvlightinstallation" element={<UVLightInstallation />} />

          {/* --- LOCATION ROUTES --- */}
          <Route path="/location/killeen" element={<Killeen />} />
          <Route path="/location/harkerheights" element={<HarkerHeights />} />
          <Route path="/location/copperascove" element={<CopperasCove />} />
          <Route path="/location/nolanville" element={<Nolanville />} />
          <Route path="/location/fortcavazos" element={<FortCavazos />} />
          <Route path="/location/belton" element={<Belton />} />
          <Route path="/location/temple" element={<Temple />} />
          <Route path="/location/salado" element={<Salado />} />
          <Route path="/location/lampasas" element={<Lampasas/>}/>
          <Route path="/location/georgetown" element={<Georgetown />} />
          <Route path="/location/libertyhill" element={<LibertyHill />} />
          <Route path="/location/waco" element={<Waco />} />
          <Route path="/location/Jarrell" element={<Jarrell />} />
          
          {/* Slug Route for dynamic services */}
          <Route path="/:serviceSlug" element={<KilleenServicePage />} />

          {/* Main Pages */}
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
