import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.scss';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';

interface SidebarProps {
    isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className={classes.wrapperSidebar}>
            <div
                className={`${classes.menuItem} ${activeTab === 0 ? classes.active : ''}`}
                onClick={() => handleTabClick(0)}
            >
                <NavLink
                    to="/manageQuestion"
                    className={`${classes.link} ${activeTab === 0 ? classes.linkActive : ''}`}
                >
                    <HelpOutlineIcon />
                    {!isMobile && <div className={classes.itemContent}>Questions</div>}
                </NavLink>
            </div>
            <div
                className={`${classes.menuItem} ${activeTab === 1 ? classes.active : ''}`}
                onClick={() => handleTabClick(1)}
            >
                <NavLink to="/manageEvent" className={`${classes.link} ${activeTab === 1 ? classes.linkActive : ''}`}>
                    <EventNoteIcon />
                    {!isMobile && <div className={classes.itemContent}>Questions</div>}
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
