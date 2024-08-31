import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import NavigationBar from "./Navbar/NavigationBar";
import { Button, Grid2, TextField } from "@mui/material";
import TextInput from "./TextInput";
import { login, registration } from "./Utils";
import ButtonElement from "./ButtonElement";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    padding: "10px",
    margin: "10px",
  },
  signUpText: {
    color: "#57C898",
    cursor: "pointer",
    fontSize: "20px",
  },
  page: { borderBottom: "2px solid #57C898" },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [page, setPage] = useState(true);

  return (
    <>
      <NavigationBar />
      <div className={classes.root}>
        <Grid2 xs={12} className="d-flex gap-3 mb-3">
          <h6
            className={`${classes.signUpText} ${page && classes.page}`}
            onClick={() => setPage(true)}
          >
            SIGN IN
          </h6>
          <h6
            className={`${classes.signUpText} ${!page && classes.page}`}
            onClick={() => setPage(false)}
          >
            SIGN UP
          </h6>
        </Grid2>
        {page ? (
          <React.Fragment>
            {login?.map((item) => (
              <Grid2 xs={12} key={item?.label} className="mt-2">
                <TextInput data={item} />
              </Grid2>
            ))}
            <Grid2 xs={12} className="mt-2">
              <ButtonElement label={"Sign In"} />
            </Grid2>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {registration?.map((item) => (
              <Grid2 xs={12} key={item?.label} className="mt-2">
                <TextInput data={item} />
              </Grid2>
            ))}
            <Grid2 xs={12} className="mt-2">
              <ButtonElement label={"Sign Up"} />
            </Grid2>
          </React.Fragment>
        )}
      </div>
    </>
  );
};

export default LoginPage;
