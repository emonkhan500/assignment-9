import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const services= useLoaderData();
    const {id}=useParams();
    const service = services.find(service=> service.id ===id )
    console.log(service)
    return (
        <div className="container mx-auto">
            <h2 className="font-bold text-center text-4xl mb-6" ><span className="text-blue-600 text-3xl">Service Name:</span> {service.name}</h2>
           <img className=" w-full h-[600px] rounded" src={service.image} alt="" />
           <p className=" text-2xl mt-6 mb-10">{service.full_description}</p>

           
           
        </div>
    );
};

export default ServiceDetails;