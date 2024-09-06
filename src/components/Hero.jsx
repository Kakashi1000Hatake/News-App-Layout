import React from 'react'
import placeholderimg from '../assets/placeholderimg.png'

function Hero() {
  return (
    <div className='w-11/12 h-full flex items-center justify-center flex-col gap-20 py-20 box-content'>
        {/* heading */}
        <div className='flex w-3/5 items-center justify-center flex-col gap-10 max-lg:w-full'>
            <h1 className='text-6xl font-bold text-center max-md:text-5xl max-md:leading-tight'>Stay Informed with  the Latest News Updates</h1>
            <p className='text-xl text-center font-normal tracking-wide max-lg:text-lg max-lg:tracking-normal'>Welcome to our news website, where you can find the most up-to-date information on various topics. Explore our articles and stay informed!</p>

            {/* Explore buttons */}

            <div className='flex items-center justify-center gap-5'>
                <div className='flex items-center justify-center py-3 px-6 bg-black border-2 border-black text-white text-lg'>Explore</div>
                <div className='flex items-center justify-center py-3 px-6 border-2 border-black text-lg'>Learn More</div>

            </div>

        </div>


        {/* image */}
        <div className='w-full h-svh bg-gray-200 flex items-center justify-center'><img src={placeholderimg} alt="" className=''/></div>

    </div>
  )
}

export default Hero