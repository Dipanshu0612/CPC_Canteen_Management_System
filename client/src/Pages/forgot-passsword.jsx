import React, { useState } from 'react'
import MainCarousel from '../components/carousel'
import { NavLink as Link } from 'react-router-dom'

export default function ForgotPasssword() {
  let [a,setA]=useState(0);
  function submit(){
    setA((a)=>1-a)
  }
  return (
    <>
    <div className='flex justify-around h-screen w-full'>

      <div className='w-1/2 min-h-fit overflow-hidden'>
        <MainCarousel />
      </div>

      <div className='w-1/2 h-full bg-slate-300 flex items-center justify-center flex-col space-y-8'>

        <div className='flex space-x-5 '>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Government_of_India_logo.svg" alt="" className='w-[7rem]'/>
          <img src="https://upload.wikimedia.org/wikipedia/en/6/6e/Central_Police_Canteen_Logo.png" alt="" className='w-[7rem]'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ministry_of_Home_Affairs_India.svg/1200px-Ministry_of_Home_Affairs_India.svg.png" alt="" className='w-[13rem]'/>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png" alt="" className="w-[7rem]" / >
        </div>

        <div className='flex flex-col items-center justify-center'>
          <h2>Forgot Password</h2>
        </div>

        <div className='flex flex-col w-50 space-y-5 py-5 px-6 bg-slate-200 rounded-3xl'> 
          <input type="email" placeholder='User ID' className='bg-slate-100 rounded-sm px-2 py-1 '/>
          {a===1?<input type="password" placeholder='Enter OTP' className='bg-slate-100 rounded-sm px-2 py-1 '/>:""}
          {a===1?
          <button className='bg-green-500 py-2 px-[0.15rem] mt-4 mx-5 rounded-lg'>Submit</button> : <button className='bg-green-500 py-2 px-[0.15rem] mt-4 mx-5 rounded-lg' onClick={submit}>Send OTP</button>}
          

        </div>

        <div>
          <button className='bg-blue-500 py-2 px-2 my-2 mx-2 rounded-lg'><Link to="/admin-login" className="text-black no-underline">Admin Login</Link></button>
          <button className='bg-blue-500 py-2 px-2 my-2 mx-2 rounded-lg'><Link to="/user-login" className="text-black no-underline">User Login</Link></button>

        </div>

      </div>
      
    </div>
    </>
  )
}
