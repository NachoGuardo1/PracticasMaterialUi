import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {/* <Stack spacing={3} width="300px" mb={5}>
        <Skeleton variant="text" animation={false} />
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={300}
          height={125}
          animation="wave"
        />
      </Stack> */}
      <Box width="300px">
        {loading ? (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="260px"
            height="140px"
          />
        ) : (
          <img src="https://pbs.twimg.com/profile_images/1554063319669030913/Bt9L6HKp_400x400.jpg" />
        )}
      </Box>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "100%",
          marginTop: "12px",
        }}
      >
        {loading ? (
          <Skeleton variant="cirular" width={40} height={40} animation="wave" />
        ) : (
          <Avatar>V</Avatar>
        )}
      </Stack>
      <Stack
        sx={{
          width: "80%",
        }}
      >
        {loading ? (
          <>
            <Typography variant="body1">
              <Skeleton variant="text" width="100%" animation="wave" />
            </Typography>
            <Typography variant="body2">
              <Skeleton variant="text" width="100%" animation="wave" />
            </Typography>
          </>
        ) : (
          <Typography variant="body1"> React Mui tutorial</Typography>
        )}
      </Stack>
    </>
  );
};
