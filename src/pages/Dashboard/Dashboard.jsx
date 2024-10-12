import React from 'react'
import './Dashboard.css'
import Components from '../../Exports/Components'

function Dashboard() {
  return (
    <div className='Dashboard__mainContainer'>
      <Components.SideBar />
      <div className='Dashboard__content'>
        <Components.Header />
        {/* Add your other components below the header */}
      </div>
    </div>
  )
}

export default Dashboard
