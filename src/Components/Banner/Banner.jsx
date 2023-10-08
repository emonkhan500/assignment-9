import React from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Banner = () => {
  useEffect(()=>{
    Aos.init({duration:2000})

},[])

    return (
      <div data-aos = "fade-down-right" className='container mx-auto flex gap-5 items-center bg-[#fff7ed] py-10 px-10 rounded-xl'>
        <div className='text-center'>
      <h1 className="text-4xl mb-3 text-blue-600">HELLO THERE</h1>
      <h2 className="text-2xl mt-12 text-purple-600">Are you looking for a <span className='font-bold text-3xl text-gray-600'>CORPORATE EVENT MANAGEMENT</span> team. Then You are in right place.</h2>
    </div>
    <div>
    <img className='rounded-lg' src="https://i.ibb.co/rkhZbMq/pexels-pixabay-327540.jpg" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    
  </div>
      </div>
    );
};

export default Banner;



