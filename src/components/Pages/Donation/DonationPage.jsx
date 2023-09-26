import React from 'react'

const DonationPage = ({card}) => {

    const {id,Picture,Category,Title,Price,Title_Color,Category_BG_Color,Card_BG_Color} = card || {}

  return (
    <div>
        <div style={{backgroundColor : Card_BG_Color}}  className=' md:flex mx-auto rounded-lg mb-6 w-[300px] md:w-[650px] gap-6'>
        <img src={Picture} alt="" />
        <div className=' mt-5 pb-5 space-y-2  text-center md:text-start'>
            <button style={{backgroundColor:Category_BG_Color, color: Title_Color}} className='py-1 px-3 rounded text-center'>
                {Category}
            </button>
            <h3 className='text-2xl font-bold'>
                {Title}
            </h3>
            <p style={{color: Title_Color}} className='font-semibold'>
                {Price}
            </p>
            <button style={{backgroundColor: Title_Color}} className='btn text-white'>
                View Details
            </button>
        </div>
    </div>
    </div>
  )
}

export default DonationPage