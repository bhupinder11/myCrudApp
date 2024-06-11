import React, { useEffect, useState } from "react";
import { deleteUser, getUser } from "../service/api";
import { Link, useNavigate } from "react-router-dom";

const AllUser = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    let response = await getUser();
    setUsers(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserDetails = async(id) => {
    await deleteUser(id);
    getAllUsers();
  }

  
  return (
    <div>
      <table className="w-11/12 h-full m-auto mt-8  p-2 border-separate border-spacing-y-4">

        <thead className=" border-b-2 border-gray-200">
          <tr className="bg-black text-white text-xl">
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>

        <tbody className=" border-b-2 border-gray-200 font-semibold">
          {users.map((user) => (
            <tr className="hover:bg-gray-100 ">
              <td>{user._id}</td>
              <th>{user.name}</th>
              <th>{user.username}</th>
              <th>{user.email}</th>
              <th>{user.phone}</th>
              <th className="">
                <Link to={`/edit/${user._id}`}><button className="bg-blue-400 border border-blue-500 hover:bg-blue-500 rounded-lg px-2 mr-5 text-white" >Edit</button></Link>
                <button className="bg-blue-400 border border-blue-500 hover:bg-blue-500 rounded-lg px-2 text-white" onClick={() => deleteUserDetails(user._id)}>Delete</button>
              </th>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
