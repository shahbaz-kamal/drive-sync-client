import React from "react";
import { FaGoogle } from "react-icons/fa";


const Banner = () => {

    const handleLogin=()=>{
         window.location.href = 'http://localhost:5000/auth/google'
    }
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/9ky0Lvt5/drive-Sync.webp)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center w-11/12 md:w-10/12 mx-auto">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">
            DriveSync – Seamless Cloud Storage
          </h1>
          <p className="mb-5">
            Easily upload your profile picture and personal details with
            DriveSync. Your data is securely stored in Google Drive & Google
            Sheets, ensuring seamless access and organization. Powered by OAuth
            authentication, DriveSync keeps your information safe and always in
            sync.
          </p>
          <button onClick={handleLogin} className="btn btn-warning">
            <FaGoogle />
            Login to Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
