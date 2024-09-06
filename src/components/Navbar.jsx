import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

function Navbar() {

  const [hamMenu, setHamMenu] = useState(false)

  return (
    <div className='w-full flex items-center justify-center flex-col'>
    <div className='w-11/12 flex items-center justify-center gap-10 py-3 box-border max-md:justify-between md:justify-between'>
        {/* logo */}
        <div className='text-3xl font-extrabold'>LOGO</div>

        {/*  */}
        <div className='flex items-center justify-between w-full max-md:hidden md:hidden lg:flex'>
            {/* navigation */}
        <div className=''><ul className='flex gap-5 text-lg'>
            <li>Latest News</li>
            <li>Opinions</li>
            <li>Sports</li>
            <li>More</li>
            </ul>
        </div>

        {/* Extras */}
        <div className='flex gap-5 items-center justify-end'>
        <div className='flex items-center justify-center border border-black py-2 px-5 text-lg'>Learn More</div>
        <div className='flex items-center justify-center bg-black border border-black text-white py-2 px-5 text-lg'>Sign Up</div>
        </div>
        </div>


        {/* Hamburger */}

        <div className='hidden lg:hidden max-md:block md:block' onClick={()=>setHamMenu(!hamMenu)}><RxHamburgerMenu className='text-5xl'/></div>

    </div>

      <div className={` flex-col items-center justify-center gap-5 pb-10 ${hamMenu ? 'flex':'hidden'}`}>
                {/* navigation */}
        <div className=''><ul className='flex gap-5 text-lg flex-col items-center justify-center font-medium'>
            <li>Latest News</li>
            <li>Opinions</li>
            <li>Sports</li>
            <li>More</li>
            </ul>
        </div>

        {/* Extras */}
        <div className='flex gap-5 items-center justify-end'>
        <div className='flex items-center justify-center border border-black py-2 px-5 text-lg'>Learn More</div>
        <div className='flex items-center justify-center bg-black border border-black text-white py-2 px-5 text-lg'>Sign Up</div>
        </div>
      </div>

    </div>
  )
}

export default Navbar