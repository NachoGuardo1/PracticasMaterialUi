import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

export const MuiList = () => {
  return (
    <Box
      sx={{
        width: "500px",
        bgcolor: "#efefef",
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="List 1" secondary="secondary text" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="List 1" secondary="secondary text" />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemIcon>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="List 1" secondary="secondary text" />
        </ListItem>
      </List>
    </Box>
  );
};
