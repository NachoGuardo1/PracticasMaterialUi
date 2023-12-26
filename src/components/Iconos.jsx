import { Button, IconButton, Stack } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

export const Iconos = () => {
  return (
    <Stack spacing={3} direction="row">
      <Button variant="contained" startIcon={<SendIcon />} disableElevation>
        Enviar
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} disableRipple>
        Enviar
      </Button>

      <IconButton color="success">
        <SendIcon />
      </IconButton>
      <IconButton color="warning">
        <SendIcon />
      </IconButton>
    </Stack>
  );
};
