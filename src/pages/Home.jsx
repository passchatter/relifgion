import React from 'react'
import Headers from '../components/Headers'
import About from '../components/About'
import Product from '../components/Product'
import Pertanyaan from '../components/Pertanyaan'
import Promosi from '../components/Promosi'
import Footer from '../components/Footer'
import contact from '../img/whatapp.png'
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';

const Home = () => {

  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
    <a href="" target="_blank" className="fixed md:bottom-10 md:right-10 bottom-7 right-4 z-50 animate-bounce">
        <div className="flex gap-1 items-center">
            <p className="bg-[#fafafa] shadow-md text-titleColor px-3 py-2  rounded-xl">Contact Us</p>
            <img src={contact} alt="" className="w-[55px] md:w-[60px]"/>
        </div>
    </a>

     <Headers/>
     <About/>
     <Product/>
     <Pertanyaan/>
     <Promosi/>
     <Footer/>
    </>
  )
}

export default Home