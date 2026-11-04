import BrandIcon from "../components/BrandIcon"


const ShopByBrandSection = () => {
  return (
    <div className=" relative bg-gradient-to-br from-[#FFE491] to-[#F7C52C]  w-screen bg-[#FFE491] ">
        <p className="text-[5rem] py-8 px-20 tracking-[-0.1em] z-10">Shop by Brands</p>
        <div className="grid grid-cols-4 px-20 py-20 gap-8  z-10" >
            <BrandIcon/>
            <BrandIcon/>
            <BrandIcon/>
            <BrandIcon/>
            <BrandIcon/>
            <BrandIcon/>
            <BrandIcon/>
            <BrandIcon/>
        </div>
        <div className="absolute z-1 top-15 left-[-100] min-w-full">
            <svg className="z-1"  width="110%" height="620" viewBox="  0 0 1440 591" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="z-1" opacity="0.63" d="M-34 564.147C-34 564.147 310.84 234.299 586.5 227.147C788.169 221.915 879.557 422.448 1078 386.147C1292.26 346.953 1498 19.1475 1498 19.1475" stroke-width="72" stroke="#2F2C24"/>
                </svg>
        </div>
        <div className="z-50 flex flex-col gap-6 items-center">
          <div className=" z-50 w-[200vw] bg-[#1E1E1E] text-[#F7C52C] flex ">
            <p className="z-50 text-[2rem] ">Why choose us Why choose us why choose us why choose us Why choose us Why choose us why choose us why choose us Why choose us Why choose us  </p>
            </div>
          <div className=" z-50 w-[200vw] bg-[#1E1E1E] text-[#F7C52C] flex ">
            <p className="z-50 text-[2rem] ">Why choose us Why choose us why choose us why choose us Why choose us Why choose us why choose us why choose us Why choose us Why choose us  </p>
            </div>
            
            <div className="">
              
              <svg width="1150" height="599" viewBox="0 0 1150 599" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="16" y="23" width="1119" height="547" fill="#1E1E1E"/>
                <rect x="53" y="53" width="1045" height="487" fill="black"/>
                <rect x="94" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="534" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="149" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="589" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="204" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="644" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="259" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="699" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="314" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="754" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="369" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="809" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="974" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="424" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="864" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="1029" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="479" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect x="919" y="23" width="27" height="547" fill="#2F2C24"/>
                <rect width="94" height="59" fill="#1E1E1E"/>
                <rect x="1056" width="94" height="59" fill="#1E1E1E"/>
                <rect y="540" width="94" height="59" fill="#1E1E1E"/>
                <rect x="1056" y="540" width="94" height="59" fill="#1E1E1E"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default ShopByBrandSection