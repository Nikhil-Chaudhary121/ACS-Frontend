import ReviewCard from "../components/ReviewCard"

const TestimonialSection = () => {
  return (
    <div className="relative flex gap-30 flex-col py-40 items-center bg-gradient-to-r from-[#696761] to-[#1E1E1E] w-full  min-h-screen">
        <div className="text-[4rem] text-center leading-none text-white tracking-[-0.06em]">
        <p>VOICES OF PEOPLE WHO VALUE</p>
        <p>QUALITY OVER COMPROMISE</p>
        </div>
        <div className="absolute right-40 top-20">
            <div className="h-8 w-8 bg-[#F7C52C] "></div>
            <div className="h-8 w-8 bg-[#F7C52C] ml-8 "></div>
        </div>
        <div className="grid grid-cols-4 gap-6 px-6">
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
        </div>
        <div className="w-full flex flex-col gap-2">
            <div className="w-full h-[2px] bg-[#F7C52C]"></div>
            <div className="w-full h-[2px] bg-[#F7C52C]"></div>
        </div>
    </div>
  )
}

export default TestimonialSection