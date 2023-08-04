import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from "axios";

export default function Inventory() {

  const [vehicle_data,setVehicleData]=useState([])
  const [clothes_data,setClothesData]=useState([])
  const [electronics_data,setElectronicsData]=useState([])
  const [health_data,setHealtData]=useState([])
  const [medicine_data,setMedicineData]=useState([])
  const [food_data,setFoodData]=useState([])
  const [sports_data,setSportsData]=useState([])

  useEffect(()=>{
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
    <div className=''>
      <h1 className='font-bold text-center mb-5 mt-2'>Inventory of CPC</h1>
      <div>
      <h3 className='font-semibold text-center'>Vehicles</h3>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Product Name</th>
          <th>Company Name</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {vehicle_data.map((vehicle,index) => {
            return(
              <tr>
                <td>{index+1}</td>
                <td>{vehicle.vehicle_name}</td>
                <td>{vehicle.company_name}</td>
                <td>{vehicle.vehicle_type}</td>
                <td>{vehicle.price}</td>
                <td>{vehicle.quantity}</td>
              </tr>
            )
        })}
      </tbody>
      </Table>
      <h3 className='font-semibold text-center'>Food Items</h3>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Product Name</th>
          <th>Company Name</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {food_data.map((food,index) => {
            return(
              <tr>
                <td>{index+1}</td>
                <td>{food.item_name}</td>
                <td>{food.company_name}</td>
                <td>{food.diet_type}</td>
                <td>{food.price}</td>
                <td>{food.quantity}</td>
              </tr>
            )
        })}
      </tbody>
      </Table>
      <h3 className='font-semibold text-center'>Clothes</h3>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Product Name</th>
          <th>Company Name</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {clothes_data.map((cloth,index) => {
            return(
              <tr>
                <td>{index+1}</td>
                <td>{cloth.item_name}</td>
                <td>{cloth.company_name}</td>
                <td>{cloth.size}</td>
                <td>{cloth.price}</td>
                <td>{cloth.quantity}</td>
              </tr>
            )
        })}
      </tbody>
      </Table>
      <h3 className='font-semibold text-center'>Electronics and Home Appliances</h3>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Product Name</th>
          <th>Company Name</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {electronics_data.map((elec,index) => {
            return(
              <tr>
                <td>{index+1}</td>
                <td>{elec.item_name}</td>
                <td>{elec.company_name}</td>
                <td>{elec.item_type}</td>
                <td>{elec.price}</td>
                <td>{elec.quantity}</td>
              </tr>
            )
        })}
      </tbody>
      </Table>
      <h3 className='font-semibold text-center'>HealthCare Items</h3>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Product Name</th>
          <th>Company Name</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {health_data.map((h,index) => {
            return(
              <tr>
                <td>{index+1}</td>
                <td>{h.item_name}</td>
                <td>{h.company_name}</td>
                <td>{h.item_type}</td>
                <td>{h.price}</td>
                <td>{h.quantity}</td>
              </tr>
            )
        })}
      </tbody>
      </Table>
      <h3 className='font-semibold text-center'>Medicines</h3>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Product Name</th>
          <th>Company Name</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {medicine_data.map((med,index) => {
            return(
              <tr>
                <td>{index+1}</td>
                <td>{med.medicine_name}</td>
                <td>{med.company_name}</td>
                <td>{med.medicine_type}</td>
                <td>{med.price}</td>
                <td>{med.quantity}</td>
              </tr>
            )
        })}
      </tbody>
      </Table>
      <h3 className='font-semibold text-center'>Sports Items</h3>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Product Name</th>
          <th>Company Name</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {sports_data.map((sport,index) => {
            return(
              <tr>
                <td>{index+1}</td>
                <td>{sport.item_name}</td>
                <td>{sport.company_name}</td>
                <td>{sport.item_type}</td>
                <td>{sport.price}</td>
                <td>{sport.quantity}</td>
              </tr>
            )
        })}
        
      </tbody>
    </Table>
      </div>

    </div>
    <Footer />
    </>
  )
}
