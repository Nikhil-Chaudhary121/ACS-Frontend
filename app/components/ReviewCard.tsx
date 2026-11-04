

const ReviewCard = () => {
  return (
    <div className="flex flex-col p-6 gap-4 text-white bg-[#FFF7ED]/20 border border-white/30 rounded-2xl backdrop-blur-lg shadow-xl">
        <div className="flex justify-between">
            <img className="w-[60px] h-[60px] object-cover rounded-full " src="https://images.unsplash.com/photo-1788500304857-256ab412295c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
            <div className="flex flex-col items-end text-[1.3rem] tracking-[-0.1em] leading-none">
                <p>Sam</p>
                <p>23 Year Old</p>
            </div>
        </div>
        <p className="text-sm">Great quality and reliable parts. We found exactly what
            we needed, and the entire process was quick and 
            hassle-free
        </p>
    </div>
  )
}

export default ReviewCard