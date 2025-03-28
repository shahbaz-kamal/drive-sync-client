import React from "react";
import Banner from "./Banner";
import UploadForm from "./UploadForm";
import UseAuth from "../../Hooks/UseAuth";

const Home = () => {
    const name=UseAuth()
    console.log(name)
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <UploadForm></UploadForm>
    </div>
  );
};

export default Home;
