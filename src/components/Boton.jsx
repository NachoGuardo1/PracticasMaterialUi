import React from "react";
import { Button, Stack } from "@mui/material";

export const Boton = () => {
  return (
    <Stack spacing={5}>
      <Stack spacing={3} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outline</Button>
      </Stack>
      <Stack spacing={3} direction="column">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium" color="secondary">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
    </Stack>

    //paleta de colores
    // Primary: azul
    // secondary: rosa
    // warning: amarillo
    // info: azul
    // error : rojo
    // success: verde

    // main light dark variaciones del color
  );
};
