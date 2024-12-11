import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {

    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
    })

    const handelRegistrationChange=(e)=>{
        const {name, value}=e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value,
        }))
    }
    const handelRegistrationSubmit= async(e)=>{
        e.preventDefault();

        try {
            const response=await axios.post('http://localhost:8000/register', formData);
            console.log(response.data);
            
        } catch (error) {
            console.log(error);
            
        }
        setFormData({
            username: '',
            password: '',
        })
    }
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handelRegistrationSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handelRegistrationChange}
          value={formData.username}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handelRegistrationChange}
          value={formData.password}
          required
        />
        <button type="submit">Register</button>
        <p>Already Register? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
