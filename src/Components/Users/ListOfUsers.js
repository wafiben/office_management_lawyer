import React, { useEffect, useState } from "react";
import axios from "axios";
import CardUser from "../CardUser/CardUser";
const styleListOfUsers = {
  position: "absolute",
  left: "350px",
  top: "100px",
  width: "1300px",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
};
function ListOfUsers() {
  const [users, setUsers] = useState([]);
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    axios.get("http://localhost:10000/admin", config).then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  return (
    <div style={styleListOfUsers}>
      {users.length > 1
        ? users.filter((elt)=>elt.role===0).map((user) => <CardUser user={user} key={user._id} />)
        : "no users was found"}

    </div>
  );
}

export default ListOfUsers;
