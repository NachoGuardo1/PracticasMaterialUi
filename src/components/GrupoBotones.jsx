import { Button, ButtonGroup, Stack } from "@mui/material";
import React from "react";

export const GrupoBotones = () => {
  return (
    <>
      <Stack spacing={3}>
        <Stack direction="row">
          <ButtonGroup variant="outlined" orientation="vertical" size="small">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row">
          <ButtonGroup variant="text" size="medium" color="success">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row">
          <ButtonGroup variant="contained" size="large" color="error">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </>
  );
};
