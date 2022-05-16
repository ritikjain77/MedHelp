import React from "react";
import NavBar from "./Navbar";
import { Outlet } from "react-router";

export default function WithNav() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
