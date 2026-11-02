import BrandIcon from "../components/BrandIcon"


const ShopByBrandSection = () => {
  return (
    <div className="h-full relative bg-gradient-to-br from-[#FFE491] to-[#F7C52C]  w-screen bg-[#FFE491] ">
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
        <div className="absolute z-1  top-0 left-[-100] min-w-full">
            <svg  width="110%" height="620" viewBox="0 0 1440 591" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.63" d="M-34 564.147C-34 564.147 310.84 234.299 586.5 227.147C788.169 221.915 879.557 422.448 1078 386.147C1292.26 346.953 1498 19.1475 1498 19.1475" stroke-width="72" stroke="#2F2C24"/>
                </svg>
        </div>
    </div>
  )
}

export default ShopByBrandSection