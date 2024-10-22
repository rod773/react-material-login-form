import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorNav, setAnchorNav] = useState();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <LocalLibraryIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            Typography
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            MUI LOGIN
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Button color="inherit">SignIn</Button>
            <Button color="inherit">SignIn-Shadow</Button>
            <Button color="inherit">SignIn-Image</Button>
          </Box>
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <IconButton size="large" edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <LocalLibraryIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            Typography
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            MUI LOGIN
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
