import React from "react";
import { makeStyles } from "@material-ui/core";

import { TextField } from "@mui/material";

const useStyles = makeStyles((theme) => ({}));

const TextInput = ({ data, isValid, handleChange, value, existEmail }) => {
  const classes = useStyles();

  return (
    <TextField
      className="w-50"
      variant="outlined"
      size="small"
      value={value}
      name={data?.name || ""}
      type={data?.type || "text"}
      label={data?.label || ""}
      error={isValid || existEmail === true}
      onChange={(e) => handleChange(e)}
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
