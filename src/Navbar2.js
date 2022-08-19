import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
export const Navbar2 = () => {
  const [anchor, setanchor] = useState(null);
  const open = Boolean(anchor);
  const [isOpen, setisOpen] = useState(false);

  const handleClick = (e) => {
    setanchor(e.currentTarget);
  };
  const handleClose = () => {
    setanchor(null);
  };

  return (
    <Box >
      <AppBar sx={{ padding: 0, textAlign: "center" ,flexWrap:'wrap'}} position="static">
        <Toolbar sx={{flexWrap:'wrap'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => setisOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={isOpen} onClose={() => setisOpen(false)}>
            <Box p={2} width="200px" textAlign="center" role="presentation">
              <Typography variant="h6" component="div">
                ~ADD MENU ITEMS HERE~
              </Typography>
            </Box>
          </Drawer>
          <Box sx={{display:'flex',flexWrap:'wrap'}} m={2} spacing={2} sx={{ flexGrow: 1 }}>
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              to="/Home"
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "white",
                }}
                variant="subtitle2"
              >
                HOME
              </Typography>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              to="/Counter"
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "white",
                }}
                variant="subtitle2"
              >
                COUNTER
              </Typography>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              to="/Nlist"
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "white",
                }}
                variant="subtitle2"
              >
                LIST
              </Typography>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              to="/Aboutus"
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "white",
                }}
                variant="subtitle2"
              >
                ABOUT US
              </Typography>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              to="/MaterialUI"
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "white",
                }}
                variant="subtitle2"
              >
                MATERIAL UI
              </Typography>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              to="/Fetchapi"
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "white",
                }}
                variant="subtitle2"
              >
                FETCH API
              </Typography>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Typography
              sx={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "white",
              }}
              variant="subtitle2"
              id="resources-button"
              onClick={handleClick}
              aria-controls={open ? "resources-menu" : undefined}
              aria-haspopup="true"
            >
                  <Badge badgeContent={2} color="secondary">

                <Avatar sx={{borderRadius:"50%"}} src={`https://randomuser.me/api/portraits/men/3.jpg`}>
                </Avatar>
                  </Badge>
            </Typography>
          </Box>
          
          
          <Menu
            anchorEl={anchor}
            open={open}
            MenuListProps={{ "aria-labelledby": "resources-button" }}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/surajrt10"
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "black",
                  }}
                  variant="subtitle2"
                >
                  Github Profile
                </Typography>
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link undrline="none" href>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "black",
                  }}
                  variant="subtitle2"
                >
                  LinkedIn Profile
                </Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link undrline="none" href>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "black",
                  }}
                  variant="subtitle2"
                >
                  Material UI resources
                </Typography>
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
