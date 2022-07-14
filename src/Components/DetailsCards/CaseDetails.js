import React from "react";
import Button from "@mui/material/Button";
import { BsBookFill } from "react-icons/bs";
import { MdDescription } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

import { RiLockPasswordLine } from "react-icons/ri";

import { AiTwotoneCalendar } from "react-icons/ai";

const caseDetailsStyle = {
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

function CaseDetails() {
  return (
    <div style={caseDetailsStyle}>
      <div>
        <BsBookFill size="30px" />
        <h1>type</h1>
        <div>
          <h1>
            <MdDescription />
          </h1>
          <h1>description of our case</h1>
        </div>
        <div>
          <h1>
            <AiTwotoneCalendar />
          </h1>
          <h1>date</h1>
        </div>
      </div>
      <div>
        <div>
          <h1>
            <FaUserTie />
          </h1>
          <h1>lawyer of the case</h1>
        </div>
        <div>
          <h1>
            <RiLockPasswordLine />
          </h1>
          <h1>5557</h1>
        </div>
      </div>
      <div>
        <div style={boxOfbuttonStyle}>
        <Button variant="contained" style={styleButton}>
          Update case
        </Button>
        <Button variant="contained" style={styleButton} color="error">
          Delete case
        </Button>
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;
