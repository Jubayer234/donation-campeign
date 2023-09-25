import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import CardSecondPage from "./CardSecondPage"

const CardPage = () => {

  const [card,setCard] = useState({})

  const {id} = useParams()
 
  const cards = useLoaderData()

  useEffect(()=>{
    const findCard = cards?.find(card => card.id == id )

    setCard(findCard);

  },[id,card] )

  return (
    <div>
      <CardSecondPage card={card}></CardSecondPage>
    </div>
  )
}

export default CardPage