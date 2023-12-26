import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Drawer,
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import React, { useState } from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import MenuIcon from "@mui/icons-material/Menu";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [value, setValue] = useState(0);

  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.target);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokemon Bar
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Link 1</Button>
            <IconButton
              color="inherit"
              edge="end"
              aria-label="menu"
              onClick={() => {
                setDrawer(true);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Button
              color="inherit"
              id="botonMenu"
              onClick={handleClick}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              aria-controls={open ? "menuId" : undefined}
            >
              Menu
            </Button>
          </Stack>
          <Menu
            id="menuId"
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            MenuListProps={{
              "aria-labelledby": "botonMenu",
            }}
          >
            <MenuItem onClick={handleClose}>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
          </Menu>
          <Drawer
            anchor="left"
            open={drawer}
            onClose={() => {
              setDrawer(false);
            }}
          >
            <Box p={2} width="250px" textAlign="center" role="presentation">
              <Typography variant="h5" component="div">
                Side Panel
              </Typography>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
      <SpeedDial
        icon={<SpeedDialIcon />}
        ariaLabel="speed navigation"
        sx={{
          position: "absolute",

          right: "15px",
        }}
      >
        <SpeedDialAction tooltipOpen tooltipTitle="dos" icon={<ShareIcon />} />
        <SpeedDialAction tooltipOpen tooltipTitle="uno" icon={<PrintIcon />} />
      </SpeedDial>
      <BottomNavigation
        sx={{
          wdith: "100%",
          position: "absolute",
          bottom: 0,
        }}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        showLabels
      >
        <BottomNavigationAction
          icon={<PersonIcon />}
          label="User"
          size="small"
        />
        <BottomNavigationAction icon={<HomeIcon />} label="Home" size="small" />
        <BottomNavigationAction
          icon={<FavoriteIcon />}
          label="Favoritos"
          size="small"
        />
      </BottomNavigation>
    </>
  );
};
