import React from 'react'
import placeholderimg from '../assets/placeholderimg.png'

function Benifits() {
  return (
    <div className='w-11/12 flex items-center justify-between py-20 gap-12 max-md:flex-col'>
        {/* benifits */}
        <div className='w-1/2 flex item-center flex-col gap-10 max-lg:gap-6 max-md:w-full'>
            <h1 className='text-5xl font-bold max-lg:text-4xl tracking-tight w-full'>Stay informed with our news platform for timely updates and comprehensive coverage</h1>
            <p className='text-lg'>Our news platform provides you with the latest information and in-depth coverage, ensuring you stay up-to-date with the most important news.</p>
        </div>

        {/* benifits img */}
        <div className='w-1/2 max-lg:h-96 bg-gray-200 flex justify-center items-center box-border max-md:w-full'>
        <img src={placeholderimg} alt="" className='' />
        </div>
    </div>
  )
}

export default Benifits