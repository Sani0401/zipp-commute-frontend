import React from 'react'
import './Dashboard.css'
import Components from '../../Exports/Components'

function Dashboard() {
  return (
    <div className='Dashboard__mainContainer'>
      <Components.SideBar />
      <div className='Dashboard__content'>
        <Components.Header />
        <div className='Dashboard__displayCards'>
          <div className='Dashboard__searchEmployees'>
            <input type="text" placeholder='Search Employees' />
            <button>Search</button>
          </div>
          <div className='Dashboard__dataCards'>
            <Components.DataCards typeOfData="Number of Users" dataInNumber="300+" percentage="10%" color="green"/>
            <Components.DataCards typeOfData="Number of Rides" dataInNumber="300+" percentage="10%" color="red" />
            <Components.DataCards typeOfData="Number of Drivers" dataInNumber="300+" percentage="10%" color="green"/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
