import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/all'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footerText'>
        <AiOutlineCopyrightCircle className='copyright' />
        Copyright 2021 <span>theHam </span> | All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
