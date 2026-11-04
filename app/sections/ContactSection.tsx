import React from 'react'
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className='bg-gradient-to-r from-[#696761] to-[#1E1E1E] w-full  min-h-screen  '>
        <div className=' flex items-center gap-6 bg-gradient-to-r from-[#FFE491] to-[#F7C52C] w-full  min-h-screen rounded-b-[50px]'>
            <div className='flex h-fit w-full px-20 gap-8'>
                <div className='overflow-hidden bg-gradient-to-r from-[#696761] to-[#1E1E1E] flex flex-col pb-8 gap-12 rounded-2xl '>
                <svg width="415" height="150" viewBox="0 0 415 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.34424 111.843C2.34424 111.843 66.1587 150.837 109.344 144.343C163.402 136.214 160.246 55.0599 214.844 52.3428C268.289 49.683 274.897 137.585 327.844 129.843C386.91 121.205 409.844 0.842773 409.844 0.842773" stroke-width="9" stroke="#F7C52C"/>
                    </svg>

                <p className=' mb-30 px-8 text-[4rem] text-white font-semibold leading-none'>
                    Let’s grow <br />
                    Through <br />
                    Contact!
                </p>
                <div className='px-8 gap-4 flex items-center'>
                    <input className='bg-white rounded-full px-4 py-3 text-2xl' placeholder='Book a call' type="text" name="" id="" />
                    <ArrowRight className='rounded-full bg-white ' size={50}/>
                </div>
            </div>
            <div className='min-h-full rounded-2xl flex items-center justify-center text-white text-[5rem] bg-gradient-to-r from-[#696761] to-[#1E1E1E] flex-1'>
                Brand Store Image 
            </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection