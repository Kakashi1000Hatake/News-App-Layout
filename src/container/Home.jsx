import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Blogs from '../components/Blogs'
import Benifits from '../components/Benifits'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='w-full flex items-center justify-center flex-col '>

    <div className='w-full flex items-center justify-center  md:border-b border-black'>
    <Navbar />
    </div>
    <Hero />
    <Highlights />
    <Blogs />
    <Benifits />
    <Newsletter />
    <Footer />

    </div>
  )
}

export default Home