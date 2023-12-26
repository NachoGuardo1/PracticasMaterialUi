import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

export const MuiAlert = () => {
  return (
    <Stack spacing={3}>
      <Alert severity="warning">Warning</Alert>
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small">
            Undo
          </Button>
        }
      >
        Error
      </Alert>
      <Alert severity="info">Info</Alert>
      <Alert severity="success">Success</Alert>
      <Alert variant="outlined" severity="warning">
        <AlertTitle>Title Alert</AlertTitle>
        Warning
      </Alert>
      <Alert variant="outlined" severity="error">
        <AlertTitle>Title Alert</AlertTitle>
        Error
      </Alert>
      <Alert variant="outlined" severity="info">
        <AlertTitle>Title Alert</AlertTitle>
        Info
      </Alert>
      <Alert variant="outlined" severity="success">
        <AlertTitle>Title Alert</AlertTitle>
        Success
      </Alert>
      <Alert variant="filled" severity="warning">
        Warning
      </Alert>
      <Alert
        variant="filled"
        severity="error"
        onClose={() => {
          alert("Close");
        }}
      >
        Error
      </Alert>
      <Alert variant="filled" severity="info">
        Info
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
      >
        Success
      </Alert>
    </Stack>
  );
};
