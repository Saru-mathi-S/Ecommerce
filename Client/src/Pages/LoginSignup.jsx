import React from "react";
import "./CSS/LoginSignup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext, useNavigate } from "react";
import { ShopContext } from "../Context/ShopContext";
const LoginSignup = () => {
  const {
    username,
    email,
    password,
    setUsername,
    setPassword,
    setEmail,
    login,
  } = useContext(ShopContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/registration", {
        email: email,
        pwd: password,
        fname: username,
      });

      console.log(response.data);
      login();
      alert("registered successfully");
    } catch (error) {
      alert("Error occured Try again");
      console.error("Error during registration:", error.message);
    }
  };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        <button onClick={handleRegister}>Continue</button>
        <p className="loginsignup-login">
          Already have an account1{" "}
          <Link to="/login">
            {" "}
            <span>Login here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
