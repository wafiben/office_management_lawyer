import React from "react";
import Case from "./Case.js";
const styleListOfCases = {
  position: "absolute",
  left: "350px",
  top: "100px",
  width: "1300px",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
};
function ListOfCases() {
  return (
    <div style={styleListOfCases}>
      <Case />
      <Case />
      <Case />
    </div>
  );
}

export default ListOfCases;
