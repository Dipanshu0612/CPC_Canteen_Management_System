import React from 'react'
import MainCarousel from '../components/carousel'
import { NavLink as Link } from 'react-router-dom'


export default function AdminLogin(){
return (
    <>
   <div className='flex justify-around h-screen w-full'>

<div className='w-1/2 min-h-fit overflow-hidden'>
  <MainCarousel />
</div>

<div className='w-1/2 h-full bg-slate-100 flex items-center justify-center flex-col space-y-8'>

        <div className='flex space-x-5 '>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Government_of_India_logo.svg" alt="" className='w-[7rem]'/>
          <img src="https://upload.wikimedia.org/wikipedia/en/6/6e/Central_Police_Canteen_Logo.png" alt="" className='w-[7rem]'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ministry_of_Home_Affairs_India.svg/1200px-Ministry_of_Home_Affairs_India.svg.png" alt="" className='w-[13rem] p-3'/>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png" alt="" className="w-[7rem]" / >
        </div>

        <div className='flex flex-col items-center justify-center'>
          <h1>Welcome to CPC Canteen</h1>
          <h3>Admin Login</h3>
        </div>

        <div className='flex flex-col w-50 space-y-5 py-5 px-6 bg-blue-100 rounded-3xl'> 
          <input type="email" placeholder='Email / User Id'  className='bg-slate-100 rounded-sm px-2 py-1'/>
          <input type="password" placeholder='Password'  className='bg-slate-100 rounded-sm px-2 py-1'/>
          <button className='bg-green-500 py-2 px-[0.15rem] mt-4 mx-5 rounded-lg'>Submit</button>
        </div>

        <div>
          <button className='bg-green-500 py-2 px-2 my-2 mx-2 rounded-lg'><Link to="/" className="text-black no-underline">User Login</Link></button>
          {/* <button className='bg-blue-500 py-2 px-2 my-2 mx-2 rounded-lg'><Link to="/forgot-password" className="text-black no-underline">Forgot Password</Link></button> */}

        </div>

      </div>
      
    </div>
    </>
  )
}
