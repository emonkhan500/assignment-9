import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Find = () => {
  useEffect(()=>{
    Aos.init({duration:2000})

},[])

  return (
    <div data-aos = "slide-left" className="container mx-auto mt-24 bg-[#fff7ed]">
      <h2 className="text-5xl font-bold text-center mt-3">FIND US</h2>
      <h2 className="text-3xl  text-center mt-6 italic">
        We Are Available 24/7
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 lg:mx-80  pb-10">
        
<div class="max-w-sm flex flex-col items-center p-6 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <img class="w-10  text-gray-500 h-10 mb-3" src="https://i.ibb.co/SnFVgb0/info-icon1.png" alt="" />
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Office</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Silme Convention Centre, 58 highway road, Tangail, Dhaka</p>
   
</div>
<div>
<div class="max-w-sm flex flex-col items-center p-6 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <img class="w-10  text-gray-500 h-10 mb-3" src="https://i.ibb.co/SnFVgb0/info-icon1.png" alt="" />
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Contact</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400"> Phone-01884932158</p>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400"> khdilo47@gmail.com</p>
   
</div>
</div>

      </div>
      </div>
    
  );
};

export default Find;
