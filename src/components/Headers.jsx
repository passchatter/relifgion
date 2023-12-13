import React from 'react';
import header2 from '../img/header3.jpg';
import header3 from '../img/header2.jpg';

import organik from '../img/organik.png'
import card from '../img/card.png'
import free from '../img/free.png'
import time from '../img/time.png'

const Headers = () => {


  return (
    <>
      <div className="relative">
        <div className="h-[500px] w-[500px] left-[-10rem] top-[1rem] absolute rounded-full bg-blue-300/10 filter blur-xl"></div>
        <div className="h-[500px] w-[500px] bottom-[25rem] md:bottom-0 right-[-20rem] absolute rounded-full bg-green-500/10 filter blur-xl"></div>
        <div className="container py-14 pb-28">
          <div className="text-white text-center mx-auto mt-8 font-titleFont font-bold text-2xl md:text-3xl max-w-4xl">
            "Upgrade your wardrobe with our latest styles and up your fashion game!"
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2 md:gap-6">
            <div data-aos="fade-down" className="relative h-auto mt-14 px-5 md:px-0">
              <img className="h-full w-full rounded-3xl shadow-lg border border-orange-300/30" src={header2} alt="" />
              <div className="absolute bottom-5 left-5 flex flex-col pl-3 pr-20">
                <h1 className=" text-2xl md:text-3xl font-bold text-white z-10">Create Your Style</h1>
                <p className="text-gray-300 text-[.8rem] z-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet..
                </p>
              </div>
              <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
            </div>
            <div data-aos="fade-down" data-aos-delay="100" className="relative h-auto mt-14 px-5 md:px-0">
              <img className="h-full w-full rounded-3xl shadow-lg border border-orange-300/30" src={header3} alt="" />
              <div className="absolute bottom-5 left-5 flex flex-col pl-3 pr-20">
                <h1 className=" text-2xl md:text-3xl font-bold text-white z-10">Create Your Style</h1>
                <p className="text-gray-300 text-[.8rem] z-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet..
                </p>
              </div>
              <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
            </div>
            <div data-aos="fade-down" data-aos-delay="200" className="text-slate-300 pt-10">
              <h1 className="mb-2 text-white text-2xl">Religion</h1>
              <p className="text-[.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt totam similique, velit numquam odit molestiae
                ipsum, itaque laborum id porro et iste? Natus doloremque veritatis quos porro dignissimos quod tempore.
              </p>
              <a href="" className="text-white border px-5 py-3 rounded-xl mt-3 inline-block max-w-max border-orange-400">
                Explore Now!
              </a>
            </div>
          </div>

          <div className="px-9 py-8 te bg-slate-800 rounded-xl shadow-md md:mt-32 mt-20">
            <div className="grid lg:grid-cols-4 gap-x-8 md:grid-cols-2 gap-y-6 grid-cols-1 items-center justify-between">
              <div className="max-w-sm flex gap-2">
                  <img src={organik} alt="" className='w-[70px] h-[70px]' />
                  <div>
                    <p className='font-semibold text-[1rem] text-slate-300'>Organic Products</p>
                    <p className='text-[.9rem] text-slate-400'>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
              
              <div className="max-w-sm flex gap-2">
                  <img src={free} alt="" className='w-[70px] h-[70px]' />
                  <div>
                      <p className='font-semibold text-[1rem] text-slate-300'>Free Delivery</p>
                      <p className='text-[.9rem] text-slate-400'>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
              <div className="max-w-sm flex gap-2">
                  <img src={card} alt="" className='w-[70px] h-[70px]' />
                  <div>
                      <p className='font-semibold text-[1rem] text-slate-300'>Scurity Payment</p>
                      <p className='text-[.9rem] text-slate-400'>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
              <div className="max-w-sm flex gap-2">
                  <img src={time} alt="" className='w-[70px] h-[70px]' />
                  <div>
                      <p className='font-semibold text-[1rem] text-slate-300'>On Time</p>
                      <p className='text-[.9rem] text-slate-400'>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;
