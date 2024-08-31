import React from "react";
import { makeStyles } from "@material-ui/core";

import { TextField } from "@mui/material";

const useStyles = makeStyles((theme) => ({}));

const TextInput = ({ data }) => {
  const classes = useStyles();

  return (
    <TextField
      className="w-50"
      variant="outlined"
      size="small"
      type={data?.type || "text"}
      label={data?.label || ""}
      sx={{
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "#57C898",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#57C898",
          },
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#57C898",
        },
      }}
    />
  );
};

export default TextInput;
