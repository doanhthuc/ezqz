import React, { useState, useEffect, useRef } from 'react';
import classes from './Header.module.scss';
import mgmLogo from '../../assets/images/mgmLogo.png';
import defaultAvatar from '../../assets/images/defaultAvatar.png';
import { NavLink } from 'react-router-dom';
import { Menu, MenuItem, Avatar } from '@mui/material';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

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
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
                <div className={classes.menu}>
                    <MenuItem onClick={handleClose} className={classes.menuItem}>
                        <Person2Icon className={classes.iconItem} />
                        <div className={classes.contentItem}>Profile</div>
                    </MenuItem>
                </div>
                <div className={classes.menuItem}>
                    <MenuItem onClick={handleClose} className={classes.menuItem}>
                        <LogoutIcon className={classes.iconItem} />
                        <div className={classes.contentItem}>Logout</div>
                    </MenuItem>
                </div>
            </Menu>
        </div>
    );
};

interface HeaderProps {
    onMenuClick?: (isOpen: boolean) => void;
}
const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleMenuClick = () => {
        setOpenDrawer(!openDrawer);
        if (onMenuClick) {
            onMenuClick(!openDrawer);
        }
    };
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.nameApp}>
                    <MenuIcon onClick={handleMenuClick} />
                    <div className={classes.logo}>
                        <div className={classes.name}>Easy Quizzy</div>
                        <img src={mgmLogo} alt="mgmLogo" className={classes.mgmLogo} />
                    </div>
                </div>
                <UserProfileDropdown />
            </div>
        </>
    );
};

export default Header;
