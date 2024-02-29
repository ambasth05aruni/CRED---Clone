import React from 'react'
import Button from "../common/Button"
import "./heroPart.css"


const HeroPart = () => {
  return (
    <div className='hero-part-wrapper'>
        <div className='flex absolute-center hero-claim-label'>
<div></div>
        </div>
        <div className='flex absolute-center flex-col hero-part max-width'>
            <div className='hero-heading'>
            rewards for paying credit card bills.
            </div>
            <div className='hero-subheading'>
            join 9M+ members who win rewards and cashbacks everyday
            </div>
            <Button buttonText='Download CRED'/>
        </div>
      
    </div>
  )
}

export default HeroPart
