import React, { useState, useEffect, useRef } from "react";
import classes from "./Header.module.scss";
import mgmLogo from "../../assets/images/mgmLogo.png";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import { NavLink } from "react-router-dom";
import { Button, Menu, MenuItem, Avatar } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";

const UserProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.wrapperUser}>
      <Avatar alt="User Avatar" src={defaultAvatar} onClick={handleClick} />
      <div className={classes.userName}>Tran Thi Diem</div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <div className={classes.menuItem}>
          <MenuItem onClick={handleClose} style={{ width: "150px" }}>
            <Person2Icon className={classes.iconItem} />
            <div className={classes.contentItem}>Profile</div>
          </MenuItem>
        </div>
        <div className={classes.menuItem}>
          <MenuItem onClick={handleClose} style={{ width: "150px" }}>
            <LogoutIcon className={classes.iconItem} />
            <div className={classes.contentItem}>Logout</div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.nameApp}>
        <div className={classes.name}>Easy Quizzy</div>
        <img src={mgmLogo} alt="mgmLogo" className={classes.mgmLogo} />
      </div>
      <UserProfileDropdown />
    </div>
  );
};

export default Header;
