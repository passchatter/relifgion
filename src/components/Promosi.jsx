import React from 'react';
import header1 from '../img/header1.jpg'

const Promosi = () => {
  return (
    <>
   
    <div className="bg-gradient-to-b relative">
    <div className="h-52 w-52 rotate-12 absolute rounded-md bg-green-300/10 filter blur-xl"></div>
      <div className=" section text-white py-8 container md:px-24">
        <div className="grid gap-9 grid-cols-1 md:grid-cols-2 items-center">
          <div className="orde order-1">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Get Your Exclusive Custom Shirt!
            </h2>
            <p className="text-sm mb-6">
              Pilih desain Anda sendiri atau jelajahi koleksi kami untuk tampil unik dan menarik! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, necessitatibus.
            </p>
            <button className="border border-orange-300 hover:bg-orange-600 text-white py-3 px-6 rounded-lg ">
              Jelajahi Sekarang
            </button>
          </div>
          <div className="">
            <img
              src={header1}
              alt="Promo Baju"
              className='rounded-xl'
            />
          </div>
        </div>
      </div>
      <div className="container pt-20 section">
            <div className="text-center mx-auto mb-7">
                <h1 className='text-2xl md:text-3xl text-white'>Why Customer Love Us</h1>
            </div>

            <div className="grid gap-3  md:grid-cols-3">
                <div data-aos="zoom-in" className="p-3 md:p-8 shadow-xl bg-slate-800/40 rounded-md">
                   <ul className='flex gap-1 mb-2'>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                    </ul>
                    <p className='text-[.8rem] text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est. Suscipit, modi natus maxime recusandae enim similique. Laborum, consequuntur maxime!</p>
                    <div className="flex items-center gap-4 mt-6">
                       
                        <div className="">
                            <h1 className='text-lg text-slate-200'>Kevin Adreas</h1>
                            
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="100" className="p-3 md:p-8 shadow-xl bg-slate-800/40 rounded-md">
                   <ul className='flex gap-1 mb-2'>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                    </ul>
                    <p className='text-[.8rem] text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est. Suscipit, modi natus maxime recusandae enim similique. Laborum, consequuntur maxime!</p>
                    <div className="flex items-center gap-4 mt-6">
                       
                        <div className="">
                            <h1 className='text-lg text-slate-200'>Kevin Adreas</h1>
                            
                        </div>
                    </div>
                </div>
                <div  data-aos="zoom-in" data-aos-delay="200" className="p-3 md:p-8 shadow-xl bg-slate-800/40 rounded-md">
                   <ul className='flex gap-1 mb-2'>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                        <li className='text-lg text-orange-500'><ion-icon name="star"></ion-icon></li>
                    </ul>
                    <p className='text-[.8rem] text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est. Suscipit, modi natus maxime recusandae enim similique. Laborum, consequuntur maxime!</p>
                    <div className="flex items-center gap-4 mt-6">
                        
                        <div className="">
                            <h1 className='text-lg text-slate-200'>Kevin Adreas</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
    
  );
};

export default Promosi;
