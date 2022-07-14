import React, { useState } from "react";
import "./Login.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { signIn } from "./../../Redux/Actions/authAction";
import { useDispatch } from 'react-redux'
function Login() {
  const dispatch = useDispatch() 
  const [userInfo, setuserInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contact-us");
  };
  const handleChange = (e) => {
    setuserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(userInfo, navigate)); 
    setuserInfo({ email: "", password: "" });
  };

  return (
    <div className="body-container">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="title">Welcome</h1>
            <input
              onChange={handleChange}
              className="input"
              type="email"
              placeholder="Email"
              required
              id="email"
              value={userInfo.email}
            />
            <input
              onChange={handleChange}
              className="input"
              type="password"
              placeholder="Mot de passe"
              required
              id="password"
              value={userInfo.password}
            />
            <button className="button button-connect" type="submit">
              Connect
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="title tiltle-connect">
                If you do not have an account contact admin
              </h1>
              <Button
                variant="contained"
                style={{ marginLeft: "80px" }}
                endIcon={<SendIcon />}
                onClick={handleNavigate}
              >
                Contact admin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
