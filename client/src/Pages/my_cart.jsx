import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { NavLink as Link } from 'react-router-dom'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify'



export default function MyCart() {
  const [items, setItems] = useState([])
  let user_id = sessionStorage.getItem('user_id');
  // let amount = items.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    axios.get('http://localhost:3001/getCartItems', {
      params: {
        user_id: user_id,
      }
    })
      .then(items => setItems(items.data.usercart))
      .catch(err => console.log(err))
  }, [items,user_id])

  async function RemoveItem(item_id) {
    let response = await axios.post("http://localhost:3001/removeItem", { user_id, item_id })
    if(response.data=== "Deleted!"){
      toast.success("Item Removed Successfully!")
    }
  }

  async function RemoveAll() {
    let response = await axios.post("http://localhost:3001/removeAll")
    if(response.data === "Deleted!"){
      toast.success("Cart Cleared Successfully!")
    }
  }
  // const openRazorpay = (data) => {
  //   let options = {
  //     "key": "rzp_test_76e4ieVsAHAdjT",
  //     "one_click_checkout": true,
  //     "amount":data.amount * 100,
  //     "name": "CPC Canteen",
  //     "order_id": data.id,
  //     "show_coupons": true,
  //     "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  //     handler:function (response){
  //       RemoveAll()
  //     }
  //   }
  //   let rzp1 = new window.Razorpay(options);
  //   rzp1.open()
  // }
  async function handlePayment() {
    // let response = await axios.post("https://cpc-canteen-management-system.onrender.com/payment", { amount })
    // console.log(response.data)
    // openRazorpay(response.data)
  }


  return (
    <>
      <Header />
      {(items.length > 0 && user_id) ?
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
              {items.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    {/* eslint-disable-next-line*/}
                    <td className='w-1/6 h-[10rem]'><img src={item.itemimg} alt="Item Image" className='object-contain' /></td>
                    <td>{item.name}</td>
                    <td>Rs. {item.price}</td>
                    <td><button className='px-2 py-2 bg-red-600 hover:bg-red-800 ease-in-out transition duration-200' onClick={() => {
                      RemoveItem(item._id)
                    }}>Remove</button></td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th className='px-4 py-3 text-center text-2xl'>Total</th>
                <th className='text-center py-3 px-4 text-2xl'>Rs. {items.reduce((total, item) =>
                  total + (item.price)
                  , 0)}</th>
                <th className='text-center py-3'><button className='px-2 py-2 bg-red-600 hover:bg-red-800 ease-in-out transition duration-200' onClick={() => {
                  RemoveAll()
                }}>Clear Cart</button></th>

              </tr>
            </thead>
          </Table>
          <div className='flex items-center justify-center my-5'>
            <button className='flex items-center justify-center bg-blue-500 text-white py-3 px-3 text-2xl hover:bg-blue-800 ease-in-out transition duration-200 rounded-lg md:text-xl sm:text-[1rem]' onClick={handlePayment}>Proceed to Payment</button>
          </div>
        </div>

        :
        <div className='flex flex-col justify-center items-center min-h-screen'>
          <div className='text-4xl text-center items-center flex justify-center my-4'>
            Your Cart is Empty. Shop Now!
          </div>
          <button className='px-4 py-2 bg-green-500 mb-3 hover:bg-green-700'><Link to="/home" className="text-white">Back to Home Page</Link></button>
        </div>
      }
      <Footer />
    </>
  )
}
