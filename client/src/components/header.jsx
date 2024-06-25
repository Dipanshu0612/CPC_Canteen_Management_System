import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink as Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function Header() {
  let [menuicon, changemenuicon] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () => sessionStorage.clear();
  const user_id = sessionStorage.getItem('user_id');
    useEffect(() => {
      axios.post('http://localhost:3001/getUser', { user_id })
      .then((res) => {
        setUser(res.data);
      })
      // console.log(user);
    },[user_id]);

  return (
    <>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hello, {user.first_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-2 flex justify-between w-100" controlId="exampleForm.ControlInput1">
                <div>
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  value={user.first_name + " " + user.last_name}
                  disabled           
                />
                </div>
                <div>
                <Form.Label>User ID</Form.Label>
                <Form.Control
                  type="text"
                  value={user.user_id}
                  disabled           
                />
                </div>
              </Form.Group>
              <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={user.email_id}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-2 flex justify-between w-100 gap-2" controlId="exampleForm.ControlInput1">
                <div>
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  value={user.mobile_no}
                  disabled
                  
                />
                </div>
                <div>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  value={user.age}
                  disabled           
                />
                </div>
                <div>
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  value={user.gender}
                  disabled           
                />
                </div>
                </Form.Group>
                <Form.Group className="mb-2 gap-4 flex w-100" controlId="exampleForm.ControlInput1">
                <div>
                <Form.Label>Rank</Form.Label>
                <Form.Control
                  type="text"
                  value={user.position}
                  disabled           
                />
                </div>
                <div>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={user.address}
                  disabled           
                />
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleLogout}><Link to='/' className="no-underline text-white">Logout</Link></Button>
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
