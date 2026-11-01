import { Menu } from 'lucide-react';
import {  Space_Grotesk } from 'next/font/google';

const font = Space_Grotesk({
  variable : "--font-geist-sans" , 
  weight : "600"
})


const Navbar = () => {
  return (
    <div className={`flex justify-between ${font.className}`}>
      <p className='text-[2rem]'>ACS</p>
      <Menu/>
    </div>
  )
}

export default Navbar