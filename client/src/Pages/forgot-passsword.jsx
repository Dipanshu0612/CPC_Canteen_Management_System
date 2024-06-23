import axios from 'axios';
import React, { useState } from 'react'
import { NavLink as Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function ForgotPasssword() {
  let [userID, setUserID] = useState('');
  let [otp, setOTP] = useState('');
  let [a, setA] = useState(0);
  let [showNewPass, setShowNewPass] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  let [newPass, setNewPass] = useState('');
  let [confirmPass, setConfirmPass] = useState('');
  let navigate=useNavigate()

  const inputStyle = {
    backgroundColor: isDisabled ? '#f2f2f2' : 'white',
    color: isDisabled ? '#888' : 'black',
    cursor: isDisabled ? 'not-allowed' : 'auto',
  };

  async function submit() {
    let response = await axios.post('http://localhost:3001/forgot_pass', { userID });
    if (response.data.success) {
      setA((a) => 1 - a)
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  }

  async function verifyOTP() {
    let response = await axios.post('http://localhost:3001/verify_otp', { user_id: userID, otp });
    if (response.data.success) {
      setIsDisabled(true);
      setShowNewPass(true);
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  }

  async function handleChangePass() {
    if (newPass !== confirmPass) {
      toast.error("Passwords do not match");
      return;
    }
    let response = await axios.post('http://localhost:3001/change_pass', { user_id: userID, newPass });
    if (response.data.success) {
      toast.success(response.data.message);
      navigate('/');
    }
    else {
      toast.error(response.data.message);
    }
  }

  return (
    <>
      <div className='flex justify-around h-screen w-full'>

        <div className='w-100 h-full bg-slate-300 flex items-center justify-center flex-col space-y-8'>

          <div className='flex space-x-10 gap-5 '>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Government_of_India_logo.svg" alt="" className='w-[7rem]' />
            <img src="https://upload.wikimedia.org/wikipedia/en/6/6e/Central_Police_Canteen_Logo.png" alt="" className='w-[7rem]' />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ministry_of_Home_Affairs_India.svg/1200px-Ministry_of_Home_Affairs_India.svg.png" alt="" className='w-[13rem]' />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png" alt="" className="w-[7rem]" />
          </div>

          <div className='flex flex-col items-center justify-center'>
            <h2>Forgot Password</h2>
          </div>

          <div className='flex flex-col w-25 space-y-5 py-5 px-6 bg-slate-200 rounded-3xl'>
            <input type="text" placeholder='User ID' className='bg-slate-100 rounded-sm px-2 py-1 ' value={userID} onChange={(e) => setUserID(e.target.value)} required />
            {a === 1 ? <><input type="password" placeholder='Enter OTP' className='bg-slate-100 rounded-sm px-2 py-1 ' onChange={(e) => {
              setOTP(e.target.value)
            }} disabled={isDisabled} style={inputStyle}/>
              <button className='bg-green-500 py-2 px-[0.15rem] mt-4 mx-5 rounded-lg' onClick={verifyOTP} hidden={showNewPass}>Submit</button> </> : <button className='bg-green-500 py-2 px-[0.15rem] mt-4 mx-5 rounded-lg' onClick={submit}>Send OTP</button>}
            {showNewPass && <><input type="password" placeholder='New Password' className='bg-slate-100 rounded-sm px-2 py-1 ' onChange={(e)=>{
              setNewPass(e.target.value);
            }} />
              <input type="password" placeholder='Confirm Password' className='bg-slate-100 rounded-sm px-2 py-1' onChange={(e)=>{setConfirmPass(e.target.value)}} />
              <button className='bg-green-500 py-2 px-[0.15rem] mt-4 mx-5 rounded-lg' onClick={handleChangePass}>Change Password</button></>}
          </div>

        </div>

      </div>
    </>
  )
}
