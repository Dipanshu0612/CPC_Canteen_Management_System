import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

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
  const [curr_item,setCurrItem]=useState({
    item_name:"",
    company_name:"",
    item_type:"",
    item_color:"",
    quantity:0,
    price:0,
    item_img:"",
    item_desc:"",
    item_full:"",
    weight:""
  })

  function handleShow(breakpoint) {
    setFullscreen(true);
    setShow(true);
  }

  let {name,cname,itype,icolor,quan,price,itemimg,itemdesc,fulldet,weight}=curr_item;
  console.log(name,cname,itype,icolor,quan,price,itemimg,itemdesc,fulldet,weight)

  useEffect(() => {
    axios.get('http://localhost:3001/getVehicles')
      .then(vehicles => setVehicleData(vehicles.data))
      .catch(err => console.log(err))
    axios.get('http://localhost:3001/getClothes')
      .then(clothes => setClothesData(clothes.data))
      .catch(err => console.log(err))
    axios.get('http://localhost:3001/getElectronics')
      .then(electronics => setElectronicsData(electronics.data))
      .catch(err => console.log(err))
    axios.get('http://localhost:3001/getHealth')
      .then(health => setHealtData(health.data))
      .catch(err => console.log(err))
    axios.get('http://localhost:3001/getMedicine')
      .then(medicine => setMedicineData(medicine.data))
      .catch(err => console.log(err))
    axios.get('http://localhost:3001/getFood')
      .then(food => setFoodData(food.data))
      .catch(err => console.log(err))
    axios.get('http://localhost:3001/getSports')
      .then(sports => setSportsData(sports.data))
      .catch(err => console.log(err))
  },[])


  return (
    <>
      <Header />


      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} className='my-modal'>
        <Modal.Header closeButton>
          <Modal.Title>{}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='flex'>
            <div className='w-1/2'>
              <img src={itemimg} alt="Item-Image" className='px-8 py-2 object-contain'/>
            </div>
            <div className='w-1/2 flex flex-col'>
              <h1 className='px-3 text-[3rem]'>{name}</h1>
              <h5 className='px-3'>{itemdesc}</h5>
              <h5 className='px-3'>Brand : {cname}</h5>
              <h5 className='px-3'>Item-Type : {itype}</h5>
              <h5 className='px-3'>Colour : {icolor || "-----------"}</h5>
              <h5 className='px-3'>Item-Type : {itype}</h5>
              <h5 className='px-3'>Weight : {weight || "-----------"}</h5>
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
                <Card.Img variant="top" src={food.item_img} className='h-[10rem] object-contain w-full'/>
                <Card.Body className=''>
                  <Card.Title className='flex'>{food.item_name}</Card.Title>
                  <Card.Text className='flex flex-col'>
                    <h4 className='text-[1rem]'>{food.company_name}</h4>
                    <h5>Rs.{food.price}/-</h5>
                  </Card.Text>
                  <Button variant="primary" onClick={()=>{ 
                    handleShow()
                    setCurrItem({
                      name:food.item_name,
                      cname:food.company_name,
                      itype:food.diet_type,
                      weight:food.item_weight,
                      quan:food.quantity,
                      price:food.price,
                      itemimg:food.item_img,
                      itemdesc:food.item_desc,
                      fulldet:food.item_details
                  })
                  }
                    }>View Item</Button>
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
                <Card.Img variant="top" src={cloth.item_img} className='h-[10rem] object-contain w-full'/>
                <Card.Body className=''>
                  <Card.Title className='flex'>{cloth.item_name}</Card.Title>
                  <Card.Text className='flex flex-col'>
                    <h4 className='text-[1rem]'>{cloth.company_name}</h4>
                    <h5>Rs.{cloth.price}/-</h5>
                  </Card.Text>
                  <Button variant="primary" onClick={()=>{ 
                  handleShow()
                  setCurrItem({
                      name:cloth.item_name,
                      cname:cloth.company_name,
                      itype:cloth.diet_type,
                      weight:cloth.item_weight,
                      quan:cloth.quantity,
                      price:cloth.price,
                      itemimg:cloth.item_img,
                      itemdesc:cloth.product_details,
                      fulldet:cloth.item_details,
                      icolor:cloth.color
                  })
                }
                  }>View Item</Button>
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
                <Card.Img variant="top" src={elec.item_img} className='h-[10rem] object-contain w-full'/>
                <Card.Body className=''>
                  <Card.Title className='flex'>{elec.item_name}</Card.Title>
                  <Card.Text className='flex flex-col'>
                    <h4 className='text-[1rem]'>{elec.company_name}</h4>
                    <h5>Rs.{elec.price}/-</h5>
                  </Card.Text>
                  <Button variant="primary" onClick={()=>{ 
                  handleShow()
                  setCurrItem({
                      name:elec.item_name,
                      cname:elec.company_name,
                      itype:elec.item_type,
                      weight:elec.item_weight,
                      quan:elec.quantity,
                      price:elec.price,
                      itemimg:elec.item_img,
                      itemdesc:elec.description,
                      fulldet:elec.item_details,
                      icolor:elec.item_colour
                  })
                }
                  }>View Item</Button>
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
                <Card.Img variant="top" src={vehicle.vehicle_img} className='h-[10rem] object-cover w-full'/>
                <Card.Body className=''>
                  <Card.Title className='flex'>{vehicle.vehicle_name}</Card.Title>
                  <Card.Text className='flex flex-col'>
                    <h4 className='text-[1rem]'>{vehicle.company_name}</h4>
                    <h5>Rs.{vehicle.price}/-</h5>
                  </Card.Text>
                  <Button variant="primary" onClick={()=>{ 
                  handleShow()
                  setCurrItem({
                      name:vehicle.vehicle_name,
                      cname:vehicle.company_name,
                      itype:vehicle.vehicle_type,
                      weight:vehicle.item_weight,
                      quan:vehicle.quantity,
                      price:vehicle.price,
                      itemimg:vehicle.vehicle_img,
                      itemdesc:vehicle.vehicle_desc,
                      fulldet:vehicle.full_details
                  })
                }
                  }>View Item</Button>
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
                <Card.Img variant="top" src={health.item_img} className='h-[10rem] object-contain w-full'/>
                <Card.Body className=''>
                  <Card.Title className='flex'>{health.item_name}</Card.Title>
                  <Card.Text className='flex flex-col'>
                    <h4 className='text-[1rem]'>{health.company_name}</h4>
                    <h5>Rs.{health.price}/-</h5>
                  </Card.Text>
                  <Button variant="primary" onClick={()=>{ 
                  handleShow()
                  setCurrItem({
                      name:health.item_name,
                      cname:health.company_name,
                      itype:health.item_type,
                      weight:health.item_weight,
                      quan:health.quantity,
                      price:health.price,
                      itemimg:health.item_img,
                      itemdesc:health.item_desc,
                      fulldet:health.item_details
                  })
                }
                  }>View Item</Button>
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
                <Card.Img variant="top" src={sport.item_img} className='h-[10rem] object-contain w-full'/>
                <Card.Body className=''>
                  <Card.Title className='flex'>{sport.item_name}</Card.Title>
                  <Card.Text className='flex flex-col'>
                    <h4 className='text-[1rem]'>{sport.company_name}</h4>
                    <h5>Rs.{sport.price}/-</h5>
                  </Card.Text>
                  <Button variant="primary" onClick={()=>{ 
                  handleShow()
                  setCurrItem({
                      name:sport.item_name,
                      cname:sport.company_name,
                      itype:sport.item_type,
                      weight:sport.item_weight,
                      quan:sport.quantity,
                      price:sport.price,
                      itemimg:sport.item_img,
                      itemdesc:sport.item_desc,
                      fulldet:sport.full_details,
                      icolor:sport.item_colour
                  })
                }
                  }>View Item</Button>
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
                <Card.Img variant="top" src={med.item_img} className='h-[10rem] object-contain w-full'/>
                <Card.Body className=''>
                  <Card.Title className='flex'>{med.medicine_name}</Card.Title>
                  <Card.Text className='flex flex-col'>
                    <h4 className='text-[1rem]'>{med.company_name}</h4>
                    <h5>Rs.{med.price}/-</h5>
                  </Card.Text>
                  <Button variant="primary" onClick={()=>{ 
                  handleShow()
                  setCurrItem({
                      name:med.medicine_name,
                      cname:med.company_name,
                      itype:med.medicine_type,
                      weight:med.item_weight,
                      quan:med.quantity,
                      price:med.price,
                      itemimg:med.item_img,
                      itemdesc:med.description,
                      fulldet:med.item_details
                  })
                }
                  }>View Item</Button>
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
