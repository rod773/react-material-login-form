import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <LocalLibraryIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
