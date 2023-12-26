import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

export const MuiAutoComplete = () => {
  const [value, setValue] = useState(null);
  console.log(value);
  const skills = ["javascript", "html", "css", "react"];
  return (
    <Stack>
      <Autocomplete
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
    </Stack>
  );
};
