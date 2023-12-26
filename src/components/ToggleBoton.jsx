import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";
import React, { useState } from "react";

export const ToggleBoton = () => {
  const [formats, setFormats] = useState([]);
  console.log(formats);
  const handleChangeFormat = (e) => {
    setFormats([e.target.value]);
  };
  return (
    <Stack spacing={3}>
      <Stack direction="row">
        <ToggleButtonGroup
          value={formats}
          onChange={(e) => handleChangeFormat(e.target.value)}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
