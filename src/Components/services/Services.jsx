import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("Service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (  
    
    <div >
      <h1 className="text-5xl text-center mt-24 font-bold">Our Services</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-6 my-6">
     {
        services.map(service => <Service service={service}></Service>)
      }
     </div>
    </div>
  );
};

export default Services;
