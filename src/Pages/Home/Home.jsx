import React from "react";
import Banner from "./Banner";
import UploadForm from "./UploadForm";
import UseAuth from "../../Hooks/UseAuth";

const Home = () => {
  const { user } = UseAuth();
  console.log(user);
  return (
    <div className="space-y-10">
      {!user?.emails && (
        <div>
          <Banner></Banner>
        </div>
      )}
      {user?.emails && <UploadForm></UploadForm>}
    </div>
  );
};

export default Home;
