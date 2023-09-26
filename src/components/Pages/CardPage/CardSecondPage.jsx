import React from 'react'
import swal from 'sweetalert';

const CardSecondPage = ({card}) => {

    const {id,Picture,Title,Description,Price,Title_Color} = card || {}

    const handleAddToDonation = () =>{

      const addedDonationArray = [];

      const donationDetail = JSON.parse(localStorage.getItem('donation'))
      
      if(!donationDetail) {
        addedDonationArray.push(card)
        localStorage.setItem('donation',JSON.stringify(addedDonationArray))
        swal("Good job!", "Your Donation Has Been Added!", "success");
        }else{

          const isExists = donationDetail.find(card => card.id === id)
          if(!isExists) {
            addedDonationArray.push(...donationDetail,card)
          localStorage.setItem('donation',JSON.stringify(addedDonationArray))
          swal("Good job!", "Your Donation Has Been Added!", "success");
          }else{
            swal("Not Again!", "Your Donation Has Been Added Already!", "error");
          }
        }

    }

  return (
    <div> 
    <div>
    <img className=' w-full mx-auto relative' src={Picture}
    alt="" />
    <div className='w-full h-[130px] -mt-[130px] relative bg-[#0b0b0b80]'>
    <button onClick={handleAddToDonation} style={{backgroundColor : Title_Color}} className=' mt-8 ml-10 py-4 px-5 rounded font-semibold text-center text-white'>
    Donate {Price}
    </button>
    </div>
  </div>
  <h3 className='mt-10 text-xl ml-5 lg:ml-0 md:text-5xl font-bold'>
    {Title}
  </h3>
  <p className='mt-6 mb-6 p-5 lg:p-0 text-[#0b0b0bb3]'>
    {Description}
  </p></div>
  )
}

export default CardSecondPage