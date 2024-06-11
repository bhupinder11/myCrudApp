import React, { useState } from 'react'
import { addUser } from '../service/api'
import {useNavigate} from "react-router-dom"


const data = {
    name:"",
    email:"",
    username:"",
    phone:""
}

const AddUser = () => {

  const navigate = useNavigate();

const [user, setUser] = useState(data)

const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value)
    setUser({...user, [e.target.name]:e.target.value})
    console.log(user)
}

const addUserDetails = async () => {
  await addUser(user);
  navigate("/all")
}

  return (
    <div className=''>
        <form className='flex flex-col mt-10 m-auto w-1/3'>
            <h1 className='text-2xl mb-5'> Add User</h1>
       <input onChange={(e) => onValueChange(e)} input="text" name='name' placeholder='Name' className='border border-b-gray-200 mb-5 border-gray-50 px-2'></input>
       <input onChange={(e) => onValueChange(e)} input="text" name='username' placeholder='User Name' className='border border-b-gray-200 mb-5 border-gray-50 px-2'></input>
       <input onChange={(e) => onValueChange(e)} input="text" name='email' placeholder='Email' className='border border-b-gray-200 mb-5 border-gray-50 px-2'></input>
       <input onChange={(e) => onValueChange(e)} input="text" name='phone' placeholder='Phone Number' className='border border-b-gray-200 mb-5 border-gray-50 px-2'></input>
       <button onClick={addUserDetails} className='border text-xl bg-blue-500 text-white hover:bg-blue-700 rounded-lg mt-2 font-semibold'>Submit</button>
        </form>
    </div>
  )
}

export default AddUser