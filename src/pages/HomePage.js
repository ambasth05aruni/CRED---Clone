import React from 'react'
import HeroPart from '../components/HeroPart'
import Header from '../components/common/Header'
import ProductShowCase from '../components/ProductShowCase'
import FeelSpecial from '../components/FeelSpecial'
import CredExperience from '../components/CredExperience'
import CredSecurity from '../components/CredSecurity'
import BrandsLove from '../components/BrandsLove'
import WindowPeek from '../components/WindowPeek'
import MobileScroll from '../components/MobileScroll'
import CredStory from '../components/CredStory'
import AppRating from '../components/AppRating'
import Footer from '../components/common/Footer'

const HomePage = () => {
  return (
   <>
   <Header/>
   <HeroPart/>
   <ProductShowCase/>
   <FeelSpecial/>
   <BrandsLove/>
   <CredExperience/>
   <MobileScroll/>
   <div className='non-mobile'>
   <WindowPeek/>
   </div>
<CredSecurity/>
<CredStory/>
<AppRating/>
<Footer/>
  </>
  )
   
  
}

export default HomePage
