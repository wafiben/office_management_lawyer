import React from "react";
import Message from './Message.js'
const styleListOfMessages = {
  position: "absolute",
  left: "350px",
  top: "100px",
 width: "1300px", 
  display: "flex",
  justifyContent: "space-around",
  flexWrap:'wrap',
};
function ListOfMessage() {
  return (
    <div style={styleListOfMessages}>
      <Message/>
      <Message/>
      <Message/>
    </div>
  );
}

export default ListOfMessage;