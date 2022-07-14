import React, { useState } from "react";
import {
  FormControl,
  Button,
  Grid,
  TextField,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@mui/icons-material/Send";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "30%",
    margin: "auto",
    height: "400px",
    paddinBottom: "400px",
  },
  Box: {
    border: "1px solid white",
    borderRaduis: "16px",
    marginTop: "200px",
  },
}));
function SignIn() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={8}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
        className={classes.Box}
      >
        <div style={{ paddingTop: "50px" }}>
          <Typography variant="subtitle1" display="block" gutterBottom>
            Login to your account
          </Typography>
          <FormControl>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
            />
          </FormControl>
        </div>
        <Button
          variant="outlined"
          onClick={() => alert("hello")}
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
        <Typography
          variant="subtitle1"
          display="block"
          gutterBottom
          style={{ cursor: "pointer", marginTop: "20px" }}
        >
          Do not have an account contact admin
        </Typography>
      </Box>
    </Paper>
  );
}

export default SignIn;
