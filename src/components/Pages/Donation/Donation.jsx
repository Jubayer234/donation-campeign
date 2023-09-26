import { useEffect, useState } from "react"
import DonationPage from "./DonationPage";

const Donation = () => {

  const [donation,setDonation] = useState([]);

  const [isShow,setIsShow] = useState (false)


  useEffect(() => {

    const donationDetail = JSON.parse(localStorage.getItem('donation'));
    
    if(donationDetail){
      setDonation(donationDetail)
    }

  },[])
  return (
      <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
      {
        isShow ? donation.map(card => <DonationPage key={card.id} card={card}></DonationPage>) :
         donation.slice(0,4).map(card => <DonationPage key={card.id} card={card}></DonationPage>)
      }
    </div>
    {
      donation.length > 4 && <button onClick={() => setIsShow(!isShow)} className=" mt-8 btn flex bg-[#FF444A] text-white mx-auto">
      {!isShow? "See All" : "Show Less"}
    </button>
    }
      </div>
  );
};

export default Donation