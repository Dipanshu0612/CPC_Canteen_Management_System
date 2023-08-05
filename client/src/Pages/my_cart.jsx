import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { NavLink as Link } from 'react-router-dom'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify'

export default function My_Cart() {
  const [sum,setSum]=useState(0);
  const [items,setItems]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/getCartItems')
    .then(items => setItems(items.data))
    .catch(err => console.log(err))
  },[items])

  async function RemoveItem(name){
    let response=await axios.post("http://localhost:3001/removeItem",{name})
    console.log(response.data)
  }
  
  return (
    <>
    <Header />
      {items.length > 0 ? 
      <div>
        <h3 className='text-center font-semibold my-3'>Your Cart</h3>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Item</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item,index) => {
          // setSum((prevState) => prevState + item.itemprice)
          return(
              <tr>
                <td>{index+1}</td>
                <td className='w-1/6 h-[10rem]'><img src={item.itemimg} alt="Item Image" className='object-contain'/></td>
                <td>{item.name}</td>
                <td>Rs. {item.price}</td>
                <td><button className='px-2 py-2 bg-red-600' onClick={()=>{
                  RemoveItem(item.name)
                  toast.success("Item Successfully Removed!")
                }}>Remove</button></td>
              </tr>
            )
        })}
      </tbody>
      </Table>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th></th>
          <th>Total</th>
          <th>Rs. {sum}</th>
          
        </tr>
      </thead>
      <tbody>
        
      </tbody>
      </Table>
       </div>
       
       :
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className='text-4xl text-center items-center flex justify-center my-4'>
          Your Cart is Empty. Shop Now!
        </div>
        <button className='px-4 py-2 bg-green-500 mb-3 hover:bg-green-700'><Link to="/" className="text-white">Back to Home Page</Link></button>
      </div>
  }
    <Footer />
    </>
  )
}
