import React from 'react'
import Navbar from '../components/Navbar'


const HeroSection = () => {
  return (
    <div className={`w-full min-h-screen p-8  `}>
      <Navbar/>
      <div className='flex flex-col h-full p-10 justify-between'>
        <div className='flex justify-between w-full items-start'>
          <div className='w-1/2 '>
            <p className=' text-[#2F2C24] text-[3rem] leading-[5rem] tracking-[-0.1em]'>Advance Construction  <br /> <span className='text-[9rem] tracking-[-0.1em]'> SPARES</span> </p>
          
          </div>
          <div className=' flex flex-col gap-8 w-1/2 pl-30 mt-6 '>
            <div className='bg-black h-2 w-25 bg-[#2F2C24] '></div>
            <p className=' ml-15 text-[3rem] tracking-[-0.1em] leading-[3.5rem] text-[#2F2C24] '>Find high-quality <br /> <span className=' text-[4rem] tracking-[-0.3rem]'> SPARE PARTS</span> </p>
            <div className='ml-45 bg-white h-16 w-70 rounded-2xl flex justify-center items-center text-xl '>Explore More</div>
          </div>
        </div>
        <div className='flex justify-between '>
          <div>
            <p className='text-2xl'>Random Bullshit</p>
          </div>
          <div className='flex flex-col'>
            <div className='w-6 h-6 bg-[#2F2C24]'></div>
            <div className='w-6 h-6 ml-6 bg-[#2F2C24]'></div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default HeroSection