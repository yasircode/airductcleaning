import React, { Suspense, lazy } from 'react';

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
