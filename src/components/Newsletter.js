import React from 'react';

// import icons
import {MdEmail} from 'react-icons/md'

const Newsletter = () => {
  return (
    <section className='section-sm lg:section-lg bg-green min-h-[520px]'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12'
         data-aos='fade-up'
         data-aos-delay='300'
         data-aos-offset='300'>
          <h4 className='text-[26px] text-white font-bold-mb-[14px]'
           data-aos='fade-up'
           data-aos-delay='600'
           data-aos-offset='300'
           >
            Subscribe our Newsletter</h4>
          <p className='text-green-300 mb-12'
            data-aos='fade-up'
            data-aos-delay='700'
            data-aos-offset='300'
            >Subscribe our  newsletter for further updates about us</p>
          {/* from */}
          <from className='max-w-[752px] mx-auto relative
          flex flex-col gap-y-6 p-4 lg:flex-row lg:p-0 gap-x-4'
          data-aos='fade-up'
          data-aos-delay='1000'
          
           >
            <div className='w-full relative flex'>
              {/* icon*/}
              <div className='absolute left-2 h-full w-12 flex justify-center
              items-center text-2xl text-green-300'>
                <MdEmail/>
              </div>
             {/*email input */}
             <input className='from-control h-[60px] w-full border border-green-300
             bg-transparent outline-none placeholder:text-green-300 text-white
             pl-[60px]'
             placeholder='Enter your email address' 
             type='email'
             />
             {/* button */}
            </div>
            <button className='btn btn-lg btn-orange text-white
            w-full lg:max-w-[180px]'>Get started</button>
          </from>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
