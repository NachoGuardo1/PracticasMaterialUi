import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";

export const MuiChip = () => {
  const [chips, setChips] = useState(["chip 1", "chip2", "chip3"]);
  const handleDelete = (chipToDelete) => {
    setChips(chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction="row" spacing={3}>
      <Chip label="Chip" color="primary" />
      <Chip
        label="Chip Outlined"
        variant="outlined"
        color="success"
        avatar={<Avatar>N</Avatar>}
      />
      <Chip
        label="Chip Outlined"
        variant="outlined"
        color="success"
        icon={<FaceIcon />}
      />
      <Chip
        label="Delete Chip"
        color="error"
        onClick={() => {
          alert("Click");
        }}
        onDelete={() => {
          alert("delete");
        }}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
