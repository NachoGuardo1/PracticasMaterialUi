import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const MuiRating = () => {
  const [value, setValue] = useState(0 || null);
  console.log(value);
  return (
    <Stack spacing={5}>
      <Rating
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
      />
      <Rating
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        icon={<FavoriteIcon />}
        emptyIcon={<FavoriteBorderIcon />}
        precision={0.5}
      />
      <Rating
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        icon={<FavoriteIcon />}
        emptyIcon={<FavoriteBorderIcon />}
        precision={0.5}
        readOnly
      />
      <Rating
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        icon={<FavoriteIcon />}
        emptyIcon={<FavoriteBorderIcon />}
        precision={0.5}
        highlightSelectedOnly
      />
    </Stack>
  );
};
