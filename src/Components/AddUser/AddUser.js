import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { addLoyer } from "../../Redux/Actions/AdminAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const styleListOfCases = {
  position: "absolute",
  left: "350px",
  top: "100px",
  width: "1300px",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

function AddUser() {
  const dispatch = useDispatch();

  const [SelectedFile, setSelectedFile] = useState(null);
  const [ok, setOk] = useState(false);
  const [userInfo, setuserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleInputChangeFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleChange = (e) => {
    setuserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    if (
      userInfo.firstName &&
      userInfo.lastName &&
      userInfo.email &&
      userInfo.password &&
      userInfo.phone &&
      SelectedFile
    ) {
      formData.append("firstName", userInfo.firstName);
      formData.append("lastName", userInfo.lastName);
      formData.append("email", userInfo.email);
      formData.append("password", userInfo.password);
      formData.append("phone", userInfo.phone);
      formData.append("SelectedFile", SelectedFile);
      if (dispatch(addLoyer(formData))) {
        toast("wait for adding your car to our list");
      }
      setTimeout(() => {
        /* navigate("/"); */
      }, 5000);
    } else {
      alert("fields are required");
    }
  };

  return (
    <>
      <ToastContainer style={{ marginTop: "80px" }} />
      <form onSubmit={handleSubmit}>
        <div style={styleListOfCases}>
          <Box
            /* component="form" */
            sx={{
              "& .MuiTextField-root": { m: 1, width: "45ch" },
            }}
            autoComplete="off"
            noValidate
          >
            <div>
              <TextField
                label="First -name"
                required
                value={userInfo.firstName}
                onChange={handleChange}
                id="firstName"
              />
            </div>
            <div>
              <TextField
                label="Last-name"
                value={userInfo.lastName}
                onChange={handleChange}
                id="lastName"
                required
              />
            </div>
            <div>
              <TextField
                label="Email"
                required
                value={userInfo.email}
                onChange={handleChange}
                id="email"
              />
            </div>
            <div>
              <TextField
                label="Phone number"
                required
                value={userInfo.phone}
                onChange={handleChange}
                id="phone"
              />
            </div>
            <div>
              <TextField
                label="Password"
                type="password"
                required
                value={userInfo.password}
                onChange={handleChange}
                id="password"
              />
            </div>
            <div>
              <TextField
                id="file"
                name="file"
                accept="image/*"
                type="file"
                onChange={handleInputChangeFile}
              />
            </div>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </div>
      </form>
    </>
  );
}

export default AddUser;
