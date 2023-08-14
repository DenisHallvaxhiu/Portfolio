import React from 'react'
import "./FooterPhone.css"
import Phone from "../../assets/PhoneMobile.png"
import Gmail from "../../assets/Gmail.png"
import Contacts from "../../assets/Contacts.png"

export default function FooterPhone() {
  return (
    <div className='phone-footer'>
        <div><img src={Phone} alt="icons" /></div>
        <div><img src={Gmail} alt="icons" /></div>
        <div><img src={Contacts} alt="icons" /></div>
    </div>
  )
}
