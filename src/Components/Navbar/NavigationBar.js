import { Button, makeStyles } from "@material-ui/core";

import React from "react";

const useStyles = makeStyles((theme) => ({
  naveBar: {
    display: "flex",
    backgroundColor: "#57C898",
    alignItems: "center",
    gap: "10px",
    padding: "7px",
    boxShadow: "0px 0px 10px 0px #888888",
    color: "#fff",
  },
  header: {
    marginLeft: "25px",
    fontSize: "18px",
    fontWeight: 600,
    cursor: "pointer",
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  const header = ["Login", "Home", "Registration"];

  return (
    <>
      <div className={classes.naveBar}>
        <img
          width="40px"
          height="40px"
          className="rounded rounded-circle"
          src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
        />
        <h4 className="mb-0 w-50">COMPANY</h4>
        {header?.map((item) => (
          <span key={item} className={classes.header}>
            {item}
          </span>
        ))}
      </div>
    </>
  );
};

export default NavigationBar;
