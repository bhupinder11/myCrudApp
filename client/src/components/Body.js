import React from 'react'
import AddUser from './AddUser'
import AllUser from './AllUser'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {
  return (
    <div>
    <Header/>
    <Outlet/>
    </div>
  )
}

export default Body