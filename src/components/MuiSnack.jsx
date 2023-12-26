import { Button, Snackbar, Stack } from "@mui/material";
import React, { useState } from "react";

export const MuiSnack = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        message="Submit successfully"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </Stack>
  );
};
