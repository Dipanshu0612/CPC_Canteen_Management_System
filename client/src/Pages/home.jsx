import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

export default function Home() {
  const [vehicle_data, setVehicleData] = useState([])
  const [clothes_data, setClothesData] = useState([])
  const [electronics_data, setElectronicsData] = useState([])
  const [health_data, setHealtData] = useState([])
  const [medicine_data, setMedicineData] = useState([])
  const [food_data, setFoodData] = useState([])
  const [sports_data, setSportsData] = useState([])
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [curr_item, setCurrItem] = useState({
    item_name: "",
    company_name: "",
    item_type: "",
    item_color: "",
    quantity: 0,
    price: 0,
    item_img: "",
    item_desc: "",
    item_full: "",
    weight: ""
  })


  function handleShow(breakpoint) {
    setFullscreen(true);
    setShow(true);
  }

  let { name, cname, itype, icolor, quan, price, itemimg, itemdesc, fulldet, weight } = curr_item;

  const addToCart = async (curr_item) => {
    let user_id = sessionStorage.getItem("user_id");
    if (!user_id) {
      toast.error("Please Login to Add Items to Cart!")
      return;
    }
    const response = await axios.post('https://cpc-canteen-management-system.onrender.com/addToCart', { user_id, curr_item });
    // console.log(response.data)
    toast.success("Item Inserted In Cart!")
  }
  useEffect(() => {
    axios.get('https://cpc-canteen-management-system.onrender.com/getVehicles')
      .then(vehicles => setVehicleData(vehicles.data))
      .catch(err => console.log(err))
    axios.get('https://cpc-canteen-management-system.onrender.com/getClothes')
      .then(clothes => setClothesData(clothes.data))
      .catch(err => console.log(err))
    axios.get('https://cpc-canteen-management-system.onrender.com/getElectronics')
      .then(electronics => setElectronicsData(electronics.data))
      .catch(err => console.log(err))
    axios.get('https://cpc-canteen-management-system.onrender.com/getHealth')
      .then(health => setHealtData(health.data))
      .catch(err => console.log(err))
    axios.get('https://cpc-canteen-management-system.onrender.com/getMedicine')
      .then(medicine => setMedicineData(medicine.data))
      .catch(err => console.log(err))
    axios.get('https://cpc-canteen-management-system.onrender.com/getFood')
      .then(food => setFoodData(food.data))
      .catch(err => console.log(err))
    axios.get('https://cpc-canteen-management-system.onrender.com/getSports')
      .then(sports => setSportsData(sports.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Header />


      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} className='my-modal'>
        <Modal.Header closeButton>
          <Modal.Title>{ }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='flex justify-center items-center sm:flex-col sm'>
            <div className='w-1/2'>
              {/*eslint-disable-next-line*/}
              <img src={itemimg} alt="Item-Image" className='px-8 py-2 object-contain flex items-center justify-center h-[30rem] md:h-[25rem] sm:h-[20rem] sm:px-4' />
            </div>
            <div className='w-1/2 flex flex-col'>
              <h1 className='px-3 text-[3rem] md:text-[1.5rem] sm:text-[1.2rem]'>{name}</h1>
              <h5 className='px-3 md:text-[1rem] sm:text-[0.8rem]'>{itemdesc}</h5>
              <h5 className='px-3 md:text-[1rem] sm:text-[0.8rem]'>Brand : {cname}</h5>
              <h5 className='px-3 md:text-[1rem] sm:text-[0.8rem]'>Item-Type : {itype}</h5>
              <h5 className='px-3 md:text-[1rem] sm:text-[0.8rem]'>Colour : {icolor || "-----------"}</h5>
              <h5 className='px-3 md:text-[1rem] sm:text-[0.8rem]'>Item-Type : {itype}</h5>
              <h5 className='px-3 md:text-[1rem] sm:text-[0.8rem]'>Weight : {weight || "-----------"}</h5>
              <h2 className='px-3 py-3 font-bold md:text-[2rem] sm:text-[1rem]'>Rs.{price}/-</h2>

              <button className='px-0 py-2 bg-green-500 mb-3 hover:bg-green-700 md:w-[35%] sm:w-[55%]' onClick={() => {
                addToCart(curr_item)
              }}>Add to Cart</button>
              <button className='px-0 py-2 bg-green-500 mb-3 hover:bg-green-700 md:px-2 md:py-1 text-center md:w-[35%] sm:w-[55%]'><a href={fulldet} className=' no-underline text-white px-[10rem] text-center md:px-2 sm:px-2 '>More Details</a></button>

            </div>

          </div>

        </Modal.Body>
      </Modal>


      <div className='flex flex-col bg-slate-50'>

        <div className='flex flex-col bg-slate-200 my-3'>
          <h3 className='font-semibold px-4 pt-2'>Food Items and Groceries</h3>
          <div className='flex gap-4 mx-1 my-1 overflow-x-scroll px-3 py-2'>
            {food_data.map(food => {
              return (
                <div className='flex justify-center items-center cursor-pointer'>
                  <Card className='w-[18rem]'>
                    <Card.Img variant="top" src={food.item_img} className='h-[10rem] object-contain w-full' />
                    <Card.Body className=''>
                      <Card.Title className='flex' onClick={() => {
                        handleShow()
                        setCurrItem({
                          name: food.item_name,
                          cname: food.company_name,
                          itype: food.diet_type,
                          weight: food.item_weight,
                          quan: food.quantity,
                          price: food.price,
                          itemimg: food.item_img,
                          itemdesc: food.item_desc,
                          fulldet: food.item_details
                        })
                      }
                      }>{food.item_name}</Card.Title>
                      <Card.Text className='flex flex-col'>
                        <h4 className='text-[1rem]'>{food.company_name}</h4>
                        <h5>Rs.{food.price}/-</h5>
                      </Card.Text>
                      <Button variant="primary" onClick={() => {
                        const updatedItem = {
                          name: food.item_name,
                          cname: food.company_name,
                          itype: food.diet_type,
                          weight: food.item_weight,
                          quan: food.quantity,
                          price: food.price,
                          itemimg: food.item_img,
                          itemdesc: food.item_desc,
                          fulldet: food.item_details
                        }
                        setCurrItem(updatedItem);
                        addToCart(updatedItem);
                      }}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>


        <div className='flex flex-col bg-slate-200 my-3'>
          <h3 className='font-semibold px-4 pt-2'>Clothes</h3>
          <div className='flex gap-4 mx-1 my-1 overflow-x-scroll px-3 py-2'>
            {clothes_data.map(cloth => {
              return (
                <div className='flex justify-center items-center cursor-pointer'>
                  <Card className='w-[18rem]'>
                    <Card.Img variant="top" src={cloth.item_img} className='h-[10rem] object-contain w-full' />
                    <Card.Body className=''>
                      <Card.Title className='flex' onClick={() => {
                        handleShow()
                        setCurrItem({
                          name: cloth.item_name,
                          cname: cloth.company_name,
                          itype: cloth.diet_type,
                          weight: cloth.item_weight,
                          quan: cloth.quantity,
                          price: cloth.price,
                          itemimg: cloth.item_img,
                          itemdesc: cloth.product_details,
                          fulldet: cloth.item_details,
                          icolor: cloth.color
                        })
                      }
                      }>{cloth.item_name}</Card.Title>
                      <Card.Text className='flex flex-col'>
                        <h4 className='text-[1rem]'>{cloth.company_name}</h4>
                        <h5>Rs.{cloth.price}/-</h5>
                      </Card.Text>
                      <Button variant="primary" onClick={() => {
                        const updatedItem = {
                          name: cloth.item_name,
                          cname: cloth.company_name,
                          itype: cloth.diet_type,
                          weight: cloth.item_weight,
                          quan: cloth.quantity,
                          price: cloth.price,
                          itemimg: cloth.item_img,
                          itemdesc: cloth.product_details,
                          fulldet: cloth.item_details,
                          icolor: cloth.color
                        }
                        setCurrItem(updatedItem)
                        addToCart(updatedItem)
                      }}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>


        <div className='flex flex-col bg-slate-200 my-3'>
          <h3 className='font-semibold px-4 pt-2'>Electronics and Home Applinaces</h3>
          <div className='flex gap-4 mx-1 my-1 overflow-x-scroll px-3 py-2'>
            {electronics_data.map(elec => {
              return (
                <div className='flex justify-center items-center cursor-pointer'>
                  <Card className='w-[18rem]'>
                    <Card.Img variant="top" src={elec.item_img} className='h-[10rem] object-contain w-full' />
                    <Card.Body className=''>
                      <Card.Title className='flex' onClick={() => {
                        handleShow()
                        setCurrItem({
                          name: elec.item_name,
                          cname: elec.company_name,
                          itype: elec.item_type,
                          weight: elec.item_weight,
                          quan: elec.quantity,
                          price: elec.price,
                          itemimg: elec.item_img,
                          itemdesc: elec.description,
                          fulldet: elec.item_details,
                          icolor: elec.item_colour
                        })
                      }
                      }>{elec.item_name}</Card.Title>
                      <Card.Text className='flex flex-col'>
                        <h4 className='text-[1rem]'>{elec.company_name}</h4>
                        <h5>Rs.{elec.price}/-</h5>
                      </Card.Text>
                      <Button variant="primary" onClick={() => {
                        const updatedItem = {
                          name: elec.item_name,
                          cname: elec.company_name,
                          itype: elec.item_type,
                          weight: elec.item_weight,
                          quan: elec.quantity,
                          price: elec.price,
                          itemimg: elec.item_img,
                          itemdesc: elec.description,
                          fulldet: elec.item_details,
                          icolor: elec.item_colour
                        };
                        setCurrItem(updatedItem)
                        addToCart(updatedItem)
                      }}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>


        <div className='flex flex-col bg-slate-200 my-3'>
          <h3 className='font-semibold px-4 pt-2'>Vehicles</h3>
          <div className='flex gap-4 mx-1 my-1 overflow-x-scroll px-3 py-2'>
            {vehicle_data.map(vehicle => {
              return (
                <div className='flex justify-center items-center cursor-pointer'>
                  <Card className='w-[18rem]'>
                    <Card.Img variant="top" src={vehicle.vehicle_img} className='h-[10rem] object-cover w-full' />
                    <Card.Body className=''>
                      <Card.Title className='flex' onClick={() => {
                        handleShow()
                        setCurrItem({
                          name: vehicle.vehicle_name,
                          cname: vehicle.company_name,
                          itype: vehicle.vehicle_type,
                          weight: vehicle.item_weight,
                          quan: vehicle.quantity,
                          price: vehicle.price,
                          itemimg: vehicle.vehicle_img,
                          itemdesc: vehicle.vehicle_desc,
                          fulldet: vehicle.full_details,
                          icolor: vehicle.vehicle_colour
                        })
                      }
                      }>{vehicle.vehicle_name}</Card.Title>
                      <Card.Text className='flex flex-col'>
                        <h4 className='text-[1rem]'>{vehicle.company_name}</h4>
                        <h5>Rs.{vehicle.price}/-</h5>
                      </Card.Text>
                      <Button variant="primary" onClick={() => {
                        const updatedItem = {
                          name: vehicle.vehicle_name,
                          cname: vehicle.company_name,
                          itype: vehicle.vehicle_type,
                          weight: vehicle.item_weight,
                          quan: vehicle.quantity,
                          price: vehicle.price,
                          itemimg: vehicle.vehicle_img,
                          itemdesc: vehicle.vehicle_desc,
                          fulldet: vehicle.full_details,
                          icolor: vehicle.vehicle_colour
                        }
                        setCurrItem(updatedItem)
                        addToCart(updatedItem)
                      }}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>


        <div className='flex flex-col bg-slate-200 my-3'>
          <h3 className='font-semibold px-4 pt-2'>Health Care</h3>
          <div className='flex gap-4 mx-1 my-1 overflow-x-scroll px-3 py-2'>
            {health_data.map(health => {
              return (
                <div className='flex justify-center items-center cursor-pointer'>
                  <Card className='w-[18rem]'>
                    <Card.Img variant="top" src={health.item_img} className='h-[10rem] object-contain w-full' />
                    <Card.Body className=''>
                      <Card.Title className='flex' onClick={() => {
                        handleShow()
                        setCurrItem({
                          name: health.item_name,
                          cname: health.company_name,
                          itype: health.item_type,
                          weight: health.item_weight,
                          quan: health.quantity,
                          price: health.price,
                          itemimg: health.item_img,
                          itemdesc: health.item_desc,
                          fulldet: health.item_details
                        })
                      }
                      }>{health.item_name}</Card.Title>
                      <Card.Text className='flex flex-col'>
                        <h4 className='text-[1rem]'>{health.company_name}</h4>
                        <h5>Rs.{health.price}/-</h5>
                      </Card.Text>
                      <Button variant="primary" onClick={() => {
                        const updatedItem = {
                          name: health.item_name,
                          cname: health.company_name,
                          itype: health.item_type,
                          weight: health.item_weight,
                          quan: health.quantity,
                          price: health.price,
                          itemimg: health.item_img,
                          itemdesc: health.item_desc,
                          fulldet: health.item_details
                        }
                        setCurrItem(updatedItem)
                        addToCart(updatedItem)
                      }}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>


        <div className='flex flex-col bg-slate-200 my-3'>
          <h3 className='font-semibold px-4 pt-2'>Sports Items</h3>
          <div className='flex gap-4 mx-1 my-1 overflow-x-scroll px-3 py-2'>
            {sports_data.map(sport => {
              return (
                <div className='flex justify-center items-center cursor-pointer'>
                  <Card className='w-[18rem]'>
                    <Card.Img variant="top" src={sport.item_img} className='h-[10rem] object-contain w-full' />
                    <Card.Body className=''>
                      <Card.Title className='flex' onClick={() => {
                        handleShow()
                        setCurrItem({
                          name: sport.item_name,
                          cname: sport.company_name,
                          itype: sport.item_type,
                          weight: sport.item_weight,
                          quan: sport.quantity,
                          price: sport.price,
                          itemimg: sport.item_img,
                          itemdesc: sport.item_desc,
                          fulldet: sport.full_details,
                          icolor: sport.item_colour
                        })
                      }
                      }>{sport.item_name}</Card.Title>
                      <Card.Text className='flex flex-col'>
                        <h4 className='text-[1rem]'>{sport.company_name}</h4>
                        <h5>Rs.{sport.price}/-</h5>
                      </Card.Text>
                      <Button variant="primary" onClick={() => {
                        const updatedItem = {
                          name: sport.item_name,
                          cname: sport.company_name,
                          itype: sport.item_type,
                          weight: sport.item_weight,
                          quan: sport.quantity,
                          price: sport.price,
                          itemimg: sport.item_img,
                          itemdesc: sport.item_desc,
                          fulldet: sport.full_details,
                          icolor: sport.item_colour
                        }
                        setCurrItem(updatedItem)
                        addToCart(updatedItem)
                      }}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>


        <div className='flex flex-col bg-slate-200 my-3'>
          <h3 className='font-semibold px-4 pt-2'>Medicines</h3>
          <div className='flex gap-4 mx-1 my-1 overflow-x-scroll px-3 py-2'>
            {medicine_data.map(med => {
              return (
                <div className='flex justify-center items-center cursor-pointer'>
                  <Card className='w-[18rem]'>
                    <Card.Img variant="top" src={med.item_img} className='h-[10rem] object-contain w-full' />
                    <Card.Body className=''>
                      <Card.Title className='flex' onClick={() => {
                        handleShow()
                        setCurrItem({
                          name: med.medicine_name,
                          cname: med.company_name,
                          itype: med.medicine_type,
                          weight: med.item_weight,
                          quan: med.quantity,
                          price: med.price,
                          itemimg: med.item_img,
                          itemdesc: med.description,
                          fulldet: med.item_details
                        })
                      }
                      }>{med.medicine_name}</Card.Title>
                      <Card.Text className='flex flex-col'>
                        <h4 className='text-[1rem]'>{med.company_name}</h4>
                        <h5>Rs.{med.price}/-</h5>
                      </Card.Text>
                      <Button variant="primary" onClick={() => {
                        const updatedItem = {
                          name: med.medicine_name,
                          cname: med.company_name,
                          itype: med.medicine_type,
                          weight: med.item_weight,
                          quan: med.quantity,
                          price: med.price,
                          itemimg: med.item_img,
                          itemdesc: med.description,
                          fulldet: med.item_details
                        }
                        setCurrItem(updatedItem)
                        addToCart(updatedItem)
                      }}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}
