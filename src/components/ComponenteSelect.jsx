import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

export const ComponenteSelect = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);
  const handleChangue = (e) => {
    const value = e.target.value;
    setCountries(value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Seleccionar Pais"
        select
        value={countries}
        onChange={handleChangue}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="AR">Argentina</MenuItem>
        <MenuItem value="US">Usa</MenuItem>
        <MenuItem value="BR">Brasil</MenuItem>
      </TextField>
    </Box>
  );
};
