const Banner = () => {
  return (
    <div className="h-[500px] text-center">
       <h1 className="pt-44 mb-10 text-2xl md:text-4xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
        <input type="text" placeholder="Search here...." className="input border-[#DEDEDE] md:w-[470px] h-[50px] rounded-r-sm" />
        <button className=" w-28 h-[49px] bg-[#FF444A] text-white rounded-r-lg">
          Search
        </button>
       </div>
  )
}

export default Banner;