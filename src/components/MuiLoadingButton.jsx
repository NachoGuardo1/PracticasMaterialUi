import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";

export const MuiLoadingButton = () => {
  return (
    <Stack direction="row" spacing={3}>
      <LoadingButton variant="outlined" loading>
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading">
        Fetch data..
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading" loading>
        Fetch Data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        loading
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};
