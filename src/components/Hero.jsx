import React from 'react';
import Women from "../img/women.png"
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section className='bg-[#FFAC12] h-[800px] py-24 '><div>
    <div className="container mx-auto flex justify-around h-full ">

    <div className='flex flex-col justify-center'>
      <div className="font-semibold flex items-center uppercase">
      <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
      <div> New Trend </div>
      </div>
      
      <h1 className='text-[70px] font-light mb-4'>SPRING SALE STALISH <br/>
      <span className='font-semibold '>WOMENS</span>
      </h1>
      <Link to={"/"} className='self-start uppercase font-semibold border-b-2 border-primary'>
      discover more
      </Link>
    </div>
    <div className=''>
      <img className='  hidden lg:block w-[500px]' src={Women} alt="" />
    </div>
    </div>
  </div>
  </section> ;
};

export default Hero;
