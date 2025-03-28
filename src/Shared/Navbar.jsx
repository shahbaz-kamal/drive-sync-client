import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <div className="navbar  w-11/12 md:w-10/12 mx-auto justify-center items-center">
      <div className="navbar-start">
        <div className="w-10 h-10 rounded-full mr-2">
          <img
            className="w-full h-full object-cover rounded-full "
            src={logo}
            alt=""
          />
        </div>
        <Link to={"/"}>
          <h3 className="text-xl md:text-3xl hidden md:inline-flex">
            driveSync
          </h3>
        </Link>
      </div>

      <div className="navbar-end">
        <div>
          <button className="btn"> log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
