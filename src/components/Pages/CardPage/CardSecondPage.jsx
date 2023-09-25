import React from 'react'

const CardSecondPage = ({card}) => {

    const {id,Picture,Title,Description} = card || {}

  return (
    <div> 
    <div className=''>
    <img className=' w-full mx-auto relative' src={Picture} 
    alt="" />
    <button className='btn'>
    Donate $290
    </button>
  </div>
  <h3 className='mt-10 text-5xl font-bold'>
    {Title}
  </h3>
  <p className='mt-6 text-[#0b0b0bb3]'>
    {Description}
  </p></div>
  )
}

export default CardSecondPage