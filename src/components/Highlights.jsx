import React from 'react'
import placeholderimg from '../assets/placeholderimg.png'

function Highlights() {
  return (
    <div className='w-11/12 flex flex-col gap-16 py-20'>
            {/* Headings */}
        <div className='text-center flex flex-col items-center justify-center gap-4' >
            <p className='text-sm'>Discover</p>
            <h1 className='text-5xl font-bold'>Stay Informed, Get Inspired</h1>
            <p className='text-lg'>Explore the Latest News in World, Technology, and Entertainment</p>
        </div>

        {/* Highlights */}
        <div className='flex gap-10 items-center justify-center max-lg:flex-col'>

           <div className='w-1/2 max-lg:w-full'>
            {/* world */}
            <div className='w-full h-96 flex border-2 border-gray-500 max-lg:w-full max-md:flex-col max-md:h-1/2'>
                {/* highlight text */}
                <div className='w-full h-full flex flex-col items-left justify-center gap-2 p-6 '>
                    <p className='font-medium text-xs'>Inform</p>
                    <h2 className='text-2xl font-bold text-wrap '>In-Depth Analysis and Engaging Stories</h2>
                    <p className='text-sm'>Stay Updated with the Latest Happenings Around the Globe</p>

                    <p className='py-4'>Explore</p>
                </div>

                {/* Highlight Img */}
                <div className='w-full  h-full  bg-gray-200 flex items-center justify-center'>
                    <img src={placeholderimg} alt="" className='min-w-full min-h-full'/>
                </div>
            </div>
           </div>

            
            <div className='w-1/2 flex gap-10 max-lg:w-full max-md:flex-col'>

                {/* tech */}
            <div className='w-1/2 h-96 flex flex-col items-center justify-center  border-2 border-gray-500 max-md:w-full'>
                {/* highlight text */}
                <div className='w-full  h-1/2  flex flex-col items-left justify-center gap-2 p-3 '>
                    <p className='font-medium text-xs'>Discover</p>
                    <h2 className='text-2xl font-bold text-wrap '>Tech Buzz</h2>
                    <p className='text-sm'>Stay Ahead with the Latest Technological Advancements</p>

                    <p className='py-4'>Explore</p>
                </div>

                {/* Highlight Img */}
                <div className='w-full h-1/2 bg-gray-200 flex items-center justify-center'>
                    <img src={placeholderimg} alt="" className='min-w-full min-h-full'/>
                </div>
            </div>


            {/* entertainment */}
            <div className='w-1/2 h-96  flex flex-col items-center justify-center  border-2 border-gray-500 max-md:w-full'>
                {/* highlight text */}
                <div className='w-full  h-1/2 hover:h-full flex flex-col items-left justify-center gap-2 p-3 '>
                    <p className='font-medium text-xs'>Discover</p>
                    <h2 className='text-2xl font-bold text-wrap '>Entertainment News</h2>
                    <p className='text-sm'>Get Your Daily Dose of Entertainment Gossip and Updates</p>

                    <p className='py-4'>Explore</p>
                </div>

                {/* Highlight Img */}
                <div className='w-full h-1/2 bg-gray-200 flex items-center justify-center'>
                    <img src={placeholderimg} alt="" className='min-w-full min-h-full'/>
                </div>
            </div>

            </div>




        </div>
    </div>
  )
}

export default Highlights