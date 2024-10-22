import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <LocalLibraryIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            Typography
            sx={{ flexGrow: 1 }}
          >
            MUI LOGIN
          </Typography>
          <Box>
            <Button color="inherit">SignIn</Button>
            <Button color="inherit">SignIn-Shadow</Button>
            <Button color="inherit">SignIn-Image</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
