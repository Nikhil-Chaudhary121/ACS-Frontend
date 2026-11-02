import React from 'react'
import { CircleChevronLeft , CircleChevronRight , MoveRight} from 'lucide-react';
import MostSellingCard from '../components/MostSellingCard';

const BrandSection = () => {
  return (
    <div className='flex flex-col  gap-24 p-12 bg-gradient-to-r from-[#696761] to-[#1E1E1E] h-full w-screen bg-[#FFE491] min-h-fit' >
      <div className='flex justify-between '>
        <div className=' ml-10 w-[180px] h-[180px] bg-[#FFF7ED]/20 border border-white/30 rounded-full backdrop-blur-lg shadow-xl'></div >
        <div>
          <div>
            <div className='flex'><p className='text-[4rem] font-bold bg-white h-fit rounded-l-[1.7rem] p-4 text-[#2E2E2C]'>#01</p>
            <div className=' p-10 flex flex-col gap-2  bg-white rounded-b-[1.7rem] rounded-tr-[1.7rem]'><p className='text-[2rem] text-[#2E2E2C] tracking-tight '>High-Quality Spare Parts</p> <p className='text-[#565247]'> Everything You Need, In One Place</p>
              <p className='text-[#565247]' >From hydraulic components to engine and <br /> z
            mechanical parts, find the right  replacement <br />
            parts for your machine.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='mt-20 flex flex-col text-[12rem] leading-[11rem] tracking-[-0.1em] justify-center items-center'> 
          <p className='text-[#F7C52C]'>Brands <span className='text-[#FFF7ED]'>that</span></p>
          <p className='text-[#FFF7ED]'>Trust our <span className='text-[#F7C52C]'>Quality</span></p>
        </div>
      </div>
       <div className='flex mt-10 w-full justify-around'>
         <CircleChevronLeft color='#F7C52C' size={80}/>
        <CircleChevronRight color='#F7C52C' size={80}/>
       </div>
       <div className='flex flex-col gap-6'>
        <div className='text-[#FFF5E9] px-20 flex justify-between items-center '>
          <p className='text-[5rem] tracking-[-0.1em]'>Most Selling</p>
          <div className='max-w-fit'>
            <p className='text-white opacity-[50%] flex items-center gap-2 text-[1.5rem] '>Browse all <span> <MoveRight/> </span> </p>
            <div className='w-35 h-[1px] bg-white'>
              
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 px-4 gap-8 '>
          <MostSellingCard/>
          <MostSellingCard/>
          <MostSellingCard/>
          <MostSellingCard/>
        </div>
        <div className='w-full h-[1.5px] bg-[#FFF7ED]'></div>
       </div>
    </div>
  )
}

export default BrandSection