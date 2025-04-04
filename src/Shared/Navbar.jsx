import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import UseAuth from "../Hooks/UseAuth";

const Navbar = () => {
  const { user, logout } = UseAuth();
  return (
    <div className="navbar  w-11/12 md:w-10/12 mx-auto justify-center items-center  ">
      <div className="navbar-start">
        <div className="w-10 h-10 rounded-full mr-2">
          <img
            className="w-full h-full object-cover rounded-full "
            src={logo}
            alt=""
          />
        </div>
        <Link to={"/"}>
          <h3 className="text-xl md:text-3xl hidden md:inline-flex text-primary font-bold">
            driveSync
          </h3>
        </Link>
      </div>

      <div className="navbar-end">
        <div>
            {user?.emails &&  <button onClick={logout} className="btn bg-primary border border-primary hover:bg-primary hover:bg-opacity-80 hover:border-opacity-80 transition duration-300 ease-in-out hover:text-white">
            log Out
          </button>}
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
