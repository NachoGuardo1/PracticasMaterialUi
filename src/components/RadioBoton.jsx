import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

export const RadioBoton = () => {
  const [valor, setValor] = useState("");
  console.log(valor);
  const handleValor = (e) => {
    setValor(e.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel>Años de experiencia</FormLabel>
        <RadioGroup
          name="años-de-exp"
          aria-labelledby="años-de-exp"
          value={valor}
          onChange={handleValor}
          row
        >
          <FormControlLabel
            control={<Radio size="small" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
