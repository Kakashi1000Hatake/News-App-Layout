import React from 'react'
import placeholderimg from '../assets/placeholderimg.png'

function Newsletter() {
  return (
    <div className='w-11/12 flex items-center justify-between gap-16 py-20 max-lg:flex-col max-lg:pb-10'>
        {/* newsletter subscription */}
        <div className='w-1/2 flex flex-col gap-8 max-lg:w-full'>
            <h1 className='text-5xl font-bold max-lg:text-4xl'>Stay Informed with Our Newsletter</h1>
            <p className='text-lg'>Subscribe to our newsletter for the latest updates and exclusive content.</p>

            {/* buttons */}
            <div className='flex w-full gap-5 '>
                <div className='flex items-center justify-center py-3 px-6 bg-black border-2 border-black text-white text-lg'>Subscribe</div>
                <div className='flex items-center justify-center py-3 px-6 border-2 border-black text-lg'>Learn More</div>
            </div>
        </div>


        {/* newsletter img */}
        <div className='w-1/2 h-96 flex items-center justify-center bg-gray-200 max-lg:w-full'><img src={placeholderimg} alt="" /></div>

    </div>
  )
}

export default Newsletter