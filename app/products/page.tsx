import { IBM_Plex_Sans_Thai } from "next/font/google";
import SearchBox from "./components/SearchBox";

import Card from "./components/Card";
import { ArrowLeft, ArrowRight } from 'lucide-react';


const font = IBM_Plex_Sans_Thai({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: '400'
});

const page = () => {
  return (
    <div className={` ${font.className}  w-full flex flex-col items-center py-20 px-20`}>
    {/* <div className={` ${font.className} w-full h-full flex flex-col items-center py-20 px-20`}> */}
        <div className="flex flex-col w-fit">
            <h1 className={` text-[15rem] text-[#2F2C24]`}>CATALOG</h1>
            <SearchBox/>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-8 w-full">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className=" w-full flex justify-between items-center px-8 my-10">
            <button className="flex gap-2 items-center font-semibold px-6 py-2 border rounded-full"> <ArrowLeft size={20}/> x   Previous Page </button>
            <button className="flex gap-2 items-center font-semibold px-6 py-2 border rounded-full">Next Page <ArrowRight size={20}/> </button>
        </div>
    </div>
  )
}

export default page