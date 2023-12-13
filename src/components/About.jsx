import React from 'react'
import about2 from '../img/about2.jpg'
import about from '../img/about.jpg'



const About = () => {
  return (
    <>
    <div data-aos="zoom-in" className=" pb-20 z-10 relative">
    <div className="h-[500px] w-[500px] left-[-10rem] bottom-[-9rem] absolute rounded-full bg-purple-600/10 filter blur-xl"></div>
        <div className="container">
            <div className="relative h-[350px] md:h-auto max-w-5xl mx-auto">
              <img className="h-full w-full block md:hidden rounded-3xl shadow-lg border border-orange-300/40" src={about2} alt="" />
              <img className="h-full w-full hidden md:block rounded-3xl shadow-lg border border-orange-300/40" src={about} alt="" />

              <div className="absolute inset-0 flex items-center justify-center text-center flex-col bg-black bg-opacity-20 rounded-3xl">
                <div className="z-10 pt-20">
                  <h1 className="text-md md:text-3xl font-bold text-white mb-5">Discover your latest collection in our shop</h1>
                  <button className='text-white mx-auto bg-orange-400 px-3 py-2 md:px-5 md:py-3 rounded-md flex items-center gap-3'>Explore Now <ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default About