import React from 'react'
import placeholderimg from '../assets/placeholderimg.png'

function Blogs() {
  return (
    <div className='w-11/12 flex flex-col gap-16 py-20 items-center justify-center'>

    {/* heading */}
    <div className='flex items-center justify-center flex-col gap-4'>
        <p className='text-sm'>Latest</p>
        <h1 className='text-5xl font-bold w-5/6 text-center max-lg:w-full'>Stay Informed with Our Latest News</h1>
        <p className='text-lg text-center'>Get the latest news articles delivered to your inbox.</p>
    </div>

    {/* News Articles */}
    <div className='w-full flex items-center justify-center flex-col gap-20 '>
        {/* articles */}
        <div className='w-full flex items-center gap-10 max-lg:flex-wrap'>
            {/* article 1 */}
            <div className='w-1/3 flex flex-col gap-7 max-lg:w-full '>
            {/* article img */}
                <div className='w-full h-1/2 bg-gray-200 flex items-center justify-center'><img src={placeholderimg} alt="" /></div>

            {/* article Content */}
                <div className='flex flex-col gap-4'>
                    <p className='font-medium text-xs'>Technology</p>
                    <h1 className='text-2xl  font-bold text-wrap'>The Future of Artificial Intelligence in Healthcare</h1>
                    <p className='text-lg'>Discover how AI is transforming the healthcare industry and improving patient care.</p>
                </div>
            {/* article auther */}
                <div className='flex w-full gap-5 items-center'>
                    <div className='bg-gray-200 w-16 h-16 flex items-center justify-center rounded-full'><img src={placeholderimg} alt="" /></div>
                    <div className=''><h2 className='text-lg font-medium'>John Doe</h2>
                    <p className='flex gap-8'>11 Jan 2022 <li>5 min read</li></p>
                    </div>
                </div>
            </div>



            {/* article 2 */}
            <div className='w-1/3 flex flex-col gap-7 max-lg:w-full '>
            {/* article img */}
                <div className='w-full h-1/2 bg-gray-200 flex items-center justify-center'><img src={placeholderimg} alt="" /></div>

            {/* article Content */}
                <div className='flex flex-col gap-4'>
                    <p className='font-medium text-xs'>Technology</p>
                    <h1 className='text-2xl  font-bold text-wrap'>The Future of Artificial Intelligence in Healthcare</h1>
                    <p className='text-lg'>Discover how AI is transforming the healthcare industry and improving patient care.</p>
                </div>
            {/* article auther */}
                <div className='flex w-full gap-5 items-center'>
                    <div className='bg-gray-200 w-16 h-16 flex items-center justify-center rounded-full'><img src={placeholderimg} alt="" /></div>
                    <div className=''><h2 className='text-lg font-medium'>John Doe</h2>
                    <p className='flex gap-8'>11 Jan 2022 <li>5 min read</li></p>
                    </div>
                </div>
            </div>



            {/* article 3 */}
            <div className='w-1/3 flex flex-col gap-7 max-lg:w-full '>
            {/* article img */}
                <div className='w-full h-1/2 bg-gray-200 flex items-center justify-center'><img src={placeholderimg} alt="" /></div>

            {/* article Content */}
                <div className='flex flex-col gap-4'>
                    <p className='font-medium text-xs'>Technology</p>
                    <h1 className='text-2xl  font-bold text-wrap'>The Future of Artificial Intelligence in Healthcare</h1>
                    <p className='text-lg'>Discover how AI is transforming the healthcare industry and improving patient care.</p>
                </div>
            {/* article auther */}
                <div className='flex w-full gap-5 items-center'>
                    <div className='bg-gray-200 w-16 h-16 flex items-center justify-center rounded-full'><img src={placeholderimg} alt="" /></div>
                    <div className=''><h2 className='text-lg font-medium'>John Doe</h2>
                    <p className='flex gap-8'>11 Jan 2022 <li>5 min read</li></p>
                    </div>
                </div>
            </div>

        </div>

        {/* view all */}
        <div className=' border-2 border-black py-2 px-5 text-lg'>
            View all
        </div>
    </div>

    </div>
  )
}

export default Blogs