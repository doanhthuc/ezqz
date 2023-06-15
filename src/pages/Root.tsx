import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
//import MainNavigation from "../components/MainNavigation";
import Sidebar from "../components/SideBar/Sidebar";
function RootLayout() {
  const navigation = useNavigation();
  return (
    <div
      style={{ backgroundColor: "#FAFAFA", height: "100vh", overflowY: "auto" }}
    >
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flexGrow: 1 }}>
          {navigation.state === "loading" && <p>Loading...</p>}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default RootLayout;
