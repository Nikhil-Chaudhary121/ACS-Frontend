import React from 'react'

const Footer = () => {
  return (
    <div className=' py-20 px-36 flex justify-between relative bg-gradient-to-r text-white from-[#696761] flex  to-[#1E1E1E] w-full  min-h-screen'>
      <div className='h-full w-1/2'>
      <p className='text-[6rem] leading-[5rem] tracking-[-0.1em]'>Parts <br /> that heal <br /> Machines</p>
      <div className='w-40 h-[1px] bg-[#F7C52C]'></div>
      <p>contact</p>
      <p>Contact@gmail.com</p>
      <p>+911234567890</p>
      <p>follow us</p>
      <p>insta facebook x</p>
      </div>
      <div className=' flex flex-col gap-8'>
        <div className='flex items-end flex-col gap-3'>
          <p className='text-[3rem] leading-none tracking-[-0.1em]'>Navigation</p>
          <div className='w-40 h-[2px] mb-3 bg-[#F7C52C]'></div>
          <div className='flex flex-col gap-2 items-end'>
            <button className='py-2 w-fit px-4 text-[2rem] bg-[#FFF7ED]/20 border border-white/30 rounded-full backdrop-blur-lg shadow-xl'>Home</button>
          <button className='py-2 px-4 w-fit text-[2rem] bg-[#FFF7ED]/20 border border-white/30 rounded-full backdrop-blur-lg shadow-xl'>Service</button>
          <button className='py-2 px-4 w-fit text-[2rem] bg-[#FFF7ED]/20 border border-white/30 rounded-full backdrop-blur-lg shadow-xl'>Blog</button>
          <button className='py-2 px-4 w-fit text-[2rem] bg-[#FFF7ED]/20 border border-white/30 rounded-full backdrop-blur-lg shadow-xl'>About</button>
        
          </div>
          </div>
        <div className='flex flex-col items-end gap-3'>
          <p className='text-[3rem] leading-none tracking-[-0.1em]'>Legal</p>
          <div className='w-40 mb-3 h-[2px] bg-[#F7C52C]'></div>
          <div className='flex flex-col gap-2 items-end'>
            <button className='py-2 w-fit px-4 text-[2rem] bg-[#FFF7ED]/20 border border-white/30 rounded-full backdrop-blur-lg shadow-xl'>Privacy and Policy</button>
          <button className='py-2 w-fit px-4 text-[2rem] bg-[#FFF7ED]/20 border border-white/30 rounded-full backdrop-blur-lg shadow-xl'>Terms And Condition</button>
          
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer