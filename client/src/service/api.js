import axios from "axios";

const URL = "http://localhost:8012";

export const addUser = async (data) => {
    try{
      return await axios.post(`${URL}/add`, data)
    }
    catch(error){
        console.log("Error while calling add User Api ", error)
    }
}


export const getUser = async () => {
  try{
   return await axios.get(`${URL}/all`)
  } catch(error){
       console.log("Error while calling getUsers API ",error )
  }
}


export const getOneUser = async (id) => {
  try{
 return await axios.get(`${URL}/${id}`)
  } catch(error){
    console.log("error while calling user details ", error)
  }
}


export const editUser = async (user, id) => {
  try{
     return await axios.post(`${URL}/${id}`, user)
  } catch(error){
    console.log("Error while calling edit user api ", error)
  }
}

export const deleteUser = async (id) => {
  try{
    return await axios.delete(`${URL}/${id}`)
  } catch(error) {
    console.log("error while calling delete api ",  error)
  }
}