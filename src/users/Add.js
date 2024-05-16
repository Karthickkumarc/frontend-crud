
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Add() {

let navigate = useNavigate();

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

const handleCancel=()=>{
  navigate("/");
}


const onSubmit = async (e) => {
  e.preventDefault();
  await axios.post("http://localhost:8082/api/users", user);
  // navigate("/");
};

return (
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Register User</h2>

        <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="id" className="form-label">
              Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your id"
              name="userId"
               value={userId}
              onChange={(e) => onInputChange(e)}
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
              value={username}
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
              value={email}
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
              value={designation}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <button className="btn btn-outline-danger mx-2" onClick={handleCancel()}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  </div>

  )
}
