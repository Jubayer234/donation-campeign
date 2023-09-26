import img from '/img/Rectangle 4281.jpg'


const Banner = () => {
  return (
    <div className=" text-center mb-20">
      <div className='bg-slate-300 bg-opacity-20'>
      <img className="relative mix-blend-overlay" src={img} alt="" />
      </div>
       <div className="absolute -mt-36 ml-5 md:-mt-52 md:ml-24 lg:-mt-80 lg:ml-96">
       <h1 className="mb-10 text-2xl md:text-4xl lg:text-5xl font-bold text-center">I Grow By Helping People In Need</h1>
        <input type="text" placeholder="Search here...." className="input border-[#DEDEDE] md:w-[470px] h-[50px] rounded-r-sm" />
        <button className=" w-28 h-[49px] bg-[#FF444A] text-white rounded-r-lg">
          Search
        </button>
       </div>
       </div>
  )
}

export default Banner;