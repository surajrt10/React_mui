import { IconButton } from "@mui/material";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Nav() {
  const history = useHistory();
  return (

    <nav className="navbar">
      <Link className="link" to="/Home">
        Home
      </Link>
      <Link className="link" to="/Counter">
        Counter
      </Link>
      <Link className="link" to="/List">
        List
      </Link>
      <Link className="link" to="/Aboutus">
        About Us
      </Link>
      <Link className="link" to="/MaterialUI">
        Material UI
      </Link>
        <IconButton className="forward"onClick={() => history.go(1)}>
          <ArrowForwardIosIcon/>
        </IconButton>
        <IconButton className="back" onClick={() => history.go(-1)}>
          <ArrowBackIosIcon/>
        </IconButton>
    </nav>
      
  );
}

export default Nav;
