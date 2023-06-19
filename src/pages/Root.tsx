import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/SideBar/Sidebar';
import classes from './Root.module.scss';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

function RootLayout() {
    const [showSidebar, setShowSidebar] = useState(true);
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

    const handleMenuClick = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <Grid container className={classes.wrapper}>
            <Grid item xs={12}>
                <Header onMenuClick={handleMenuClick} />
            </Grid>
            <Grid item container>
                <Grid item xs={2}>
                    {showSidebar && <Sidebar isMobile={isMobile} />}
                </Grid>
                <Grid item xs={showSidebar ? 10 : 12}>
                    <main className={classes.main}>
                        <Outlet />
                    </main>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default RootLayout;
