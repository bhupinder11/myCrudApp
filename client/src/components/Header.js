import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

const handleHome = () => {
     navigate("/")
}

const handleAll = () => {
  navigate("/all")
}

const handleAdd = () => {
  navigate("/add")
}

  return (
    <div className='w-screen bg-black h-300px flex'>

      <h1 onClick={handleHome}  className='text-white text-3xl p-5 cursor-pointer'>PlayerInfo</h1>
       <h1 onClick={handleAll} className='text-white text-3xl p-5 cursor-pointer'>All User</h1>
        <h1 onClick={handleAdd} className='text-white text-3xl p-5 cursor-pointer'>Add User</h1>
    </div>
  )
}

export default Header