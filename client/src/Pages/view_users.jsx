import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios';
import { useEffect, useState } from "react";

export default function ViewUsers() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    axios.get('https://cpc-canteen-management-system.onrender.com/getUsers')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
    console.log(users)
  },[])

  let [curr_user,setCurr_User]=useState({
    uid:"",
    fn:"",
    ln:"",
    mn:""
  })

  let {uid,fn,ln,mn}=curr_user;

  async function genratepassword(uid){
    let send=await axios.post('https://cpc-canteen-management-system.onrender.com/getUser',{uid:uid})
    console.log(send.data);
    setCurr_User({
      uid:uid,
      fn:send.data.first_name,
      ln:send.data.last_name,
      mn:send.data.mobile_no
    })
    let pass=fn+mn.slice(10);
    let send_pass=await axios.post('https://cpc-canteen-management-system.onrender.com/sendPass',{uid:uid,pass:pass})
  }

  return (
    <>
    <Header />
    <div>
      <table>
        <thead>
        <tr>
          <th>
            Id
          </th>
          <th>
            First Name
          </th>
          <th>
            Last Name
          </th>
          <th>
            Mobile No
          </th>
          <th>Gender</th>
          <th>Email</th>
          <th>Position</th>
          <th>Address</th>
          <th>Button</th>
        </tr>
        </thead>
        <tbody>
          {users.map(user=>{
            // setCurr_User({
            //   uid:user.user_id,
            //   fn:user.first_name,
            //   ln:user.last_name,
            //   mn:user.mobile_no
            // })
            
            return(
            <tr>
              <td>{user.user_id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.mobile_no}</td>
              <td>{user.gender}</td>
              <td>{user.email_id}</td>
              <td>{user.position}</td>
              <td>{user.address}</td>
              <td><button className='bg-blue-500 px-2 py-2 rounded-md my-2' onClick={()=>{genratepassword(user.user_id)}}>Generate Password</button></td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    <Footer />
    </>
  )
}
