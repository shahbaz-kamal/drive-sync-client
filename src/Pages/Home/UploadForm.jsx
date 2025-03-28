import React, { useState } from "react";

import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UploadForm = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadComplete(false); // Reset when new file is selected
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!file) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select an image",
      });
      return;
    }
    setUploading(true);
    

    const formData = new FormData();
    formData.append("file", file);
    try {
      const uploadResponse = await axiosPublic.post("api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Get the image URL from response
      const url =
        uploadResponse.data.file.webViewLink ||
        uploadResponse.data.file.webContentLink;
      setImageUrl(url);
      setUploadComplete(true);

      console.log(imageUrl);
    //   uploading to google sheet
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
      const newInformation = { name, phone, email, address, imageUrl };
      const saveResponse=await axiosPublic.post('api/save-to-sheet',newInformation)
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your information has been saved to google sheet",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: "url(https://i.ibb.co.com/9ky0Lvt5/drive-Sync.webp)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-70"></div>
      <div className="hero-content text-neutral-content  w-11/12 md:w-10/12 mx-auto pt-[120px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-10 text-5xl font-bold text-center ">
            {user?.emails && <span>Welcome, {user?.displayName}. </span>}Please,
            Update your info
          </h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleUpdate} className="card-body">
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
                  name="email"
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
                  name="address"
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
                  onChange={handleFileChange}
                  accept="image/*"
                  disabled={uploading}
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
