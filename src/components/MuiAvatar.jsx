import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar
          sx={{
            bgcolor: "primary.light",
            width: 56,
            height: 56,
          }}
        >
          NG
        </Avatar>
        <Avatar
          variant="square"
          sx={{
            bgcolor: "success.light",
          }}
        >
          ED
        </Avatar>

        <AvatarGroup>
          <Avatar
            sx={{
              bgcolor: "primary.light",
            }}
          >
            NG
          </Avatar>
          <Avatar
            sx={{
              bgcolor: "success.light",
            }}
          >
            ED
          </Avatar>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1554063319669030913/Bt9L6HKp_400x400.jpg"
            alt="Nacho"
          ></Avatar>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1545228019958091776/6klRIKaT_400x400.jpg"
            alt="Eri"
          ></Avatar>
        </AvatarGroup>
        <AvatarGroup max={3}>
          <Avatar
            variant="rounded"
            sx={{
              bgcolor: "primary.light",
            }}
          >
            NG
          </Avatar>
          <Avatar
            sx={{
              bgcolor: "success.light",
            }}
          >
            ED
          </Avatar>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1554063319669030913/Bt9L6HKp_400x400.jpg"
            alt="Nacho"
          ></Avatar>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1545228019958091776/6klRIKaT_400x400.jpg"
            alt="Eri"
          ></Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};
