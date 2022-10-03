import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { BiMenu } from "react-icons/bi";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Header.css";
import "./FadeMenu.css";


export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [users, setusers] = useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setusers(response.data))
      .then((error) => console.log(error));
  }, []);

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <BiMenu className="menu" />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        className="category"
        style={{
          position: "absolute",
          top: "67px",
          left: "95px",
          listStyle: "none",
          textAlign: "start",
        }}
      >
        {users.map((user) => (
          <MenuItem
            className="items"
            onClick={handleClose}
            key={user.id}
            value={user.id}
            
          >
            {user.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
