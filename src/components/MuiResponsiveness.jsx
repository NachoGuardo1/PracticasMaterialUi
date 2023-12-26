import React from "react";
import { Box, Stack } from "@mui/material";

export const MuiResponsiveness = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Box
        sx={{
          width: {
            xs: 100,
            sm: 300,
            md: 500,
            lg: 600,
            xl: 700,
          },
          height: {
            xs: 100,
            sm: 300,
            md: 500,
            lg: 600,
            xl: 700,
          },
          bgcolor: "otro.darker",
        }}
      ></Box>
      <Box
        sx={{
          width: {
            xs: 100,
            sm: 300,
            md: 500,
            lg: 600,
            xl: 700,
          },
          height: {
            xs: 100,
            sm: 300,
            md: 500,
            lg: 600,
            xl: 700,
          },
          bgcolor: "otro.main",
        }}
      ></Box>
      <Box
        sx={{
          width: {
            xs: 100,
            sm: 300,
            md: 500,
            lg: 600,
            xl: 700,
          },
          height: {
            xs: 100,
            sm: 300,
            md: 500,
            lg: 600,
            xl: 700,
          },
          bgcolor: "secondary.main",
        }}
      ></Box>
    </Stack>
  );
};
