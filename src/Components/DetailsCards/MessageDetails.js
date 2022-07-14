import Button from "@mui/material/Button";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

const messageDetailsStyle = {
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
const styleButton = { marginBottom: "20px" };

function MessageDetails() {
  return (
    <div style={messageDetailsStyle}>
      <div>
        <div>
          <FaUserAlt size="30px" />
          <h1>mohamed ali</h1>
        </div>
        <div>
          <h1>
            <MdEmail />
          </h1>
          <h1>mohammedali@gmail.com</h1>
        </div>
        <div>
          <h1>
            <AiFillPhone />
          </h1>
          <h1>54900777</h1>
        </div>
        <div>
          <h1>
            <AiFillMessage />
          </h1>
          <h3>hello i want to join your team and have an account</h3>
        </div>
      </div>
      <div>
        <h1>Contract Proof</h1>
        <img
          src="https://cdn-capbd.nitrocdn.com/XfDfETerjzYuwJaAfgINugaKSIxgMlZQ/assets/static/optimized/rev-573acb6/wp-content/uploads/2020/06/contract-lawyer-houston.jpg"
          alt="contract"
          width="300px"
        />
      </div>
      <Button variant="contained" style={styleButton} color="error">
        Delete message
      </Button>
    </div>
  );
}

export default MessageDetails;
