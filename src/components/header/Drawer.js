import React, { useState, Fragment } from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function DrawerNav() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      id="menu"
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        background: "#b3302a",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="test">
        <li>
          <a className="mobile-link"  href="#container">
            About
          </a>
        </li>
        <li>
          <a className="mobile-link" href="#projects">
            Projects
          </a>
        </li>
        <li >
          <a 
          className="mobile-link"
           href="#contact">
            Contact
          </a>
        </li>
      </List>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <Fragment key={anchor}>
          <Button
        
           onClick={toggleDrawer(anchor, true)}>
            <i 
          
            className="fa fa-bars"></i>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
