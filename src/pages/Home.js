import React, { useEffect, useState } from 'react'
import axios from "axios";

import { useNavigate } from 'react-router-dom';

export default function Home() {
  let navigate=useNavigate();
  
  const [user,setuser]=useState([])
  useEffect(()=>{
    console.log("hi karthi")
    loadUser();
  },[])
  const loadUser=async()=>{
    const result=await axios.get("http://localhost:8082/api/users");
  setuser(result.data)
  }
  const DeleteUser=async(id)=>{
    await axios.delete(`http://localhost:8082/api/users/${id}`);
    loadUser();
  }
  const handleEdit=(id)=>{
   navigate(`/edit/${id}`)
  }
  const handleView=(id)=>{
    navigate(`/view/${id}`)
  }
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table table-striped border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Designation</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        user.map((user,index)=>(
            <tr key={index}>
            <th scope="row" >{index+1}</th>
            <td>{user.userId}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.designation}</td>
            <td>
                <button className='btn btn-primary mx-2' onClick={()=>handleView(user.userId)}>view</button>
                <button className='btn btn-secondary mx-2'
                  onClick={()=>handleEdit(user.userId)}
                > edit</button>
                {/* <button  className='btn btn-primary mx-2' onClick={(e)=>handleUpdate(e)}>update</button> */}
                <button className='btn btn-danger mx-2' onClick={()=>DeleteUser(user.userId)}>delete</button>
            </td>
          </tr>
        ))
    }
  
   
  </tbody>
</table>
        </div>

    </div>
  )
}
