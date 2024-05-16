import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom';
import axios from "axios";

export default function () {

    const {id}=useParams();

    const [user,setUser]=useState(
        {
            username:"",
            email:"",
            designation:""
        })
        useEffect(()=>{
            loaduser();
        },[])
        const loaduser =async()=>{
          const  result= await axios.get(`http://localhost:8082/api/users/${id}`);
            setUser(result.data)
        }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">View User Details</h2>
                    <div className="card">
                        <div className="card-header">
                            user Details id :{user.userId}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>username :</b>{user.username}
                                </li>
                                <li className='list-group-item'>
                                    <b>email :</b>{user.email}
                                </li>
                                <li className='list-group-item'>
                                    <b>designation :</b>{user.designation}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/" className="btn btn-secondary my-2 mx-4">Back to Home</Link>
                </div>
            </div>
        </div>
    )
}
