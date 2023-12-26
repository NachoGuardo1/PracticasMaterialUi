import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";

export const MuiTooltip = () => {
  return (
    <>
      <Tooltip
        title="Eliminar"
        placement="right"
        arrow
        enterDelay={400}
        leaveDelay={300}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Eliminar" placement="bottom">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};
