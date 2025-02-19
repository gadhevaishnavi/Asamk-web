import React from 'react'
import logo2 from '../assets/images/logo2.png'
import '../assets/css/ContactUs.css'
const ContactUs = () => {
  return (
    <div className='container'>
    <h1 className='h1'>Contact Us</h1>
    <div className='form'>
      <h1>Get in touch with us Today</h1>
      <p>Mobile: +968 92850600</p>
      <p>Tel: +968 24050604</p>
      <p>Address: P.O.BOX 1741, POSTAL CODE 122, AL MABELA, SULTANATE OF OMAN, C.R.NO 1341511</p>
      <p>Email: info@asmakmct.com</p>

      <img src={logo2} alt="" />
    </div>
    </div>
  )
}

export default ContactUs
