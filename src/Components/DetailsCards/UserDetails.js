import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Button from "@mui/material/Button";
import { MdDescription } from "react-icons/md";

const UserDetailsStyle = {
  position: "absolute",
  left: "550px",
  top: "100px",
  width: "1000px",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  textAlign: "center",
  backgroundColor: "silver",
  alignItems: "center",
  paddingTop: "20px",
  borderRadius: "10px",
  boxShadow: "50px 50px 50px 50px white",
};
const styleButton = { marginBottom: "20px", marginLeft: "20px" };
const boxOfbuttonStyle = { display: "flex", flexDirection: "column" };

function UserDetails() {
  return (
    <div style={UserDetailsStyle}>
      <div>
        <FaUserAlt size="30px" />
        <h1>mohamed ali</h1>
        <div>
          <h1>
            <AiFillPhone />
          </h1>
          <h1>54900777</h1>
        </div>
      </div>
      <div>
        <div>
          <h1>
            <MdEmail />
          </h1>
          <h1>mohammedali@gmail.com</h1>
        </div>
        <div>
          <h1>
            <MdDescription />
          </h1>
          <h1>case affected</h1>
        </div>
      </div>
      <div style={boxOfbuttonStyle}>
        <Button variant="contained" style={styleButton}>
          Update User
        </Button>
        <Button variant="contained" style={styleButton} color="error">
          Delete User
        </Button>
      </div>
    </div>
  );
}

export default UserDetails;
