import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
  
let navigate = useNavigate();
const {id}=useParams();
useEffect(()=>{
  loadUser();
},[])

const [user, setUser] = useState({
        userId:null,
        username: "",
         email: "", 
        designation: ""
});

const{ userId,username,email,designation}=user;

const onInputChange = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value });
};

const onSubmit = async (e) => {
  console.log(e)
  console.log(id)
  console.log(user)
  e.preventDefault();
 const update= await axios.put(`http://localhost:8082/api/users/${id}`, user).then((res)=>{console.log(res)
  
 })
 .catch((err)=>console.log(err));
 console.log(update);
  navigate("/");
}
const loadUser=async()=>{
  const result=await axios.get(`http://localhost:8082/api/users/${id}`);
  setUser(result.data);
}
const handleCancel=()=>{
  navigate("/");
}
return (
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4"> update User</h2>

        <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="id" className="form-label">
            UserID
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your id"
              name="userId"
               value={userId || ''}
              onChange={(e) => onInputChange(e)}
              readOnly
            />
          </div>
        

          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your username"
              name="username"
              value={username || ''}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              E-mail
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your e-mail address"
              name="email" 
              value={email || ''}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="designation" className="form-label">
            designation
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your designation"
              name="designation" 
              value={designation || ''}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary ">
            Submit
          </button>
          <button className="btn btn-outline-danger mx-2" onClick={()=>handleCancel()}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
