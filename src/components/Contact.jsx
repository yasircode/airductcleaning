import Hero from "./Hero";
import Banner from "./Banner";
import DuctLandingPage from "../DuctLandingPage";
import MultiStepQuoteForm from "./MultiStepQuoteForm";
import Seo from "./Seo";


const Contact = () => {
  return (
    <>
     <Seo
      title="Contact"
      description="Get a fast, free estimate for air duct cleaning, dryer vent cleaning, HVAC cleaning, and chimney services in Killeen and Central Texas."
     />
     
     <Hero/>
     <br></br>
     <div id="estimate">
      <MultiStepQuoteForm/>
     </div>
     <Banner />
      <br></br>

    
      <DuctLandingPage />
    </>
  );
};

export default Contact;