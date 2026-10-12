import React from 'react'
import HeroCarousel from '../Components/HeroCarousel'
import warranty from '../assets/warranty.webp'
import packaging from '../assets/order-packaging-video.jpg'
import Learning from '../Components/Learning'
import ReasonToBuy from '../Components/ReasonToBuy'
import FeaturesHighlight from '../Components/FeatureHighlight'
const Home = () => {
  return (
    <>
        <HeroCarousel />
        <div className='w-100 overflow-hidden pt-3 mb-4 px-5'>
            <img src={warranty} alt="Warranty" className="d-block w-100 px-2" />
        </div>
        <Learning />
        <div className='w-100 overflow-hidden pt-3 mb-4'>
            <img src={packaging} alt="Warranty" className="d-block w-100" />
        </div>
        <ReasonToBuy />
        <FeaturesHighlight />
    </>
  )
}

export default Home