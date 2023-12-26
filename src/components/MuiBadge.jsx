import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import { Badge, Stack } from "@mui/material";
export const MuiBadge = () => {
  return (
    <Stack spacing={3} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary" showZero max={90}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="secondary" invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};
