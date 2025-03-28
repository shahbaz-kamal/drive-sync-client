import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <>
      <header className="w-full fixed">
        <Navbar></Navbar>
      </header>
      <section className="">
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default Mainlayout;
