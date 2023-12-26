import { Box, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";

export const MuiLayout = () => {
  return (
    <Paper p="34px">
      <Stack
        border="3px solid"
        direction="row"
        spacing={3}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.light",
            width: "100px",
            height: "100px",
            padding: "10px",
          }}
        >
          Box 1
        </Box>
        <Box bgcolor="secondary.light" width="100px" height="100px" p="10px">
          box 2
        </Box>
      </Stack>
      <Grid container my={4}>
        <Grid item bgcolor="secondary.main" xs={6}>
          Grid 1
        </Grid>
        <Grid item bgcolor="secondary.main" xs={6}>
          Grid 2
        </Grid>
        <Grid item bgcolor="secondary.main" xs={6}>
          Grid 3
        </Grid>
        <Grid item bgcolor="secondary.main" xs={6}>
          Grid 4
        </Grid>
      </Grid>
      {/* Para que se divida el total en partes iguales no se especifica la cantidad de columns, en caso que se especifique una sola, el resto se dividira en partes iguales  */}
    </Paper>
  );
};
