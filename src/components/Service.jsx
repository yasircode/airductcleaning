import NewItem from "../NewItem";
import ServiceArea from "./ServiceAreas";   
import Seo from "./Seo";

const Service = () => {
  return (
    <>
      <Seo
        title="Services"
        description="Explore air duct cleaning, dryer vent cleaning, HVAC cleaning, attic insulation, and chimney services across Central Texas."
      />
      <NewItem/>
      <br></br>
      <ServiceArea/>
    </>
  );
}; 

export default Service;