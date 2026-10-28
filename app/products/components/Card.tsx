

const Card = () => {
  return (
    <div className="relative text-white p-4 bg-[#2F2C24]">
                <p className="text-[3rem]">Product Name</p>
                <img  src={"./product1.png"} alt="Product Image"/>
                <p className="px-4 w-full right-0 absolute bottom-0 backdrop-blur-xs bg-white/10 text-[3rem]">$1500</p>
            </div>
  )
}

export default Card