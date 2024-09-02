import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import NavigationBar from "./Navbar/NavigationBar";
import { Button, Grid2, TextField } from "@mui/material";
import TextInput from "./TextInput";
import { login, registration } from "./Utils";
import ButtonElement from "./ButtonElement";
import { connect } from "react-redux";

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
  empty: { color: "red", fontSize: "small" },
}));

const LoginPage = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [logValidation, setLogValidation] = useState({
    email: false,
    password: false,
  });
  const [registerData, setRegisterData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [regValidation, setRegValidation] = useState({
    name: false,
    phone: false,
    email: false,
    password: false,
  });

  const loginFormChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value.trim() });
    setLogValidation({ ...logValidation, [e.target.name]: false });
  };

  const loginValidation = () => {
    let isValid = true;
    let newValidation = { ...logValidation };
    Object.keys(loginData).map((key) => {
      if (loginData[key] === "") {
        newValidation[key] = true;
        isValid = false;
      }
    });
    setLogValidation(newValidation);
    return isValid;
  };
  const handleSignInClick = () => {
    const isValid = loginValidation();
  };
  // -------------------------------------------------------------------------------------------------
  const regFormChange = (e) => {
    debugger;
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value.trim(),
    });
    setRegValidation({ ...regValidation, [e.target.name]: false });
  };

  const registerValidation = (props) => {
    let isValid = true;
    let newValidation = { ...logValidation };
    Object.keys(registerData).map((key) => {
      if (registerData[key] === "") {
        newValidation[key] = true;
        isValid = false;
      }
    });
    setRegValidation(newValidation);
    return isValid;
  };
  const handleSignUpClick = () => {
    const isValid = registerValidation();
    if (isValid) {
    }
  };
  // -------------------------------------------------------------------------------------------------
  const signInTab = () => {
    setPage(true);
    setLogValidation({ email: false, password: false });
    setLoginData({ email: "", password: "" });
  };
  const signUpTab = () => {
    setPage(false);
    setRegValidation({
      name: false,
      phone: false,
      email: false,
      password: false,
    });
    setRegisterData({
      name: "",
      phone: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <NavigationBar />
      <div className={classes.root}>
        <Grid2 xs={12} className="d-flex gap-3 mb-3">
          <h6
            className={`${classes.signUpText} ${page && classes.page}`}
            onClick={() => signInTab()}
          >
            SIGN IN
          </h6>
          <h6
            className={`${classes.signUpText} ${!page && classes.page}`}
            onClick={() => signUpTab()}
          >
            SIGN UP
          </h6>
        </Grid2>
        {page ? (
          <React.Fragment>
            {login?.map((item, index) => (
              <div key={index}>
                <Grid2 xs={12} className="mt-2">
                  <TextInput
                    data={item}
                    handleChange={loginFormChange}
                    isValid={logValidation[item?.name] || false}
                    value={loginData[item?.name] || ""}
                  />
                </Grid2>
                {logValidation[item.name] && (
                  <Grid2 xs={12}>
                    <span className={classes.empty}>
                      {item?.label} is empty!
                    </span>
                  </Grid2>
                )}
              </div>
            ))}
            <Grid2 xs={12} className="mt-2">
              <ButtonElement
                label={"Sign In"}
                handleClick={handleSignInClick}
              />
            </Grid2>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {registration?.map((item, index) => (
              <div key={index}>
                <Grid2 xs={12} className="mt-2">
                  <TextInput
                    data={item}
                    handleChange={regFormChange}
                    isValid={regValidation[item?.name] || false}
                    value={registerData[item?.name] || ""}
                  />
                </Grid2>
                {regValidation[item?.name] && (
                  <Grid2 xs={12}>
                    <span className={classes.empty}>
                      {item?.label} is empty!
                    </span>
                  </Grid2>
                )}
              </div>
            ))}
            <Grid2 xs={12} className="mt-2">
              <ButtonElement
                label={"Sign Up"}
                handleClick={handleSignUpClick}
              />
            </Grid2>
          </React.Fragment>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
  };
};
const mepDispatchToProps = {};

// export default LoginPage
export default connect(mapStateToProps, mepDispatchToProps)(LoginPage);
