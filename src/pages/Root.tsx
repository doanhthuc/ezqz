import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
//import MainNavigation from "../components/MainNavigation";
import Sidebar from "../components/SideBar/Sidebar";
import Grid from "@mui/material/Unstable_Grid2";
function RootLayout() {
  const navigation = useNavigation();
  return (
    <div
      style={{ backgroundColor: "#FAFAFA", height: "100vh", overflowY: "auto" }}
    >
      <Header />
      <Grid container spacing={2}>
        <Grid xs={2}>
          <Sidebar />
        </Grid>
        <Grid xs={10} justifyContent="center">
          {navigation.state === "loading" && <p>Loading...</p>}
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}
export default RootLayout;
