import React, { useEffect, useState } from 'react'
import { editUser, getOneUser } from '../service/api'
import {useLocation, useNavigate, useParams} from "react-router-dom"


const data = {
    name:"",
    email:"",
    username:"",
    phone:""
}

const EditUser = () => {

  const navigate = useNavigate();
  const  { id } = useParams()
  
  const loadUserDetails = async () => {
    const response = await getOneUser(id)
    setUser(response.data)
  }

  useEffect(() => {
    loadUserDetails()
  }, [])

  

const [user, setUser] = useState(data)

const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value)
    setUser({...user, [e.target.name]:e.target.value})
    console.log(user)
}

const editUserDetails = async () => {
  await editUser(user, id);
  navigate("/all")
}



  return (
    <div className=''>
        <form className='flex flex-col mt-10 m-auto w-1/3'>
            <h1 className='text-2xl mb-5'> Edit User</h1>
       <input onChange={(e) => onValueChange(e)} input="text" name='name' placeholder='Name' className='border border-b-gray-200 mb-5 border-gray-50 px-2' value={user.name}></input>
       <input onChange={(e) => onValueChange(e)} input="text" name='username' placeholder='User Name' className='border border-b-gray-200 mb-5 border-gray-50 px-2' value={user.username}></input>
       <input onChange={(e) => onValueChange(e)} input="text" name='email' placeholder='Email' className='border border-b-gray-200 mb-5 border-gray-50 px-2' value={user.email}></input>
       <input onChange={(e) => onValueChange(e)} input="text" name='phone' placeholder='Phone Number' className='border border-b-gray-200 mb-5 border-gray-50 px-2' value={user.phone}></input>
       <button onClick={editUserDetails} className='border text-xl bg-blue-500 text-white hover:bg-blue-700 rounded-lg mt-2 font-semibold'>Edit</button>
        </form>
    </div>
  )
}

export default EditUser