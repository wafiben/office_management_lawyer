import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { GoLaw } from "react-icons/go";
import { FcSearch } from "react-icons/fc";
import { useSelector } from "react-redux";
import { logOut } from "../../Redux/Actions/authAction";
import { useDispatch } from "react-redux";

const styleLink = { textDecoration: "none", color: "white" };
const inputField = {
  height: "30px",
  width: "80%",
  borderRadius: "10px",
  border: "3px solid gray",
  textAlign: "center",
  marginRight: "5px",
};
const divBlockSearch = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};
function Navbar() {
  const dispatch = useDispatch();
  const { user, isAuth, loading } = useSelector((state) => state.AuthReducer);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth");
  };
  const handleNavigateAbout = () => {
    navigate("/about");
  };
  const handleSignOut = () => {
    dispatch(logOut(navigate));
  };

  return (
    <div className="nav-header">
      <Button variant="contained">
        <Link to="/" style={styleLink}>
          <GoLaw size="35px" />
        </Link>
      </Button>
      <Button variant="contained" onClick={handleNavigateAbout}>
        About Us
      </Button>
      <form style={divBlockSearch}>
        <input
          type="text"
          style={inputField}
          placeholder="Identity  number of case"
          required
        />
        <Button variant="contained" type="submit">
          Consult
        </Button>
      </form>
      {user ? (
        <>
          <Link to="/profile">
            <Avatar name={user.lastName} size={40} className="avatar" round="50px" />
          </Link>
          <Button variant="outlined" color="error" onClick={handleSignOut}>
            Sign out
          </Button>
        </>
      ) : (
        <Button variant="contained" onClick={handleClick}>
          Sign In
        </Button>
      )}
     
    </div>
  );
}

export default Navbar;
