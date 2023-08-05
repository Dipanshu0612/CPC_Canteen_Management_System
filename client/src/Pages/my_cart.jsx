import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function My_Cart() {
  return (
    <>
    <Header />
      <div>
        <div className='min-h-screen text-4xl text-center items-center flex justify-center'>
          Your Cart is Empty. Shop Now!
        </div>
      </div>
    <Footer />
    </>
  )
}
