import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handelLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // submit function

  const handelLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      const { success, message } = response.data;

      if (success) {
        console.log("Login success");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log("Login Error ", error);
    }
    setLoginData({
        username: "",
        password: "",
    })
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handelLoginSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          required
          onChange={handelLoginChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          required
          onChange={handelLoginChange}
        />
        <button type="submit">Login</button>
        <p>
          Not Registered yet?
          <Link to="/register">Register Here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
