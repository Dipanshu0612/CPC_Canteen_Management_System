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
  })


  return (
    <>
      <Header />
      Hello
      <div className='flex flex-col'>

        <div className='flex w-full h-1/4 border border-black'>
          {vehicle_data.forEach(vehicle => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={vehicle.vehicle_img} />
                <Card.Body>
                  <Card.Title>{vehicle.vehicle_name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            )
          })}
        </div>

        <div className='flex w-full h-1/4 border border-black'>

        </div>

        <div className='flex w-full h-1/4 border border-black'>

        </div>

      </div>

      <Footer />
    </>
  )
}
