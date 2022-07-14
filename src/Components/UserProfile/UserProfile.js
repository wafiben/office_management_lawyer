import React from "react";
import { FaUserTie } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const styleCardLawer = {
  fontFamily: "italic",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: "150px",
};
const styleCardContent = {
  backgroundColor: "silver",
  width: "30%",
  borderRadius: "10px",
  color: "white",
  paddingTop: "100px",
  boxShadow: "10px 10px 10px 5px gray",
};
const cardContentContract = {
  ...styleCardContent,
  paddingTop: "5px",
  /*  boxShadow: "10px 10px 10px 5px #6495ed", */
};
const colorPoliceStyle = { color: "black" };
const styleButton = { marginTop: "10px", marginBottom: "10px" };

function UserProfile() {
  const user = useSelector((state) => state.AuthReducer.user);
  console.log(user);
  return (
    <div style={styleCardLawer}>
      <div style={styleCardContent}>
        <FaUserTie size="40px" color="black" />
        {!(user.role === 1) ? (
          <>
            <h2>
              <em style={colorPoliceStyle}>First Name :</em> mohammed
            </h2>
            <h2>
              <em style={colorPoliceStyle}>Last Name :</em> benali
            </h2>
          </>
        ):( <h2>
          <em style={colorPoliceStyle}>Admin</em> 
        </h2>)}

        <h2>
          <em style={colorPoliceStyle}>Email :</em> {user.email}
        </h2>
        <h2>
          <em style={colorPoliceStyle}>Phone number :</em> 54900777
        </h2>
      </div> 
      {!(user.role === 1) && (
        <div style={cardContentContract}>
          <h2 style={colorPoliceStyle}>Contract</h2>
          <div>
            <img
              src="https://cdn-capbd.nitrocdn.com/XfDfETerjzYuwJaAfgINugaKSIxgMlZQ/assets/static/optimized/rev-573acb6/wp-content/uploads/2020/06/contract-lawyer-houston.jpg"
              alt="contract"
              width="400px"
            />
          </div>
          <Button variant="contained" style={styleButton}>
            See case
          </Button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
