import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.scss";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  //Show/hide menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const getSidebarStyle = () => {
    if (!isMenuOpen) {
      return {
        transform: "translateX(-180px)",
        transition: "transform 0.3s ease",
      };
    }
    return {};
  };
  return (
    <div
      className={`${classes.wrapperSidebar} ${
        isMenuOpen ? "" : classes.closed
      }`}
      //style={getSidebarStyle()}
    >
      {/* <div className={classes.menuToggle} onClick={toggleMenu}>
        <MenuIcon />
      </div> */}
      <div
        className={`${classes.menuItem} ${
          activeTab === 0 ? classes.active : ""
        }`}
        onClick={() => handleTabClick(0)}
      >
        <NavLink
          to="/manageQuestion"
          className={`${classes.link} ${
            activeTab === 0 ? classes.linkActive : ""
          }`}
        >
          <HelpOutlineIcon />
          <div className={classes.itemContent}>Questions</div>
        </NavLink>
      </div>
      <div
        className={`${classes.menuItem} ${
          activeTab === 1 ? classes.active : ""
        }`}
        onClick={() => handleTabClick(1)}
      >
        <NavLink
          to="/manageEvent"
          className={`${classes.link} ${
            activeTab === 1 ? classes.linkActive : ""
          }`}
        >
          <EventNoteIcon />
          <div className={classes.itemContent}>Events</div>
        </NavLink>
      </div>
    </div>
  );
};
export default Sidebar;
