import React from "react";

import { BsBookFill } from "react-icons/bs";
import { MdDescription } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

import { RiLockPasswordLine } from "react-icons/ri";

import { AiTwotoneCalendar } from "react-icons/ai";

const caseDetailsStyle = {
  /*  margin:'100px 300px 300px 20px', */
  marginTop: "10px",
  marginLeft: "300px",
  width: "1000px",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  textAlign: "center",
  backgroundColor: "silver",
  alignItems: "center",
  borderRadius: "10px",
  boxShadow: "50px 50px 50px 50px white",
  paddingTop: "20px",
};

function ConsultCase() {
  return (
    <div style={{marginTop: '100px'}}>
      <h2>
        <em>Welcome client </em>
      </h2>
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
      </div>
    </div>
  );
}

export default ConsultCase;
