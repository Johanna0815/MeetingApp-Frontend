import React, { useState } from "react";
import style from "./style.css";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" href={`/`}>Home</Button>
          <Button color="inherit" href={`/Login`}>Login</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
