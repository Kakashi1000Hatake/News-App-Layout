import React from 'react'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import { FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='w-11/12 flex flex-col items-center justify-center py-20 pb-10'>

        {/* footer content */}
          <div className='w-full flex items-center gap-36 pb-20 pr-20 max-lg:flex-col max-lg:gap-10 max-md:pb-5'>
            {/* email subscription form  left*/}
            <div className=' flex flex-col gap-4 w-5/12 max-lg:w-full '>

            <h1 className='text-4xl font-bold'>LOGO</h1>

            <p className='text-lg'>Stay up to date on the latest features and releases by joining our newsletter.</p>

            {/* email input */}
            <div className='flex gap-5'>
              <input type="email" name="" id=""  className='w-5/6 border border-black rounded-none px-5' placeholder='Enter email here'/>
              <div className='flex items-center justify-center py-3 px-6 border border-black text-lg'>Subscribe</div>
            </div>

            <p className='text-sm'>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>

            </div>

            {/* right */}
            <div className='flex gap-40 max-sm:flex-col max-md:justify-between max-md:w-full max-md:gap-10'>
              {/* Colomn 1 */}
            <div className='flex flex-col gap-5'>
              <h1 className='text-lg font-medium'>Colomn One</h1>

              <ul className='flex flex-col gap-4'>
                <li>Link One</li>
                <li>Link Two</li>
                <li>Link Three</li>
                <li>Link Four</li>
                <li>Link Five</li>
              </ul>
            </div>


            {/* Colomn 2 */}
            <div className='flex flex-col gap-5'>
              <h1 className='text-lg font-medium'>Colomn Two</h1>

              <ul className='flex flex-col gap-4'>
                <li>Link Six</li>
                <li>Link Seven</li>
                <li>Link Eight</li>
                <li>Link Nine</li>
                <li>Link Ten</li>
              </ul>
            </div>


            {/* Social Media */}
            <div className='flex flex-col gap-5'>
              <h1 className='text-lg font-medium'>Follow us</h1>

              <ul className='flex flex-col gap-4'>
                <li className='flex items-center gap-5'><FaFacebook /> Facebook</li>
                <li className='flex items-center gap-5'><FaInstagram /> Instagram</li>
                <li className='flex items-center gap-5'><FaXTwitter /> X</li>
                <li className='flex items-center gap-5'><FaLinkedin /> LinkdIn</li>
                <li className='flex items-center gap-5'><FaYoutube /> Youtube</li>
              </ul>
            </div>
            </div>




          </div>


            


        {/* copyright */}
        <div className='w-full flex items-center justify-between border-t border-black py-10 pb-0 text-sm max-md:flex-wrap-reverse max-md:gap-5 max-md:pb-0'>
                {/* copyright note */}
                <div className=''>
                    <p>© 2024 Relume. All rights reserved.</p>
                </div>

                {/* policy links */}
                <div>
                    <ul className='flex items-center justify-center gap-10'>
                        <li className='underline'>Privacy Policy</li>
                        <li className='underline'>Terms of Service</li>
                        <li className='underline'>Cookies Setting</li>
                    </ul>
                </div>
            </div>

    </div>
  )
}

export default Footer