import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() =>{
    const userID = localStorage.getItem("userID");
  
  }, [])
  const handleLogin = async () => {
    const response = await axios.post(
      "http://localhost:3001/api/v1/auth/login",
      { email, password }
    );
    if (response.status == 400) {
      alert("Incorrect Password!!");
    } else {
      console.log("This is the API response: ",response);
      localStorage.setItem("userToken", response.data.userToken)
     // navigate("/dashboard");
    }
  };
  return (
    <div className="Login__mainContainer">
      <div className="Login__leftContainer"></div>
      <div className="Login__rightContainer">
        <div className="Login__rightContainer__inputContainer">
          <h4 className="Login__title">Login</h4>
          <div className="Login__inputs">
            <input
              placeholder="Email"
              type="text"
              aria-label="Email "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              placeholder="Password"
              type="password"
              aria-label="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <a href="" className="Login__forgotPassword">
              Forgot Password?
            </a>
          </div>
          <button className="Login__LoginButton" onClick={handleLogin}>
            Login
          </button>
          <p className="Login__signupPrompt">
            Don't have an account? <a href="/signup">Signup</a>
          </p>
        </div>
      </div>
    </div>
  );
}
