import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const styleListOfCases = {
  position: "absolute",
  left: "350px",
  top: "100px",
  width: "1300px",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
};
const inputProps = {
  width: 500,
};
function AddCase() {
  return (
    <div style={styleListOfCases}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "45ch" },
        }}
        autoComplete="off"
      >
        <div>
          <div>
            <TextField
              id="outlined-disabled"
              label="Number Of Case"
              defaultValue="Number Of Case"
              required
            />
          </div>
          <div>
            <TextField
              id="outlined-disabled"
              label="Type Of Case"
              defaultValue="Type Of Case"
              required
            />
          </div>
          <div>
            <TextField
              id="outlined-disabled"
              label="Affected Lawyer"
              defaultValue="Affected Lawyer"
              required
            />
          </div>
          <div>
            <TextField
              id="outlined-disabled"
              label="Description Of Case"
              defaultValue="Description Of Case"
              required
              style={inputProps}
              size="xlarge" 
            />
          </div>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default AddCase;
