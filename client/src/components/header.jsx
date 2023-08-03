import React, { useState } from 'react'
import { useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink as Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

export default function Header() {
  let [menuicon, changemenuicon] = useState(false);
//   useEffect(() => {
//     const rzpPaymentForm = document.getElementById("rzp_payment_form");
//     if (!rzpPaymentForm.hasChildNodes()) {

//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/payment-button.js";
//       script.async = true;
//       script.dataset.payment_button_id = "pl_LklOUd6tPdSZet";
//       rzpPaymentForm.appendChild(script);

//     }

//   });

  return (
    <div className='flex flex-wrap justify-between items-center bg-gray-900 h-[4.5rem] sticky top-0 z-10 '>
      <div className="logo flex flex-wrap">
        <a href="/" className='flex flex-wrap justify-center items-center cursor-pointer font-semibold'><img src="https://upload.wikimedia.org/wikipedia/en/6/6e/Central_Police_Canteen_Logo.png" alt="" className='h-[3rem] mx-4 bg-gradient-to-t from-white to-gray-400 inline' /></a>
        <h4 className='flex text-white items-center mt-2'>CPC Canteen</h4>
      </div>

      <div className="nav" id='nav'>
        <ul className='flex flex-wrap justify-centre items-center mr-4 space-x-5'>
          <li className="text-white cursor-pointer py-[1.37rem] font-semibold "><Link to="/" activeClassName='active'>Home</Link></li>
          <li className="text-white cursor-pointer py-[1.37rem] font-semibold" ><Link to="/about-us" activeClassName='active'>About Us</Link></li>
          <li className="text-white cursor-pointer py-[1.37rem] font-semibold" ><Link to="/about-us" activeClassName='active'><CgProfile className='text-2xl' /></Link></li>
        </ul>
      </div>

      {menuicon ? <AiOutlineClose id='menuicon' onClick={() => {
        document.getElementById('nav').style.display = 'none'
        changemenuicon((prevState) => !prevState)
      }} />
        : <AiOutlineMenu id='menuicon' onClick={() => {
          document.getElementById('nav').style.display = 'block'
          changemenuicon((prevState) => !prevState)
        }} />}

    </div>
  )
}
