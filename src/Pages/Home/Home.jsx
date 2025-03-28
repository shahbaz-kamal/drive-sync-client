import React from "react";
import Banner from "./Banner";
import UploadForm from "./UploadForm";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <UploadForm></UploadForm>
    </div>
  );
};

export default Home;
