import React, { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axiosPublic
      .get("auth/user")
      .then((res) => setUser(res.data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const authInfo = { user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
