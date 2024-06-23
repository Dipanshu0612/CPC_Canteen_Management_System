import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink as Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Header() {
  let [menuicon, changemenuicon] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    <>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className='flex flex-wrap justify-between items-center bg-gray-900 h-[4.5rem] sticky top-0 z-10 '>
        <div className="logo flex flex-wrap">
          <a href="/" className='flex flex-wrap justify-center items-center cursor-pointer font-semibold'><img src="https://upload.wikimedia.org/wikipedia/en/6/6e/Central_Police_Canteen_Logo.png" alt="" className='h-[3rem] mx-4 bg-gradient-to-t from-white to-gray-400 inline' /></a>
          <h4 className='flex text-white items-center mt-2'>CPC Canteen</h4>
        </div>

        {/* <div className='relative'>
          <input type="text" className='pr-[5rem] pl-2 py-1 rounded-md ml-2' placeholder='Search Items' disabled />
          <button className=''><AiOutlineSearch className='absolute right-2 bottom-[0.4rem] text-xl' /></button>
        </div> */}

        <div className="nav md:space-y-2" id='nav'>
          <ul className='flex flex-wrap justify-centre items-center mr-4 space-x-5'>
            <li className="text-white cursor-pointer py-[1.37rem] font-semibold "><Link to="/home" activeClassName='active'>Home</Link></li>
            <li className="text-white cursor-pointer py-[1.37rem] font-semibold " ><Link to="/my-cart" activeClassName='active'>My Cart <AiOutlineShoppingCart className='inline text-2xl' /></Link></li>
            <li className="text-white cursor-pointer py-[1.37rem] font-semibold" ><Link to="/inventory" activeClassName='active'>View Inventory</Link></li>
            <li className="text-white cursor-pointer py-[1.37rem] font-semibold" onClick={handleShow}><CgProfile className='text-2xl' /></li>
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
    </>
  )
}
