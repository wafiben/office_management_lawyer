import React, { useState } from "react";

import Button from "@mui/material/Button";

const styleFormContact = {
  marginTop: "200px",
  borderRadius: "20px",
  width: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  boxShadow: "10px 10px 10px 10px gray",
  height: "500px",
  paddingTop: "20px",
};
const inputDiv = { marginBottom: "20px" };
const inputField = { height: "40px", width: "30%", borderRadius: "10px" };
const StyleMessageFild = { ...inputField, height: "80px" };
const StyleButtonSend = { marginLeft: "50px" };

function ContactUs() {
  const [userInfo, setUserInfo] = useState({
    firtsName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
    file: "",
  });
  const handleChange = (e) => {};
  return (
    <div style={styleFormContact}>
      <h2>Contact admin</h2>
      <form>
        <div style={inputDiv}>
          <input
            type="text"
            name="firtsName"
            placeholder="First Name"
            style={inputField}
            onChange={handleChange}
            required
          />
        </div>
        <div style={inputDiv}>
          <input
            type="text"
            name="lastName"
            style={inputField}
            placeholder="Last Name"
            value={userInfo.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div style={inputDiv}>
          <input
            type="email"
            name="email"
            style={inputField}
            placeholder="Email"
            required
          />
        </div>
        <div style={inputDiv}>
          <input
            type="text"
            name="phone"
            style={inputField}
            placeholder="Phone number"
            required
          />
        </div>
        <div style={inputDiv}>
          <input
            type="text"
            name="message"
            style={StyleMessageFild}
            placeholder="Want have an account"
            required
          />
        </div>
        <div style={inputDiv}>
          <input
            type="file"
            name="file"
            placeholder="sss"
            style={inputField}
            required
          />
          <label for="message" style={{ color: "red" }}>
            Please add your contract as proof{" "}
          </label>
          <Button variant="contained" type="submit" style={StyleButtonSend}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
