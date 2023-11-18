import React from 'react';

//import react count up
import CountUp from 'react-countup';

//import image
import Image from  '../assets/img/john-cena.png';
//import data
import {facts} from '../data';

const Facts = () => {
  return (
    <section className='section-sm lg:section-lg'>
      <div className='container mx-auto 
      flex flex-col lg:flex-row lg:gap-x-[30px]'>
        {/* numbers  */}
        <div className='flex-1 flex flex-wrap
        gap-x-[5%] gap-y-[35%]'>
          {facts.map((item, index)=> {
            const {startNumber, endNumber, unit, title, desc} = item;
            return <div className='w-[45%] mb-8' key={index}>
              <h2 className='h2 mb-2 lg:mb-3'>
                <CountUp start = {startNumber} end = {endNumber} 
                duration={2}
                enableScrollSpy/>
                {unit}+
              </h2>
              <div className='text-xl font-bold
              text-heading mb-3'>{title}</div>
              <p className='max-w-[240px]'>{desc}</p>
            </div>
          })}
        </div>
        {/* text  */}
        <div className='flex-1 -order-1 lg:order-none'>
          <div className='flex flex-col justify-center
          h-full lg:pl-[100px]'>
            <h2 className='h2 mb-12 max-w-[295px]
            md:max-w-none'
            data-aos='fade-down'
            data-aos-delay='500'>
              Relax and Enjoy a Personalized Day Yoga With Us.</h2>
          
          <div className='mb-2' 
           data-aos='fade-down'
           data-aos-delay='550'>
            <img src={Image} alt=''></img>
          </div>
          <div className='text-lg mb-6 font-bold 
          text-heading' 
          data-aos='fade-down'
          data-aos-delay='550'>
            John Cena  
            <span className='text-base text-paragraph font-normal'>/
            Founder</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  ); 
};

export default Facts;