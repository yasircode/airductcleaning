import React, { Suspense, lazy } from 'react';
import Seo from './components/Seo';

// Lazy load heavy components
const Hero = lazy(() => import('./components/Hero'));
const IntroCard = lazy(() => import('./components/IntroCard'));
const ServiceAreas = lazy(() => import('./components/ServiceAreas'));
const Gallery = lazy(() => import('./Gallery'));
const Banner = lazy(() => import('./components/Banner'));
const Management = lazy(() => import('./components/Management'));
const Any = lazy(() => import('./components/Any'));
const ImageComparison = lazy(() => import('./components/ImageComparison'));
const Benefits = lazy(() => import('./Benefits'));
const Blue = lazy(() => import('./Blue'));
const DuctCleaning = lazy(() => import('./DuctCleaning'));
const MaintenanceGuide = lazy(() => import('./MaintenanceGuide'));
const HVACLandingPage = lazy(() => import('./HVACLandingPage'));
const Commercial = lazy(() => import('./Commercial'));
const DuctService = lazy(() => import('./DuctService'));
const DuctServiceFAQ = lazy(() => import('./DuctServiceFAQ'));
const DuctLandingPage = lazy(() => import('./DuctLandingPage'));
const AirDuctnew = lazy(() => import('./components/AirDuctnew'));
const MultiStepQuoteForm = lazy(() => import('./components/MultiStepQuoteForm'));
const Newadd = lazy(() => import('./components/Newadd'));
const Yahoo = lazy(() => import('./components/yahoo'));
const Yasir = lazy(() => import('./components/Yasir'));

const Home = () => {
  return (
    <>
      <Seo
        title="Air Duct Cleaning in Killeen, TX"
        description="Premium air duct cleaning, dryer vent cleaning, HVAC cleaning, and chimney services in Killeen and Central Texas. Call (254) 998-3484 for a free estimate."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Killeen Air Duct Cleaners",
          telephone: "+1-254-998-3484",
          address: {
            "@type": "PostalAddress",
            addressRegion: "TX",
            addressLocality: "Killeen",
            addressCountry: "US",
          },
          areaServed: [
            "Killeen, TX",
            "Harker Heights, TX",
            "Temple, TX",
            "Belton, TX",
            "Copperas Cove, TX",
            "Waco, TX",
          ],
          url: "https://killeenairductcleaners.com",
        }}
      />
      <Suspense fallback={<div className="flex justify-center items-center h-32">Loading...</div>}>
        <Hero />
        <div className="h-4"></div>
        <IntroCard />
        <div className="h-8 md:h-16"></div>
        <ServiceAreas />
        <Gallery />
        <Banner />
        <AirDuctnew />
        <MultiStepQuoteForm />
        <div className="h-4"></div>
        <Management />
        <div className="h-4"></div>
        <Any />
        <ImageComparison />
        <Benefits />
        <div className="h-4"></div>
        <Blue />
        <Yahoo />
        <MaintenanceGuide />
        <DuctCleaning />
        <HVACLandingPage />
        <Newadd />
        <Commercial />
        <DuctService />
        <DuctServiceFAQ />
        <Yasir />
        <div className="h-4"></div>
        <DuctLandingPage />
      </Suspense>
    </>
  );
};

export default Home;
