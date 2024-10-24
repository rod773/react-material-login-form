import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuList,
  MenuItem,
} from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorNav, setAnchorNav] = useState(null);

  const openMenu = (e) => {
    setAnchorNav(e.target);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "secondary.light" }}>
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
            <Button component={Link} to={"/"} color="inherit">
              SignIn
            </Button>
            <Button component={Link} to={"/signinshadow"} color="inherit">
              SignIn-Shadow
            </Button>
            <Button component={Link} to={"/signinslide"} color="inherit">
              SignIn-Slide
            </Button>
            <Button component={Link} to={"/sidenav"} color="inherit">
              Sidenav
            </Button>
          </Box>
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              position="absolute"
              open={anchorNav}
              onClose={closeMenu}
              sx={{
                height: "100%",
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <MenuList>
                <MenuItem component={Link} to={"/"}>
                  SignIn
                </MenuItem>
                <MenuItem component={Link} to={"/signinshadow"}>
                  SignIn-Shadow
                </MenuItem>
                <MenuItem component={Link} to={"/sighinslide"}>
                  SignIn-Slide
                </MenuItem>
              </MenuList>
            </Menu>
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
