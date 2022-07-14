import { BsBookFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import { MdDescription } from "react-icons/md";

import { AiTwotoneCalendar } from "react-icons/ai";

const contentCartStyle = {
  backgroundColor: "white",
  borderRadius: "20px",
  marginBottom: "20px",
  fontFamily: "cursive",
  color: "black",
  boxShadow: "10px 10px 10px 10px gray",
  paddingTop: "10px",
  paddingLeft: "10px",
  paddingRight: "10px",
};
const styleButton = { marginBottom: "20px" };
function Case() {
  return (
    <div style={contentCartStyle}>
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

      <Button variant="contained" style={styleButton}>
        See details
      </Button>
    </div>
  );
}
export default Case;
