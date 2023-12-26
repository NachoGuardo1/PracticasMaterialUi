import { InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";

export const TextCampo = () => {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={3}>
        <TextField
          label="name small"
          variant="outlined"
          color="secondary"
          size="small"
          disabled
        />
        <TextField label="name" variant="standard" required />
        <TextField
          label="password"
          type="password"
          variant="filled"
          helperText="No compartiremos tu contraseña con nadie mas"
        />
        <TextField
          label="name"
          variant="standard"
          inputProps={{ readOnly: true }}
          disabled
        />
      </Stack>
      <Stack direction="row" spacing={3}>
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          error
        />
        <TextField
          label="kilos"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
