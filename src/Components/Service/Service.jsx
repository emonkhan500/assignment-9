import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Service = ({ service }) => {
    const {name,price  ,image,short_description,button ,id} = service;
    useEffect(()=>{
      Aos.init({duration:2000})

  },[])

  
  return <div data-aos = "fade-up-right" className="card lg:h-96 bg-base-100 shadow-xl" >


  <figure className="px-10 pt-10">
      <img src={image} alt="" className="rounded-xl w-full" />
  </figure>
  <div className="card-body items-center text-center">
      <h2 className="card-title">{name}</h2>
      <p>{short_description}</p>
   <div className="flex items-center gap-5">
    <p>{price} </p>
    <Link to={`/details/${id}`}>  <button className="bg-slate-300 py-2 px-3 rounded
      ">{button}</button></Link>
   </div>
      
  </div>
</div>
};

export default Service;
