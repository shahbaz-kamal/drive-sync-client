import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <>
      <header className="w-full">
        <Navbar></Navbar>
      </header>
      <section className="mt-10">
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default Mainlayout;
