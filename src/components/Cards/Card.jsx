import React from 'react'

const Card = ({card}) => {

    const {Picture,Title,Category,Card_BG_Color} = card || {}

  return (
    <div  className="border bg-white rounded-xl w-80 mb-3">
        <div>
            <img className='w-full' src={Picture} alt="" />
        </div>
        <div className='p-4 space-y-3'>
        <p>{Category}</p>
            <h4> {Title} </h4>
        </div>
    </div>
  )
}

export default Card