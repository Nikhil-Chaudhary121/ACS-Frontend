import React from 'react'

const BrandSection = () => {
  return (
    <div className='flex flex-col gap-16 p-12 bg-gradient-to-r from-[#696761] to-[#1E1E1E] h-full w-screen bg-[#FFE491] min-h-full' >
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
        <div className='flex flex-col text-[8rem] leading-[7rem] tracking-[-0.1em] justify-center items-center'> 
          <p className='text-[#F7C52C]'>Brands <span className='text-[#FFF7ED]'>that</span></p>
          <p className='text-[#FFF7ED]'>Trust our <span className='text-[#F7C52C]'>Quality</span></p>
        </div>
        <button>Left</button>
        <button>Right</button>
      </div>
    </div>
  )
}

export default BrandSection