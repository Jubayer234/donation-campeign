import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({card}) => {

    const {id,Picture,Title,Category,Card_BG_Color,Category_BG_Color,Category_Text_Color,Title_Color} = card || {}

  return (
   <Link to = {`/cards/${id}`}>
    <div style={{backgroundColor:Card_BG_Color}}  className="border bg-white rounded-xl w-80 mb-3">
        <div>
            <img className='w-full' src={Picture} alt="" />
        </div>
        <div className='p-4 space-y-3'>
        <button style={{backgroundColor: Category_BG_Color,color:Category_Text_Color }} className=' font-medium px-2 py-1 text-center rounded'>{Category}</button>
            <h4 style={{color: Title_Color}} className='text-xl font-semibold' > {Title} </h4>
        </div>
    </div>
   </Link>
  )
}

export default Card