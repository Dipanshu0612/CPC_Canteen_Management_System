import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
  const [vehicle_data, setVehicleData] = useState([])
  const [clothes_data, setClothesData] = useState([])
  const [electronics_data, setElectronicsData] = useState([])
  const [health_data, setHealtData] = useState([])
  const [medicine_data, setMedicineData] = useState([])
  const [food_data, setFoodData] = useState([])
  const [sports_data, setSportsData] = useState([])

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
                  <Button variant="primary">View Item</Button>
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
                  <Button variant="primary">View Item</Button>
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
                  <Button variant="primary">View Item</Button>
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
                  <Button variant="primary">View Item</Button>
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
                  <Button variant="primary">View Item</Button>
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
                  <Button variant="primary">View Item</Button>
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
                  <Button variant="primary">View Item</Button>
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
