import React from "react";
import { FaUserTie } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

import "./Side.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";


const styleSideBar = {
  position: "fixed",
  left: "0",
  bottom: "0",
  top: "0",
  backgroundColor: "white",
  width: "20%",
  paddingTop: "190px",
};
const StyleLink = { textDecoration: "none", color: "black" };
const styleContentDiv = { display: "flex", justifyContent: "space-evenly" };

function SideBar() {
  return (
    <div style={styleSideBar}>
      <div style={styleContentDiv} className="input-element">
        <h1>
          <FaUserTie />
        </h1>
        <Link to="/admin/users" style={StyleLink}>
          <h1> users</h1>
        </Link>
      </div>

      <div style={styleContentDiv} className="input-element">
        <h1>
          <BsBriefcaseFill />
        </h1>
        <Link to="/admin/cases" style={StyleLink}>
          <h1> Cases</h1>
        </Link>
      </div>
      <div style={styleContentDiv} className="input-element">
        <h1>
          <AiFillMessage />
        </h1>
        <Link to="/admin/messages" style={StyleLink}>
        <h1> Messages</h1>
        </Link>
      </div>
      <div style={styleContentDiv} className="input-element">
        <h1>
          <AiFillPlusCircle />
        </h1>
        <Link to="/admin/addUser" style={StyleLink}>
        <h1> Add User</h1>
        </Link>
      </div>
      <div style={styleContentDiv} className="input-element">
        <h1>
          <AiFillPlusCircle />
        </h1>
        <Link to="/admin/addCase" style={StyleLink}>
        <h1> Add case</h1>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default SideBar;
