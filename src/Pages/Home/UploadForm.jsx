import React from "react";
import { FaGoogle } from "react-icons/fa";

const UploadForm = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/9ky0Lvt5/drive-Sync.webp)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-70"></div>
      <div className="hero-content text-neutral-content  w-11/12 md:w-10/12 mx-auto">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Update your info</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black mb-1">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Phone */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black mb-1">Phone</span>
                </label>
                <input
                  name="phone"
                  type="number"
                  placeholder="Phone number"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black mb-1">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* address */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black mb-1">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black mb-1">
                    Profile Photo
                  </span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary border border-primary hover:bg-primary hover:bg-opacity-80 hover:border-primary/80 transition duration-300 ease-in-out hover:text-white w-full">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
