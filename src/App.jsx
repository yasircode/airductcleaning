import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';

// Components
import Navbar from './components/Navbar';
import ScrollToHash from './components/ScrollToHash';
import StickyCtaBar from './components/StickyCtaBar';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';

// Services
import AirDuctCleaning from './components/AirDuctCleaning';
import CommercialCleaning from './components/Commerciacleaning';
import DryerVentCleaning from './components/DryerVentCleaning';
import DuctService from './components/Ductservice';
import ChimneyCleaning from './components/ChimneyCleaning'; 
import DryerVentInspection from './DryerVentInspection';
import DryerVentRepair from './DryerVentRepair';
import DryerVentInstallation from './components/DryerVentInstallation';
import LintRemoval from './components/LintRemoval';
import ChimneySweepPage from './components/ChimneySweepPage';
import ChimneyServicePage from './components/ChimneyServicePage';
import DryerVentBlockage from './DryerVentBlockage';
import DryerVentFlow from './components/Dryerventflow';
import AtticInsulation from './components/AtticInsulation';
import UVLightInstallation from './components/UVLightInstallation';

// Locations
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
  return (
    <div>
      <Navbar />
      <ScrollToHash />
      <main className="pt-[90px] pb-24 md:pb-0">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />

          {/* Services Routes */}
          <Route path="/airductcleaning" element={<AirDuctCleaning />} />
          <Route path="/commercialcleaning" element={<CommercialCleaning />} />
          <Route path="/dryerventcleaning" element={<DryerVentCleaning />} />
          <Route path="/dryerventinspection" element={<DryerVentInspection />} />
          <Route path="/dryerventrepair" element={<DryerVentRepair />} />
          <Route path="/dryerventinstallation" element={<DryerVentInstallation />} />
          <Route path="/lintremoval" element={<LintRemoval />} />
          <Route path="/chimneysweep" element={<ChimneySweepPage />} />
          <Route path="/chimneyservice" element={<ChimneyServicePage />} />
          <Route path="/dryerventblockage" element={<DryerVentBlockage />} />
          <Route path="/dryerventflow" element={<DryerVentFlow />} />
          <Route path="/atticinsulation" element={<AtticInsulation />} />
          <Route path="/uvlightinstallation" element={<UVLightInstallation />} />
          <Route path="/ductservice" element={<DuctService />} />
          <Route path="/chimneycleaning" element={<ChimneyCleaning />} />

          {/* Locations Routes */}
          <Route path="/location/killeen" element={<Killeen />} />
          <Route path="/location/harker-heights" element={<HarkerHeights />} />
          <Route path="/location/temple" element={<Temple />} />
          <Route path="/location/belton" element={<Belton />} />
          <Route path="/location/copperas-cove" element={<CopperasCove />} />
          <Route path="/location/nolanville" element={<Nolanville />} />
          <Route path="/location/fort-cavazos" element={<FortCavazos />} />
          <Route path="/location/salado" element={<Salado />} />
          <Route path="/location/lampasas" element={<Lampasas />} />
          <Route path="/location/georgetown" element={<Georgetown />} />
          <Route path="/location/liberty-hill" element={<LibertyHill />} />
          <Route path="/location/waco" element={<Waco />} />
          <Route path="/location/jarrell" element={<Jarrell />} />

          {/* Dynamic Route for SEO */}
          <Route path="/s/:serviceSlug" element={<KilleenServicePage />} />
        </Routes>
      </main>
      <StickyCtaBar />
    </div>
  );
}

export default App;