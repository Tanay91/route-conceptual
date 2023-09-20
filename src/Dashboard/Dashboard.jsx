import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex'>
    
      <div className='w-[20%] bg-red-400'>
        <ul>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
            <li>
            <Link to="/dashboard/profile">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/editprofile">Edit Profile</Link>
            </li>
          </li>
        </ul>
      </div>
      <div><Outlet></Outlet></div>
    </div>
  )
}

export default Dashboard
