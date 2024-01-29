import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Hidden from "@mui/material/Hidden";
import { useNavigate, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar() {
  const history = useNavigate();
  const [servicesMenuAnchor, setServicesMenuAnchor] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const handleServicesMenuOpen = (event) => {
    setServicesMenuAnchor(event.currentTarget);
  };
  const handleServicesMenuClose = () => {
    setServicesMenuAnchor(null);
  };
  const navigateTo = (path) => {
    history(path);
    handleServicesMenuClose();
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            HelperHub
          </Typography>
          <Hidden mdUp implementation="css">
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown implementation="css">
            <Button color="inherit" onClick={() => history("/Home")}>
              Home
            </Button>
            <Button color="inherit" onClick={handleServicesMenuOpen}>
              Services
            </Button>
            <Button color="inherit" onClick={() => history("/Account")}>
              Pricing
            </Button>
            <Button color="inherit" onClick={() => history("/About")}>
              About Us
            </Button>
            <Button color="inherit" onClick={() => history("/Contact")}>
              Contact Us
            </Button>
            <Button color="inherit">Log In</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Menu
  anchorEl={servicesMenuAnchor}
  open={Boolean(servicesMenuAnchor)}
  onClose={handleServicesMenuClose}
  PaperProps={{
    sx: {
      backgroundColor: 'black', // Set the background color to black
      color: 'white', // Set the text color to white
    },
  }}
>
  <MenuItem onClick={() => navigateTo("/Services/Services")}>
    Services(All)
  </MenuItem>
  <MenuItem onClick={() => navigateTo("/Services/Services/Cleaning")}>
    House Maid
  </MenuItem>
  <MenuItem onClick={() => navigateTo("/Services/Submenu2")}>
    Cooking Maid
  </MenuItem>
  <MenuItem onClick={() => navigateTo("/Services/Submenu2")}>
    Nanny
  </MenuItem>
  <MenuItem onClick={() => navigateTo("/Services/Submenu2")}>
    3 In 1
  </MenuItem>
  <MenuItem onClick={() => navigateTo("/Services/Submenu2")}>
    2 In 1
  </MenuItem>
  <MenuItem onClick={() => navigateTo("/Services/Submenu2")}>
    Nurse/Doctor
  </MenuItem>
</Menu>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          {["Home", "Services", "Pricing", "About Us", "Contact Us"].map(
            (text) => (
              <ListItem button key={text} onClick={toggleDrawer}>
                <Link
                  to={`/${text.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </>
  );
}
