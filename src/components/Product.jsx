import React from 'react'
import baju1 from '../img/baju1.jpg'
import baju2 from '../img/baju10.jpg'
import baju3 from '../img/baju3.jpg'
import baju4 from '../img/baju8.jpg'
import baju5 from '../img/baju5.jpg'
import baju6 from '../img/baju6.jpg'
import baju7 from '../img/baju7.jpg'
import baju9 from '../img/baju9.jpg'
const Product = () => {
  return (
    <>
    <div className="relative">
    <div className="h-[500px] w-[500px] right-[-15rem] bottom-[-5rem] absolute rounded-full bg-gray-300/10 filter blur-xl"></div>
        <div className="container">
            <div data-aos ="fade-right" className="mt-20 flex flex-col md:flex-row md:items-center  justify-between md:px-8">
                <h1 className='md:text-4xl text-2xl md:leading-[4rem] max-w-lg text-white font-titleFont'>Upgrade Your Style with Our Weekly Collection</h1>
                <div className="flex items-center space-x-10"> {/* Menggunakan space-x untuk memberi jarak antara teks dan tombol */}
                    <button className='mt-4 md:mt-0 text-white border border-orange-400 px-3 py-2 md:px-5 md:py-3 rounded-md flex items-center gap-3'>
                    See More <ion-icon name="arrow-forward-outline"></ion-icon>
                    </button>
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-5 px-3 md:px-9 md:gap-8 my-10">
                <img className='h-[160px] md:h-[190px] w-full rounded-3xl shadow-lg' src={baju1} alt="" />
                <img className='h-[160px] md:h-[190px] w-full rounded-3xl shadow-lg' src={baju2} alt="" />
                <img className='h-[160px] md:h-[190px] w-full rounded-3xl shadow-lg' src={baju3} alt="" />
                <img className='h-[160px] md:h-[190px] w-full rounded-3xl shadow-lg' src={baju4} alt="" />
                <img className='h-[160px] md:h-[190px] w-full rounded-3xl shadow-lg' src={baju5} alt="" />
                <img className='h-[160px] md:h-[190px] w-full rounded-3xl shadow-lg' src={baju6} alt="" />
                <img className='h-[160px] md:h-[190px] w-full rounded-3xl shadow-lg' src={baju7} alt="" />
                <img className='h-[160px] md:h-[190px] w-full rounded-3xl shadow-lg' src={baju9} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Product