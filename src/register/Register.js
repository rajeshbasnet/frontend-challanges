import "./register.css";
import { Typography, Toolbar, TextField, Button, Box } from "@mui/material";
import * as React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <Header />
      <section className="register__section">
        <Typography variant="h4" align="center">
          Sign up
        </Typography>
        <p className="homepage__link">
          <Link to={"/login"}>Have an account ?</Link>
        </p>

        <form>
          <TextField
            fullWidth
            type="text"
            label="Username"
            variant="outlined"
            className="input__field"
          />
          <br />
          <TextField
            fullWidth={true}
            type="text"
            label="Email"
            variant="outlined"
            className="input__field"
          />
          <br />
          <TextField
            fullWidth
            type="number"
            label="Password"
            variant="outlined"
            className="input__field"
          />
          <br />
          <div className="btn__container">
            <Button variant="contained" color="success" className="btn_submit">
              Sign up
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
