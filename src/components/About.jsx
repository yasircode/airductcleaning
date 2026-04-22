import Hero from "./Hero";
import Unique from "../Unique";
import Banner from "./Banner";
import DuctLandingPage from "../DuctLandingPage";
import ImageComparison from "./ImageComparison";
import MultiStepQuoteForm from "./MultiStepQuoteForm";
import Seo from "./Seo";
const About = () => {
  return (
    <>
     <Seo
      title="About"
      description="Learn about Killeen Air Duct Cleaners—family owned, certified, and trusted across Central Texas for air duct cleaning and HVAC hygiene."
     />
     <br></br>
      <br></br>
       <br></br>
       <br></br>
       
      <Unique />
      <br></br>
      <ImageComparison />
      <Banner />

      <MultiStepQuoteForm/>
      <DuctLandingPage />
   
    </>
  );
}; 

export default About;