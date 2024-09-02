import React from "react";
import { makeStyles } from "@material-ui/core";

import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  signInBtn: { width: "50%" },
}));

const ButtonElement = ({ label, handleClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      size="small"
      className={classes.signInBtn}
      sx={{ backgroundColor: "#57C898", color: "white" }}
      onClick={() => handleClick()}
    >
      {label}
    </Button>
  );
};

export default ButtonElement;
